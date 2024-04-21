import './infoCalculo.css'

export default function InfoCalculo(props){
    const linhas = props.infoTexto.split('\n');
    return (
        <div className="infoCalculo containers">
            {linhas.map((linha, i) => <p className="infoTexto" key={i}>{linha}</p>)}
        </div>
    );
}