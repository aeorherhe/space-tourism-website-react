// import styled from "styled-components";
import data from "../data.json";

export const destinationData = data.destinations;
export const crewData = data.crew;
export const technologyData = data.technology;

// navigation
export const navigationMenu = [
  {
    id: 0,
    title: "home",
    url: "/",
  },
  {
    id: 1,
    title: "destination",
    url: "/destination",
  },
  {
    id: 2,
    title: "crew",
    url: "/crew",
  },
  {
    id: 3,
    title: "technology",
    url: "/technology",
  },
];
