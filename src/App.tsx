
import Reactor from './components/reactor/reactor';
import styled from 'styled-components';



function App() {
  const openPaint = () => {
    const { exec } = window.require('child_process');
    exec('mspaint');
  };

  return (
    <MainContainer>
    <div className="App">
      <header className="App-header">
        <h1>Electron React Paint</h1>
        <button onClick={openPaint}>Open Paintttt</button>
        <Reactor></Reactor>
      </header>
    </div>
    </MainContainer>
  );
}

export default App;



const MainContainer = styled.div`
  background-color: black; 
  width: 100%;
  height: 100vh;
`


