import styled from "styled-components";
import Menu from "./components/TopMenu/top_menu";
import MainSiteView from "./views/main_site";

function App() {
  const openPaint = () => {
    const { exec } = window.require("child_process");
    exec("mspaint");
  };

  return (
    <MainContainer>
      <div className="App">
        <header className="App-header">
          <Menu></Menu>
          <button onClick={openPaint}>Open Paintttt</button>
        </header>
        <MainSiteView/>
      </div>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
`;
