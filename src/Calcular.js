import React, { useState } from 'react';


export default function Calcular({props}) {
    const [valores, setValores] = useState({}); // Estado para armazenar os valores

    // Função genérica para calcular a área
    const calcularArea = () => {
        switch (props.id) {
            case 'circulo':
                return Math.PI * valores.raio * valores.raio;
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
            <input
                type='number'
                placeholder={`Insira o valor de ${campo}`}
                onChange={valor => setValores(prevState => ({ ...prevState, [campo]: valor }))}
            />
        ));

        return inputs;
    };

    return (
        <div>
            {renderInputs()}
            {/* Adicione outros campos de entrada conforme necessário */}
            <p>Área: {calcularArea().toFixed(2)}</p>
        </div>
    );
}

