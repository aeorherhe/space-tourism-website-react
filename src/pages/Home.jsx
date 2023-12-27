import styled from "styled-components";
import { Div1, StyledSection } from "../styles/GlobalStyles";

const Home = () => {
  return (
    <StyledSection $page="home">
      <StyledHome>
        <Div1 className="header">
          <h2 type="uppercase">So, you want to travel to</h2>
          <h1>space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </Div1>
        <div className="explore">
          <p>Explore</p>
        </div>
      </StyledHome>
    </StyledSection>
  );
};
export default Home;

/************* styled component  **************/
/************* styled component  **************/

const StyledHome = styled.section`
  .header {
    width: fit-content;
    max-width: 60rem;
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    padding: 2rem 0;
  }

  h1 {
    color: white;
    text-transform: uppercase;
    font-size: 5rem;
    font-family: "Bellefair";
  }

  .explore {
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: var(--Dark-Blue);
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    font-weight: 500;
    font-size: 1.5rem;
    margin: 0 auto;
  }

  @media (min-width: 55rem) {
    h1 {
      font-size: 7.5rem;
    }
  }

  @media (min-width: 75rem) {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    text-align: left;
    align-items: center;

    .header {
      text-align: left;
      align-items: flex-start;
    }

    h1 {
      font-size: 10rem;
    }
  }
`;
