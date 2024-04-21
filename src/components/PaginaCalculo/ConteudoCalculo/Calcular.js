import React, { useState } from 'react';
import './calcular.css'

export default function Calcular({props}) {
    const [valores, setValores] = useState({}); // Estado para armazenar os valores
    
    console.log(props.id)
    // Função genérica para calcular a área
    const calcularArea = () => {
        switch (props.id) {
            case 'circulo':
                return (Math.PI * valores.raio ** 2);
            case 'cubo':
                return valores.base * valores.altura;
            case 'romboedro':
                return valores.base * valores.altura * valores.comprimento;
            // Adicione outras formas aqui (romboedro, cuboide, etc.)
            default:
                return 0; // Forma não reconhecida
        }
    };

    // Renderiza os campos de entrada com base na forma selecionada
    const renderInputs = () => {
        const inputs = props.label.map((campo) => (
            <input className='inputs'
                type='number'
                placeholder={`Insira o valor de ${campo}`}
                onChange={valor => setValores(prevState => ({ ...prevState, [campo]: parseFloat(valor.target.value)}))}
            />
        ));

        return inputs;
    };
    return (
        <div className='calcular containers'>
            <div>
            <h3>Insira as informações a seguir</h3>
                {renderInputs()}
            </div>
                <p>Área: {calcularArea().toFixed(2) == 'NaN' ? 'Nenhum Resultado' : calcularArea().toFixed(2)}</p>
        </div>
    );
}

