import Marcianos from './Marcianos'

class Computadora {
  private marcianos: Marcianos

  constructor() {
    this.marcianos = Marcianos.getMarcianos()
  }


  public crearMarcianos(): void {
    this.marcianos.crearMarciano()
  }

}

export default Computadora
