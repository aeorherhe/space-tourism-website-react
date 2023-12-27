import styled, { createGlobalStyle } from "styled-components";
import { backgroundImagesMediaQueries } from "./funcStyles";

const GlobalStyles = createGlobalStyle`

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* general variables */
  --boxShadow: 0 0 20px hsl(150, 100%, 66%);
  --boxShadow2: 0px 0px 50px rgba(150, 150, 150, 0.3);
  --transition: all 0.3s linear;
  --transition2: all 0.5s linear;
  --line: 2px solid #ef0c26;
  --line-2: 2px solid rgb(28, 28, 192);
  --line-3: 2px solid rgb(9, 224, 88);

  /* variables for this project */
  --White: #ffffff;
  --Light-Cyan: hsl(193, 38%, 86%);
  --Neon-Green: hsl(150, 100%, 66%);
  --Grayish-Blue: hsl(217, 19%, 38%);
  --Dark-Grayish-Blue: hsl(217, 19%, 24%);
  --Dark-Blue: hsl(218, 23%, 16%);

  /* home page */
  --text-primary: #D0D6F9;
  --bg-primary: hsl(218, 23%, 16%);
}

body {
  display: grid;
  font-family: "Barlow", "Open Sans", Arial, Helvetica, sans-serif;
  grid-template-rows: 1fr auto;
}

a {
    text-decoration: none;
}

li{
  list-style: none;
}

`;

export default GlobalStyles;

export const P1 = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: 400;
  margin: 2rem auto;
  max-width: 60rem;
`;

export const Div1 = styled.div`
  h1 {
    font-size: 5rem;
    font-family: "Bellefair";
    color: white;
    text-transform: uppercase;
  }

  h2 {
    font-family: "Barlow-condensed";
    font-weight: 400;
    text-transform: uppercase;
  }

  p {
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 400;
  }

  @media (min-width: 45rem) {
    h1 {
      font-size: 8rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

export const StyledTitle = styled.header`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 400;
  margin: 2rem auto;
  text-align: left;
  color: var(--White);

  span {
    color: var(--Grayish-Blue);
    margin-right: 1rem;
    font-weight: 700;
    letter-spacing: 0.125rem;
  }
`;

export const StyledSection = styled.section`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: var(--text-primary);
  display: grid;
  place-items: center;
  padding: 8rem 0 5rem;
  min-height: 96.5vh;
  text-align: center;

  > section {
    width: 90%;
    margin: 2rem auto 0;
    max-width: 80rem;
  }

  ${({ $page }) => $page && backgroundImagesMediaQueries($page)}
`;

// background-image: ${(props) =>
//   props.type === "home"
//     ? "url(/assets/home/background-home-mobile.jpg)"
//     : props.type === "destination"
//     ? "url(/assets/destination/background-destination-mobile.jpg)"
//     : props.type === "crew"
//     ? "url(/assets/crew/background-crew-mobile.jpg)"
//     : props.type === "technology"
//     ? "url(/assets/technology/background-technology-mobile.jpg)"
//     : ""};

// @media (min-width: 45rem) {
//   background-image: ${(props) =>
//     props.type === "home"
//       ? "url(/assets/home/background-home-tablet.jpg)"
//       : props.type === "destination"
//       ? "url(/assets/destination/background-destination-tablet.jpg)"
//       : props.type === "crew"
//       ? "url(/assets/crew/background-crew-tablet.jpg)"
//       : props.type === "technology"
//       ? "url(/assets/technology/background-technology-tablet.jpg)"
//       : ""};
// }

// @media (min-width: 60rem) {
//   background-image: ${(props) =>
//     props.type === "home"
//       ? "url(/assets/home/background-home-desktop.jpg)"
//       : props.type === "destination"
//       ? "url(/assets/destination/background-destination-desktop.jpg)"
//       : props.type === "crew"
//       ? "url(/assets/crew/background-crew-desktop.jpg)"
//       : props.type === "technology"
//       ? "url(/assets/technology/background-technology-desktop.jpg)"
//       : ""};
// }
