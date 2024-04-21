import Header from './Conteudo/Header/Header.js';
import Banner from './Conteudo/Header/Banner.js';
import TextoInicial from './Conteudo/Main/TextoInicial.js';
import ConjuntoDeFormas from './Conteudo/Main/ConjuntoDeFormas.js';

function Home() {
    return (
      <>
        <Header/>
        <Banner></Banner>
        <TextoInicial></TextoInicial>
        <ConjuntoDeFormas></ConjuntoDeFormas>
        </>
    );
  }
  
  export default Home;
  