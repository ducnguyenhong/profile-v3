import styled from 'styled-components';

const LayoutStyle = styled.div``;

const DefaultLayout: React.FC = (props) => {
  return (
    <LayoutStyle
      className="w-full h-screen bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background.png)` }}
    >
      {props.children}
    </LayoutStyle>
  );
};

export default DefaultLayout;
