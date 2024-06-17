import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');
  const [erro, setErro] = useState('');

  const calcularImc = () => {
    if (altura <= 0 || peso <= 0) {
      setErro('Altura e peso devem ser valores positivos.');
      setImc(null);
      setClassificacao('');
      return;
    }

    const alturaEmMetros = altura / 100;
    const valorImc = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
    setImc(valorImc);
    classificarImc(valorImc);
    setErro('');
  };

  const classificarImc = (valorImc) => {
    let classificacao = '';
    if (valorImc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (valorImc >= 18.5 && valorImc < 24.9) {
      classificacao = 'Peso normal';
    } else if (valorImc >= 25 && valorImc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (valorImc >= 30 && valorImc < 34.9) {
      classificacao = 'Obesidade Grau I';
    } else if (valorImc >= 35 && valorImc < 39.9) {
      classificacao = 'Obesidade Grau II';
    } else if (valorImc >= 40) {
      classificacao = 'Obesidade Grau III';
    }
    setClassificacao(classificacao);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de IMC</h1>
        <div className="form">
          <div>
            <label>
              Altura (cm):
              <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
            </label>
          </div>
          <div>
            <label>
              Peso (kg):
              <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
            </label>
          </div>
          <button onClick={calcularImc}>Calcular IMC</button>
        </div>
        {erro && <p className="error">{erro}</p>}
        {imc && (
          <div className="result">
            <p>Seu IMC é: {imc}</p>
            <p>Classificação: {classificacao}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
