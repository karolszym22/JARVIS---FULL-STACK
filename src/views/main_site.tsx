import styled from "styled-components";
import Reactor from "../components/reactor/reactor";

const MainSiteView = () => (
    <MainSite>
        <Reactor/>
    </MainSite>
  );


const MainSite = styled.div`
  width: 100%;
  color: rgb(80, 208, 228);
  height: 100vh;
`;

export default MainSiteView