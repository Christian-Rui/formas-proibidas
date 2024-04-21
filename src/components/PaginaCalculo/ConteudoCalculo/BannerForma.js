import Figura from './Figura.js'
import Texto from './Texto.js'

import './bannerForma.css'

export default function BannerForma(props) {
    return (
        <div className="bannerForma">
            <Figura imgForma={props.img} titulo={props.nome}></Figura>
            <Texto textoForma={props.texto}></Texto>
        </div>
    );

}