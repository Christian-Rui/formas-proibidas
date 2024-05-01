import '../../../assets/css/bannerForma.css'

import Figura from './Figura.js'
import Texto from './Texto.js'


export default function BannerForma(props) {
    return (
        <div className="bannerForma">
            <Figura imgForma={props.img} titulo={props.nome}></Figura>
            <Texto textoForma={props.texto}></Texto>
        </div>
    );

}