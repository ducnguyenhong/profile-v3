import styled, { keyframes } from 'styled-components';

const animationStar = keyframes`
  from{transform: rotate(-45deg)}
  to{transform: rotate(45deg)}
`;

const StarfishStyle = styled.div`
  img {
    animation: ${animationStar} 5s ease-in-out infinite alternate;
  }
`;

const Starfish: React.FC = () => {
  return (
    <StarfishStyle className="fixed bottom-10 right-10">
      <img src={`${process.env.PUBLIC_URL}/assets/img-starfish.png`} className="w-16 cursor-pointer" alt="starfish" />
    </StarfishStyle>
  );
};

export default Starfish;
