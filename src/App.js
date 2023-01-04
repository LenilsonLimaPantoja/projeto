import axios from 'axios';
import { useEffect, useState } from 'react';

// editar o App.css para alterar o estilo, as classes ja estão nomeadas
import './App.css';

function App() {
  // variavel para guardar os dados vindos da api
  const [animes, setAnimes] = useState([]);

  // função para buscar os dados da api e gravar na variavel animes
  const dadosApi = async () => {
    const response = await axios.get('https://gogoanime.consumet.org/popular');
    setAnimes(response.data)
  }

  // useEffect executa a função que busca os dados da api (dadosApi) toda vez que a tela é carregada
  useEffect(() => {
    dadosApi();
  }, []);

  return (
    // no jsx a nomenclatura que seria 'class' no html, é alterada pra 'className'
    <div className='container'>
      {animes.map((item, index) => (
        // mao é semelhante ao for, cria um laço pra percorrer o array de animes e a cada passagem no laço ele mostra o item atual na tela
        <div key={index} className='item'>
          <p className='titulo'>ID: {item.animeId}</p>
          <p className='id'>Titulo: {item.animeTitle}</p>
          <p className='data'>Data: {item.releasedDate}</p>
          <p className='link'>
            <a href={item.animeUrl}>{item.animeUrl}</a>
          </p>
          <img className='imagem' src={item.animeImg} />
        </div>
      ))}
    </div>
  );
}

export default App;
