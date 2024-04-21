import Formas from './Formas.js';
import circulo from '../../../../img/circulo.png';
import cubo from '../../../../img/Cubo.svg';
import retangulo from '../../../../img/Rectangulo.svg';
import romboedro from '../../../../img/Romboedro.svg';
import trapezio from '../../../../img/Trapezio.svg';
import poligono from '../../../../img/Poligono.svg';
import quadrado from '../../../../img/Quadrado.svg'
import cuboide from '../../../../img/Cuboide.svg'
import './conjuntoDeFormas.css';

export default function ConjuntoDeFormas() {
    return (
        <div className='conjuntoDeFormas'>
            <Formas site={'/pagina-calculo/circulo'} img={circulo} titulo={'Explorando o Mágico Círculo!'} texto={
                'Bem-vindos à página do Círculo, onde a geometria se torna uma dança circular. Imagine-se girando em torno do centro, como um bailarino em um salão matemático'
            }
            ></Formas>
            <Formas site={'/pagina-calculo/cubo'} img={cubo} titulo={'Explorando o Enigmático Cubo!'} texto={
                'Bem-vindos à página do Cubo, onde a matemática ganha vida tridimensional. Preparem-se para mergulhar nas profundezas do espaço cúbico!'
            }
            ></Formas>
            <Formas site={'/pagina-calculo/retengulo'} img={retangulo} titulo={'Desvendando o Retângulo!'} texto={
                'Bem-vindos à página do Retângulo, onde a matemática se desdobra em quatro lados retos e paralelos. Imagine-se medindo os ângulos, traçando linhas e descobrindo a área desse polígono.'
            }
            ></Formas>
            <Formas site={'/pagina-calculo/romboedro'} img={romboedro} titulo={'Explorando o Fascinante Romboedro!'} texto={
                'Bem-vindos à página do Romboedro, onde a geometria se entrelaça em seis faces de losango. Imagine-se segurando cada vértice, girando-o no espaço e desvendando suas propriedades únicas.'
            }
            ></Formas>
            <Formas site={'/pagina-calculo/trapezio'} img={trapezio} titulo={'Explorando o Desafiador Trapézio Irregular!'} texto={
                'Bem-vindos à página do Trapézio Irregular, onde a matemática se entrelaça em quatro lados que não seguem as regras tradicionais. Imagine-se desenhando esses lados no ar, criando um polígono único e intrigante.'
            }
            ></Formas>
            <Formas site={'/pagina-calculo/poligono'} img={poligono} titulo={'Explorando o Enigmático Polígono Regular!'} texto={
                'Bem-vindos à página do Polígono Regular, onde a matemática se desdobra em n lados de igualdade e harmonia. Imagine-se traçando esses lados, conectando vértices e desvendando os segredos dessa figura geométrica versátil.'
            }
            ></Formas>
            <Formas site={'/pagina-calculo/quadrado'} img={quadrado} titulo={'Explorando o Fascinante Cuboide!'} texto={
                'Bem-vindos à página do Cuboide, onde a geometria se desdobra em três dimensões. Imagine um retângulo que ganha profundidade, estendendo-se como um bloco mágico.'
            }
            ></Formas>
            <Formas site={'/pagina-calculo/cuboide'} img={cuboide} titulo={'Explorando o Fascinante Cuboide!'} texto={
                'Bem-vindos à página do Cuboide, onde a geometria se desdobra em três dimensões. Imagine um retângulo que ganha profundidade, estendendo-se como um bloco mágico.'
            }
            ></Formas>
        </div>
    );
}