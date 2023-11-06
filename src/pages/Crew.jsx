import { useState } from "react";
import { crewData } from "../services/data";
import styled from "styled-components";
import { P1, StyledSection, StyledTitle } from "../styles/GlobalStyles";

const Crew = () => {
  const [crewMember, setCrewMember] = useState(crewData[0]);
  const { role, name, images, bio } = crewMember;

  return (
    <StyledSection type="crew">
      <StyledCrew>
        <StyledTitle>
          <span>02 </span>
          meet your crew
        </StyledTitle>
        <div className="crew">
          <div className="pic">
            <img src={images.png} alt={name} />
          </div>
          <div className="dots">
            {crewData.map((crewMember, index) => {
              return (
                <span
                  key={crewMember.name}
                  className={`dot ${crewMember.name === name && "active"}`}
                  onClick={() => setCrewMember(crewData[index])}
                ></span>
              );
            })}
          </div>
          <div className="info">
            <h3 className="role">{role}</h3>
            <h2>{name}</h2>
            <P1>{bio}</P1>
          </div>
        </div>
      </StyledCrew>
    </StyledSection>
  );
};
export default Crew;

// /******************* styled component *****************/
// /******************* styled component *****************/

const StyledCrew = styled.section`
  .info {
    padding: 2rem 0;
  }

  .pic {
    margin: 4rem auto;

    img {
      width: 100%;
      max-width: 60rem;
    }
  }

  .role {
    margin: 1rem 0;
    font-weight: 400;
    text-transform: uppercase;
    font-family: "Belefair";
    font-size: 1.25rem;
  }

  h2 {
    text-transform: uppercase;
    font-size: 2rem;
    font-family: "Bellefair";
    margin: 1rem 0;
  }

  .dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
  }

  .dot {
    width: 1rem;
    height: 1rem;
    padding: 0.5rem;
    background-color: #6a5c5c;
    border-radius: 50%;
    cursor: pointer;
  }

  .active {
    background-color: white;
  }

  @media (min-width: 75rem) {
    .crew {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0 3rem;
    }

    .pic {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      margin: 0;
    }

    .info {
      padding: 0;
      grid-row: 1 / 2;
      margin: 0;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: end;
    }

    .role {
      font-size: 1.5rem;
    }

    .dots {
      justify-self: flex-start;
      gap: 2rem;
    }

    h2 {
      font-size: 3rem;
    }
  }
`;
