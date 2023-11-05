import Marcianos from '../marcianos/Marcianos'

class Jugador {
  private static instance : Jugador
  private marcianos: Marcianos

  private constructor() {
    this.marcianos = Marcianos.getMarcianos()
  }

  public destruirMarciano() {
    this.marcianos.derribaMarcianos()
  }

  public static getInstance():Jugador{
    if (!Jugador.instance){
      Jugador.instance = new Jugador()
    }
    return Jugador.instance
  }
}


export default Jugador
