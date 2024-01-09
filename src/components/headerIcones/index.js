import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
    display: flex;
    margin-right: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
`;

const Icones = styled.ul`
    display: flex;
`;

const icones = [perfil, sacola];

function HeaderIcones(){
    return (
        <Icones>
          { icones.map( icone => (
            <Icone><img 
                  src={icone}
                  alt='icones'></img></Icone>
            ))}
        </Icones>
    )
}

export default HeaderIcones