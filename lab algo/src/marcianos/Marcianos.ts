class Marcianos {
  private static marcianos: Marcianos = new Marcianos()
  private static cantidad: number

  constructor() {
    Marcianos.cantidad = 10
  }

  public static getMarcianos(): Marcianos {
    return Marcianos.marcianos
  }

  public derribaMarcianos(): void {
    if (Marcianos.cantidad > 0) {
      Marcianos.cantidad--;
      console.log("Soy el bueno, derribe un marciano");
    }
  }

  public crearMarciano(): void {
    if (Marcianos.cantidad > 0) {
      Marcianos.cantidad++
      console.log("soy el malo, cree un marciano")
    }
  }

  public cuantosQuedan(print: boolean): number {
    if (Marcianos.cantidad > 0) {
      if (print) {

        console.log("Quedan : ", Marcianos.cantidad, " de marcianos")
      }
    }
    else {
      if (print) {

        console.log("Felicidades has ganado")
      }
    }
    return Marcianos.cantidad
  }

}

export default Marcianos
