import Header from './components/Header.js';
import Banner from './components/Banner.js';
import TextoInicial from './components/TextoInicial.js';
import ConjuntoFormas from './components/ConjuntoDeFormas.js';
import ConjuntoDeFormas from './components/ConjuntoDeFormas.js';

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
  