import logo from '../../img/logo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`;

const LogoImagem = styled.img`
    margin-right: 10px;
`;

function Logo() {
    return (
        <Link to="/">
            <LogoContainer>
                <LogoImagem 
                    src={logo} 
                    alt='logo'
                    className='logo-img'
                />
            <p><strong>Alura</strong>Books</p>
            </LogoContainer>
        </Link>
    )
}

export default Logo;