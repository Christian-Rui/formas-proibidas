import Formas from './Formas.js'
import circulo from '../img/circulo.png'
import cubo from '../img/Cubo.svg'
import './conjuntoDeFormas.css'

export default function ConjuntoDeFormas() {
    return (
        <div className='conjuntoDeFormas'>
            <Formas site={'/nova-pagina/circulo'} img={circulo} titulo={'Explorando o Mágico Círculo!'} texto={
                'Bem-vindos à página do Círculo, onde a geometria se torna uma dança circular. Imagine-se girando em torno do centro, como um bailarino em um salão matemático'
            }
            ></Formas>
            <Formas site={'/nova-pagina/cubo'} img={cubo} titulo={'Explorando o Enigmático Cubo!'} texto={
                'Bem-vindos à página do Cubo, onde a matemática ganha vida tridimensional. Preparem-se para mergulhar nas profundezas do espaço cúbico!'
            }
            ></Formas>
            <Formas site={'/nova-pagina/romboedro'} img={circulo} titulo={'Explorando o Mágico Círculo!'} texto={
                'Bem-vindos à página do Círculo, onde a geometria se torna uma dança circular. Imagine-se girando em torno do centro, como um bailarino em um salão matemático'
            }
            ></Formas>
            <Formas img={circulo} titulo={'Explorando o Mágico Círculo!'} texto={
                'Bem-vindos à página do Círculo, onde a geometria se torna uma dança circular. Imagine-se girando em torno do centro, como um bailarino em um salão matemático'
            }
            ></Formas>
        </div>
    );
}