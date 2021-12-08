import styled from 'styled-components';

export const ContactStyle = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/assets/contact/img-bg-contact.webp);

  .contact-facebook {
    background: rgb(76, 100, 247);
    background: linear-gradient(180deg, rgba(76, 100, 247, 1) 0%, rgba(255, 255, 255, 1) 35%);
  }

  .contact-email {
    background: rgb(232, 95, 250);
    background: linear-gradient(180deg, rgba(232, 95, 250, 1) 0%, rgba(255, 255, 255, 1) 35%);
  }

  .contact-phone {
    background: rgb(61, 223, 101);
    background: linear-gradient(180deg, rgba(61, 223, 101, 1) 0%, rgba(255, 255, 255, 1) 35%);
  }

  .contact-github {
    background: rgb(126, 126, 126);
    background: linear-gradient(180deg, rgba(126, 126, 126, 1) 0%, rgba(255, 255, 255, 1) 35%);
  }

  .-rotate-10 {
    transform: rotate(-10deg);
  }
`;
