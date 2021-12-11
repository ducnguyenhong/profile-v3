import styled from 'styled-components';

export const InfoStyle = styled.div`
  @media (min-width: 1024px) {
    & {
      background-image: url(${process.env.PUBLIC_URL}/assets/info/img-bg-info.webp);
    }
  }

  @media (max-width: 1023px) {
    .content {
      background-image: url(${process.env.PUBLIC_URL}/assets/info/img-bg-info.webp);
    }
  }
`;
