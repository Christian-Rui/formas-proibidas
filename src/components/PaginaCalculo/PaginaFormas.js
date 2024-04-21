import Header from '../PaginaPrincipal/Conteudo/Header/Header.js';


import BannerForma from './ConteudoCalculo/BannerForma.js'
import AreaDeCalculo from './ConteudoCalculo/AreaDeCalculo.js';

import circulo from '../../img/circulo.png'
import cubo from '../../img/Cubo.svg'

import './paginaFormas.css'

import { useParams } from 'react-router-dom';


var listaFormas = [{
    id: 'circulo',
    titulo: 'Circulo',
    imagem: circulo,
    texto: 'O círculo é uma figura geométrica plana que consiste em todos os pontos que estão a uma mesma distância de um ponto central chamado centro. Essa distância é conhecida como raio do círculo. O círculo é uma forma fechada, não possui arestas ou vértices, e é caracterizado por sua simetria radial 12.\n\nVisualize um disco perfeito, uma roda que gira sem esforço. O círculo é essa harmonia, essa união de infinitos pontos equidistantes. Ele nos envolve, nos abraça com sua curvatura suave.',
    info: 'O círculo é uma figura geométrica que nos envolve com sua elegância e simetria. Para calcular sua área, utilizamos uma fórmula simples: \n\nÁrea do Círculo (A) = π × raio ao quadrado (r²)\n\nAqui estão os detalhes:π (pi) é uma constante matemática aproximadamente igual a 3,14.\n\nRaio ® é a distância entre o centro do círculo e qualquer ponto na sua borda.\n\nImagine que você está dançando em torno do centro do círculo, como um bailarino matemático. O raio é a sua ligação com o centro, e o quadrado dele é a base para calcular a área. Multiplicamos esse quadrado pelo valor de π para obter a área total.\n\nSe você tiver o diâmetro (que é o dobro do raio), basta dividir o diâmetro por 2 para encontrar o raio e aplicar a fórmula.',
    label: ['raio']
},
{
    id: 'cubo',
    titulo: 'Cubo',
    imagem: cubo,
    texto: 'Texto para o cubo bonito',
    info: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    label: ['base', 'altura']
},
{
    id: 'romboedro',
    titulo: 'Cubo',
    imagem: cubo,
    texto: 'Texto para o romboedro foda',
    info: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    label: ['base', 'altura', 'comprimento', 'quatro', 'cinco', 'seis']
}];

export default function PaginaFormas() {
    const { forma } = useParams();
    const objetoForma = listaFormas.find(objeto => objeto.id === forma);

    return (
        <>
            <Header />
            <BannerForma
                img={objetoForma.imagem}
                nome={objetoForma.titulo}
                texto={objetoForma.texto}>
            </BannerForma>
            <div className='bg'>
                <AreaDeCalculo
                    subtitulo={objetoForma.titulo}
                    infoCalc={objetoForma.info}
                    objeto={objetoForma}>
                </AreaDeCalculo>
            </div>


        </>
    );
}

