import Marcianos from '../marcianos/Marcianos'

class Computadora {
  private static instance : Computadora
  private marcianos: Marcianos

  private constructor() {
    this.marcianos = Marcianos.getMarcianos()
  }


  public crearMarcianos(): void {
    this.marcianos.crearMarciano()
  }
  public static getInstance():Computadora{
    if (!Computadora.instance){
      Computadora.instance = new Computadora()
    }
    return Computadora.instance
  }

}

export default Computadora
