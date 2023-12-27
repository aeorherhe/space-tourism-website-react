import { backgroundImages } from "../assets";

export const breakpoints = {
  mobile: "375px",
  tablet: "55rem",
  desktop: "85rem",
};

// backgroundImages is a function that takes a page name and css property
export const backgroundImagesMediaQueries = (page) => {
  return `
    background-image: url(${backgroundImages[page].mobile});
    @media (min-width: ${breakpoints.tablet}) {
      background-image: url(${backgroundImages[page].tablet});
    }
    @media (min-width: ${breakpoints.desktop}) {
      background-image: url(${backgroundImages[page].desktop});
    }
    `;
};
