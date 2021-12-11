import styled, { keyframes } from 'styled-components';

const animationPinmap = keyframes`
  from{transform: scale(1);}
  to{transform: scale(1.15);}
`;

export const HomeStyle = styled.div`
  .pin-map {
    animation: ${animationPinmap} 2s ease-in-out infinite alternate;
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
  }
`;
