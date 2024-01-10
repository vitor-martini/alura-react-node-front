import { livros } from "./ultimosLancamentos";
import { Titulo } from "../titulo";
import styled from "styled-components";
import CardRecomenda from "../cardRecomenda";
import imagemLivro from "../../img/livro2.png"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo 
        cor='#EB9B00'
        tamanhoFonte="36px"
      >ÚLTIMOS LANÇAMENTOS</Titulo>
      <NovosLivrosContainer>
        {livros.map(livro => (
          <div>
            <p>{livro.nome}</p>
            <img src={livro.src} alt='capa do livro'/>
          </div>
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo='Talvez você se interesse por...'
        subtitulo='Angular 11'
        descricao='Construindo uma aplicação com a plataforma Google.'
        imagem={imagemLivro}
        alt='Capa do livro de recomendação'/>
    </UltimosLancamentosContainer>
  ) 
}

export default UltimosLancamentos;