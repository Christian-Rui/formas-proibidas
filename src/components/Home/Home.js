import Header from '../Header.js';
import Banner from './Banner/Banner.js';
import TextoInicial from './TextoPrincipal/TextoInicial.js';
import ConjuntoDeFormas from './Conteudo/ConjuntoDeFormas.js';
import Footer from '../Footer.js'

export default function Home() {
  return (
    <>
      <Header />
      <Banner></Banner>
      <TextoInicial></TextoInicial>
      <ConjuntoDeFormas></ConjuntoDeFormas>
      <Footer></Footer>
    </>
  );
}
