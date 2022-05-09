import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }

  body {
    background: #3434;
    font-family: sans-serif ;
  }
`


const Container = styled.div`
      display: flex;
      justify-content: center ;
      width: 100%;
      height:100%;
      gap: 1rem;
`

const SectionOne = styled.section`
      width: 40vw;
      min-height: 80vh;
      background: #5454;
      padding: 1rem;
`

const SectionTwo = styled.section`
    width: 40vw;
    min-height: 80vh;
    background: #5555 ;
    padding: 1rem;
`


function App() {
  return (
    <>
    <GlobalStyle />
    <Container>
        <SectionOne> 
          <h1> Who I am</h1>
          </SectionOne>
        <SectionTwo>
          <h1>My Works</h1>
        </SectionTwo>
    </Container>
    </>
  );
}

export default App;
