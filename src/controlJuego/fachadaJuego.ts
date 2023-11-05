import Computadora from './Computadora'
import Jugador from '../jugador/Jugador'
import Marcianos from '../marcianos/Marcianos'

class FachadaJuego{
    private marcianos : Marcianos 
    private jugador : Jugador
    private computadora: Computadora

    constructor(){
        this.marcianos= Marcianos.getMarcianos()
        this.computadora= Computadora.getInstance()
        this.jugador= Jugador.getInstance()
    }

    public destruir():void{
        this.jugador.destruirMarciano()
    }
    public crear():void{
        this.computadora.crearMarcianos()
    }
    public ganar():boolean{
        let left = this.marcianos.cuantosQuedan(false)
        return left > 0
    }

    public cantidadMarcianos():void{
        this.marcianos.cuantosQuedan(true)
    }

}

export default FachadaJuego