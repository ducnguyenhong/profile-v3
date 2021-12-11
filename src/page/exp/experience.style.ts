import styled from 'styled-components';

export const ExpStyle = styled.div`
  @media (min-width: 1024px) {
    & {
      background-image: url(${process.env.PUBLIC_URL}/assets/experience/img-bg-experience.webp);
    }
  }

  @media (max-width: 1023px) {
    .content {
      background-image: url(${process.env.PUBLIC_URL}/assets/experience/img-bg-experience.webp);
    }
  }
`;
