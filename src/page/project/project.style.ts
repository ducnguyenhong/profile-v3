import styled from 'styled-components';

export const ProjectStyle = styled.div`
  @media (min-width: 1024px) {
    & {
      background-image: url(${process.env.PUBLIC_URL}/assets/project/img-bg-project.webp);
    }
  }

  @media (max-width: 1023px) {
    .content {
      background-image: url(${process.env.PUBLIC_URL}/assets/project/img-bg-project.webp);
    }
  }
`;
