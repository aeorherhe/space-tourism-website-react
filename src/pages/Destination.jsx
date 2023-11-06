import { useState } from "react";
import styled from "styled-components";
import { P1, StyledSection, StyledTitle } from "../styles/GlobalStyles";

import { destinationData } from "../services/data";

const Destination = () => {
  const [destination, setDestination] = useState(destinationData[0]);
  const { name, images, description: desc, distance, travel } = destination;

  return (
    <StyledSection type="destination">
      <StyledDestination>
        <StyledTitle>
          <span>01 </span>
          pick your destination
        </StyledTitle>
        <div className="container">
          <div className="img">
            <img src={images.webp} alt="destination" className="img" />
          </div>
          <div className="destinations">
            <ul className="lists">
              {destinationData.map((destination, index) => {
                return (
                  <li
                    key={index}
                    className={
                      destination.name === name ? "active" : "destination"
                    }
                    onClick={() => setDestination(destinationData[index])}
                  >
                    {destination.name}
                  </li>
                );
              })}
            </ul>
            <div className="details">
              <h1>{name}</h1>
              <P1>{desc}</P1>
              <div className="duration">
                <div className="distance">
                  <p>avg. distance</p>
                  <h2>{distance}</h2>
                </div>
                <div className="time">
                  <p>est. traveled time</p>
                  <h2>{travel}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledDestination>
    </StyledSection>
  );
};
export default Destination;

/******************* styled component *****************/
/******************* styled component *****************/

const StyledDestination = styled.section`
  .img {
    width: 70%;
    object-fit: cover;
    margin: 2rem auto;
  }

  .destinations {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    list-style: none;
    margin: 0rem auto;
    max-width: 60rem;
    padding: 1rem 2rem 0;
  }

  .lists {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    gap: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
  }

  .active {
    border-bottom: 2px solid white;
    padding-bottom: 0.5rem;
  }

  .destination {
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      background-color: var(--Dark-Blue);
    }
  }

  h1 {
    font-family: "Bellefair";
    font-size: 4rem;
    margin: 1rem auto;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    font-weight: 400;
    color: var(--White);
  }

  .duration {
    border-top: 2px solid var(--bg-primary);
    margin: 4rem auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 3rem 1rem 0;
    text-transform: uppercase;
    letter-spacing: 0.125rem;

    p {
      font-size: 1.25rem;
      font-weight: 400;
    }

    h2 {
      font-size: 2rem;
      font-weight: 400;
      font-family: "Bellefair";
      margin: 1rem 0;
      color: var(--White);
    }
  }

  @media (min-width: 75rem) {
    .container {
      display: grid;
      place-items: center;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    .img {
      width: 100%;
      object-fit: cover;
    }

    .destinations {
      text-align: left;
    }

    h1 {
      font-size: 5rem;
    }

    .duration {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
