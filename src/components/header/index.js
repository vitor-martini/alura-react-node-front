import Logo from '../logo';
import HeaderIcones from '../headerIcones';
import HeaderOpcoes from '../headerOpcoes';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: white;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <HeaderOpcoes/>
            <HeaderIcones/>        
        </HeaderContainer>
    )
}

export default Header