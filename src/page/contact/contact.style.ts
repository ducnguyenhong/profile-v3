import styled, { keyframes } from 'styled-components';

const animationNumber = keyframes`
  from{transform: translateY(0)}
  to{transform: translateY(-10px)}
`;

export const ContactStyle = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/assets/contact/img-bg-contact.webp);

  .bubble {
    animation: ${animationNumber} 1.2s ease-in-out 3s infinite alternate;
  }
  .bubble-github {
    animation-delay: 0.4s;
  }
  .bubble-facebook {
    animation-delay: 1s;
  }
  .bubble-email {
    animation-delay: 1.2s;
  }
  .bubble-phone {
    animation-delay: 0.8s;
  }
`;
