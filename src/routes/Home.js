import styled from 'styled-components'
import Pesquisa from '../components/pesquisa';
import UltimosLancamentos from '../components/ultimosLancamentos';

const AppContainer = styled.div`
  width: 100vw;
  height: 100svh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
} 

export default Home;
