import InfoCalculo from './InfoCalculo.js'
import Calcular from './Calcular.js';
import './areaDeCalculo.css'

export default function AreaDeCalculo(props) {
    return (
        <div className="areaDeCalculo">
            
            <h2 className='subtitulo'>Calculadora da área do {props.subtitulo}</h2>
            <div className='informacoes'>
                <InfoCalculo infoTexto={props.infoCalc}></InfoCalculo>
                <Calcular props={props.objeto} />
            </div>
        </div>
    );
}