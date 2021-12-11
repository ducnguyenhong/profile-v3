import styled from 'styled-components';

export const SkillStyle = styled.div`
  @media (min-width: 1024px) {
    & {
      background-image: url(${process.env.PUBLIC_URL}/assets/skill/img-bg-skill.webp);
    }
  }

  @media (max-width: 1023px) {
    .content {
      background-image: url(${process.env.PUBLIC_URL}/assets/skill/img-bg-skill.webp);
    }
  }
`;
