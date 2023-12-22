import './style.css'
import Logo from '../logo';
import HeaderIcones from '../headerIcones';
import HeaderOpcoes from '../headerOpcoes';

function Header() {
    return (
        <header className='App-header'>
            <Logo/>
            <HeaderOpcoes/>
            <HeaderIcones/>        
        </header>
    )
}

export default Header