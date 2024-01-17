import Input from '../input';
import styled from  'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import { getLivros } from '../../services/livros';
import { postFav } from '../../services/favoritos'

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const ResultadoPesquisa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
      width: 200px;
  }
  img {
      width: 100px;
  }
  &:hover {
      border: 1px solid white;
  }
`;

function Pesquisa(){
  const [livrosPesquisados, setLivrosPesquisados] = useState([])
  const [livros, setLivros] = useState([])

  useEffect(() => {
    fetchLivros()
  }, [])

  async function fetchLivros(){
    const livrosDaAPI = await getLivros()
    setLivros(livrosDaAPI)
  }

  async function insertFav(id) {
    await postFav(id)
    alert('Livro inserido aos favoritos!')
  }

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input 
        placeholder='Procure pela sua próxima leitura'
        onBlur={evento => {
          const livroPesquisado = evento.target.value
          const resultadoPesquisa = livros.filter(livro => livro.name.includes(livroPesquisado))
          setLivrosPesquisados(resultadoPesquisa)
        }} 
      />
      { livrosPesquisados.map(livro => (
        <ResultadoPesquisa onClick={() => insertFav(livro.id)}>
          <p>{livro.name}</p>
        </ResultadoPesquisa>
      ))}
    </PesquisaContainer>
  );
}

export default Pesquisa