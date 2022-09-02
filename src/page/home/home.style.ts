import styled, { keyframes } from 'styled-components';

const anmPinmapEnd = keyframes`
  from{transform: scale(1);}
  to{transform: scale(1.15);}
`;

const anmIsland = keyframes`
  from{transform: scale(0.7); opacity: 0.5;}
  to{transform: scale(1); opacity: 1;}
`;

const anmPinmapStart = keyframes`
  from{transform: translateY(-70px); opacity: 0.7;}
  to{transform: translateY(0); opacity: 1;}
`;

export const HomeStyle = styled.div`
  .pin-map-start {
    animation: ${anmPinmapStart} 1s forwards;
    opacity: 0;
  }

  .pin-map-end {
    animation: ${anmPinmapEnd} 2s ease-in-out infinite alternate;
  }

  .pin-map-skill img {
    animation-delay: 2s;
  }

  .pin-map-exp img {
    animation-delay: 2.5s;
  }

  .pin-map-info img {
    animation-delay: 3s;
  }

  .pin-map-contact img {
    animation-delay: 3.5s;
  }

  .pin-map-project img {
    animation-delay: 4s;
  }

  .island {
    animation: ${anmIsland} 2s ease-in-out forwards;
  }

  //MOBILE HORIZONTAL
  @media (max-width: 850px) {
    .pin-map-info {
      top: 42%;
      left: 50%;
    }
    .pin-map-project {
      top: 43%;
      right: 17%;
    }
    .pin-map-contact {
      top: 5%;
      right: 24%;
    }
    .pin-map-skill {
      top: 53%;
      left: 20%;
    }
    .pin-map-exp {
      top: 3%;
      left: 38%;
    }
  }

  // TABLET HORIZONTAL
  @media (min-width: 1024px) and (max-width: 1365px) {
    .pin-map-info {
      top: 42%;
      left: 50%;
    }
    .pin-map-project {
      top: 43%;
      right: 17%;
    }
    .pin-map-contact {
      top: 18%;
      right: 24%;
    }
    .pin-map-skill {
      top: 53%;
      left: 20%;
    }
    .pin-map-exp {
      top: 17%;
      left: 38%;
    }
  }

  // XL
  @media (min-width: 1366px) and (max-width: 1535px) {
    .pin-map-info {
      top: 45%;
      left: 50%;
    }
    .pin-map-project {
      top: 45%;
      right: 17%;
    }
    .pin-map-contact {
      top: 12%;
      right: 24%;
    }
    .pin-map-skill {
      top: 52%;
      left: 20%;
    }
    .pin-map-exp {
      top: 10%;
      left: 38%;
    }
  }

  // 2XL
  @media (min-width: 1536px) {
    .pin-map-info {
      top: 45%;
      left: 50%;
    }
    .pin-map-project {
      top: 45%;
      right: 17%;
    }
    .pin-map-contact {
      top: 5%;
      right: 24%;
    }
    .pin-map-skill {
      top: 53%;
      left: 20%;
    }
    .pin-map-exp {
      top: 3%;
      left: 38%;
    }

    // Larger than 2XL
  @media (min-width: 1920px) {
    .pin-map-info {
      top: 45%;
      left: 50%;
    }
    .pin-map-project {
      top: 43%;
      right: 24%;
    }
    .pin-map-contact {
      top: 17%;
      right: 31%;
    }
    .pin-map-skill {
      top: 53%;
      left: 29%;
    }
    .pin-map-exp {
      top: 19%;
      left: 38%;
    }
  }
`;
