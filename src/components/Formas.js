import './formas.css'
import { Link } from 'react-router-dom';
export default function Formas(props) {
    return (
        <Link className='formas' to={props.site}>
            <div className='teste'>
                <img src={props.img} />
            </div>            
            <div className='info'>
                <p className='titulo'>{props.titulo}</p>
                <p className='texto'>{props.texto}</p>
            </div>
        </Link>
    );
}