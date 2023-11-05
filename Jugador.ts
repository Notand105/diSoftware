import Marcianos from './Marcianos'

class Jugador {
  private marcianos: Marcianos

  constructor() {
    this.marcianos = Marcianos.getMarcianos()
  }

  public destruirMarciano() {
    this.marcianos.derribaMarcianos()
  }
}

export default Jugador
