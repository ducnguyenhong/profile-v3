import styled from 'styled-components';

const LayoutStyle = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/assets/home/background.webp);
`;

const DefaultLayout: React.FC = (props) => {
  return <LayoutStyle className="w-full h-screen bg-cover bg-no-repeat relative">{props.children}</LayoutStyle>;
};

export default DefaultLayout;
