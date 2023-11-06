import { RouterProvider } from "react-router-dom";
import router from "./services/router";
import styled from "styled-components";

function App() {
  return (
    <StyledApp>
      <RouterProvider router={router}></RouterProvider>
    </StyledApp>
  );
}

export default App;

/******************* styled component *****************/
/******************* styled component *****************/

const StyledApp = styled.main`
  overflow: hidden;
  position: relative;
`;
