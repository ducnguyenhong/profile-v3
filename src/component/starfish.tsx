import { Fragment, useState } from 'react';
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
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <Fragment>
      <StarfishStyle className="fixed bottom-10 right-10">
        <button className="outline-none" onClick={() => setShowMore(true)}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/img-starfish.png`}
            className="w-16 cursor-pointer"
            alt="starfish"
          />
        </button>
      </StarfishStyle>

      {showMore && (
        <div className="w-1/2 fixed top-20 left-0 right-0 mx-auto bg-white z-20 p-10 rounded-md">
          <div>
            <label>Always have new content updated here</label>
          </div>
          <div className="mt-10">
            <span className="block">About my project (technology used)</span>
            <div className="flex items-center">
              <img
                src="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png"
                alt="reactjs"
                className="w-14"
              />
              <img src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg" alt="typescript" className="w-14" />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                alt="tailwindcss"
                className="w-14"
              />
            </div>
          </div>

          <div className="mt-10">
            <span className="block">Other links</span>
            <div className="">
              <div>
                <a href="/" rel="noopener noreferrer">
                  Profile v1
                </a>
              </div>
              <div>
                <a href="/" rel="noopener noreferrer">
                  Profile v2
                </a>
              </div>
              <div>
                <a href="/" rel="noopener noreferrer">
                  Countdown Tet
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {showMore && (
        <div
          onClick={() => setShowMore(false)}
          className="h-screen w-full fixed top-0 left-0 bg-gray-700 opacity-70 z-10"
        />
      )}
    </Fragment>
  );
};

export default Starfish;
