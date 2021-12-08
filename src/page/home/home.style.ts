import styled, { keyframes } from 'styled-components';

const animationPinmap = keyframes`
  from{transform: scale(1);}
  to{transform: scale(1.15);}
`;

export const HomeStyle = styled.div`
  .pin-map {
    animation: ${animationPinmap} 2s ease-in-out infinite alternate;
  }
`;
