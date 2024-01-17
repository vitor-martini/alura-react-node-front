import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getFavs, deleteFav } from '../services/favoritos'
import livroImg from '../img/livro.png'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px;
`

function Favoritos() {
  const [favs, setFavs] = useState([])

  async function fetchFavs() {
    const ApiFavs = await getFavs()
    setFavs(ApiFavs)
  }

  useEffect(() => {
    fetchFavs()
  }, [])

  async function destroyFav(id) {
    await deleteFav(id)
    alert('Livro excluido com sucesso!')
    await fetchFavs()
  }

  return (
    <AppContainer>
      <div>
        <Titulo>{favs.length !== 0 ? "Aqui estão seus livros favoritos" : "Você não tem livros favoritos :(" }</Titulo>
        <ResultadoContainer>
          {
            favs.map(x => (
              <Resultado onClick={() => destroyFav(x.id)}>
                <p>{x.name}</p>
                <img src={livroImg} alt="Livro favorito"/>
              </Resultado>
            ))
          }
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
} 

export default Favoritos;
