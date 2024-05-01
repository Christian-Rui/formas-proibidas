import '../../../assets/css/infoCalculo.css'

export default function InfoCalculo(props){
    const linhas = props.infoTexto.split('\n');
    return (
        <div className="infoCalculo containers">
            {linhas.map((linha) => <p className="infoTexto">{linha}</p>)}
        </div>
    );
}