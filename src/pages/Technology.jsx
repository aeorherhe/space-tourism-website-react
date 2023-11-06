import { useState } from "react";
import { technologyData } from "../services/data";
import styled from "styled-components";
import { P1, StyledSection, StyledTitle } from "../styles/GlobalStyles";

const Technology = () => {
  const [technology, setTechnology] = useState(technologyData[0]);
  const { name, images, description } = technology;

  return (
    <StyledSection type="technology">
      <StyledTechnology>
        <StyledTitle>
          <span>03 </span>
          space launch 101
        </StyledTitle>
        <div className="technology">
          <div className="image">
            <img src={images.portrait} alt={name} />
          </div>
          <div className="btns">
            {technologyData.map((technology, index) => {
              return (
                <span
                  key={technology.name}
                  className={`btn ${technology.name === name && "active"}`}
                  onClick={() => setTechnology(technologyData[index])}
                >
                  {index + 1}
                </span>
              );
            })}
          </div>
          <div className="info">
            <h3>the terminology...</h3>
            <h2>{name}</h2>
            <P1>{description}</P1>
          </div>
        </div>
      </StyledTechnology>
    </StyledSection>
  );
};
export default Technology;

// /******************* styled component *****************/
// /******************* styled component *****************/

const StyledTechnology = styled.section`
  .image {
    margin: 4rem 0;
    width: 100%;

    img {
      width: 100%;
      height: 30rem;
      max-width: 60rem;
    }
  }

  .info {
    margin: 2rem 0;
    padding: 2rem 0;
  }

  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
  }

  .btn {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    border: 1px solid #9e9c9c;
  }

  .active {
    background-color: var(--White);
    color: var(--Dark-Blue);
  }

  h3 {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-family: "Bellefair";
    margin: 1rem 0;
  }

  h2 {
    text-transform: uppercase;
    font-size: 2rem;
    font-family: "Bellefair";
    margin: 1rem auto;
    color: var(--White);
  }

  @media (min-width: 75rem) {
    .technology {
      display: grid;
      grid-template-columns: auto repeat(2, 1fr);
      gap: 1rem;
      margin: 4rem auto;
      padding: 2rem;
    }

    .image {
      grid-column: 3;
      grid-row: 1 / 3;
      margin: 0;
      margin-left: 4rem;
    }

    h2 {
      font-size: 3rem;
    }

    .btns {
      flex-direction: column;
      gap: 2rem;
    }

    .info {
      text-align: left;
    }

    .btn {
      width: 4rem;
      height: 4rem;
      font-size: 1.5rem;
    }
  }
`;
