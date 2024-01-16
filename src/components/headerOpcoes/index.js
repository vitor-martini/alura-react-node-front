import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Opcoes = styled.ul`
    display: flex;
`;
const Opcao = styled.li`
   font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    cursor: pointer;
    min-width: 120px;
`;

const opcoes = [
    {nome: 'CATEGORIAS', path: '/categorias'}, 
    {nome: 'FAVORITOS', path: '/favoritos'},
    {nome: 'MINHA ESTANTE', path: '/minha-estante'}
];

function HeaderOpcoes() {
    return (
        <Opcoes>
          {
            opcoes.map((item) => (
                <Link to={item.path}>
                    <Opcao><p>{item.nome}</p></Opcao>
                </Link>
            ))
          }
        </Opcoes>
    )
}

export default HeaderOpcoes