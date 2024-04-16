import Header from './components/Header.js';
import Banner from './components/Banner.js';
import TextoInicial from './components/TextoInicial.js';
import ConjuntoFormas from './components/ConjuntoDeFormas.js';
import ConjuntoDeFormas from './components/ConjuntoDeFormas.js';
import { useParams } from 'react-router-dom';
import circulo from './img/circulo.png'
import cubo from './img/Cubo.svg'
import Calcular from './Calcular.js';

var listaFormas = [{
    id: 'circulo',
    titulo: 'Circulo',
    imagem: circulo,
    texto: 'Texto para o circulo',
    label: ['raio']
},
{
    id: 'cubo',
    titulo: 'Cubo',
    imagem: cubo,
    texto: 'Texto para o cubo bonito',
    label: ['base', 'altura']
},
{
    id: 'romboedro',
    titulo: 'Cubo',
    imagem: cubo,
    texto: 'Texto para o romboedro foda',
    label: ['base', 'altura', 'comprimento']
}];

export default function PaginaFormas() {
    const { forma } = useParams();
    const objetoForma = listaFormas.find(objeto => objeto.id === forma);

    return (
        <>
            <Header />
            <h1>{objetoForma.titulo}</h1>
            <img src={objetoForma.imagem}></img>
            <p>{objetoForma.texto}</p>
            <Calcular props={objetoForma}></Calcular>
        </>
    );
}

