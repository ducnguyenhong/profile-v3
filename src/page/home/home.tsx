import clsx from 'clsx';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Contact } from './home.contact';
import { Experience } from './home.experience';
import { Information } from './home.info';
import { Project } from './home.project';
import { Skill } from './home.skill';

const animationPinmap = keyframes`
  from{transform: scale(1);}
  to{transform: scale(1.15);}
`;

const HomeStyle = styled.div`
  .pin-map {
    animation: ${animationPinmap} 2s ease-in-out infinite alternate;
  }
`;

const Home: React.FC = () => {
  const [showContent, setShowContent] = useState<false | 1 | 2 | 3 | 4 | 5>(false);

  return (
    <HomeStyle className="flex items-center justify-center h-full relative">
      {showContent && (
        <div
          onClick={() => setShowContent(false)}
          className="h-screen w-full fixed top-0 left-0 bg-gray-700 opacity-70 z-10"
        />
      )}

      <img src={`${process.env.PUBLIC_URL}/assets/img-island.png`} alt="island" />

      <div className="absolute" style={{ left: '50%', top: '45%' }}>
        <button onClick={() => setShowContent(4)} className="outline-none">
          <img src={`${process.env.PUBLIC_URL}/assets/pin-map-2.png`} className="pin-map w-24" alt="sea shells" />
        </button>
      </div>

      <div className="absolute" style={{ left: '20%', top: '48%' }}>
        <button onClick={() => setShowContent(3)} className="outline-none">
          <img
            src={`${process.env.PUBLIC_URL}/assets/pin-map-3.png`}
            className="pin-map w-24 cursor-pointer"
            alt="umbrella"
          />
        </button>
      </div>

      <div className="absolute" style={{ right: '17%', top: '45%' }}>
        <button onClick={() => setShowContent(5)} className="outline-none">
          <img
            src={`${process.env.PUBLIC_URL}/assets/pin-map-4.png`}
            className="pin-map w-24 cursor-pointer"
            alt="umbrella"
          />
        </button>
      </div>

      <div className="absolute" style={{ left: '38%', top: '3%' }}>
        <button onClick={() => setShowContent(1)} className="outline-none">
          <img
            src={`${process.env.PUBLIC_URL}/assets/pin-map-6.png`}
            className="pin-map w-24 cursor-pointer"
            alt="umbrella"
          />
        </button>
      </div>

      <div className="absolute" style={{ right: '24%', top: '5%' }}>
        <button onClick={() => setShowContent(2)} className="outline-none">
          <img
            src={`${process.env.PUBLIC_URL}/assets/pin-map-5.png`}
            className="pin-map w-24 cursor-pointer"
            alt="umbrella"
          />
        </button>
      </div>

      <div
        className={clsx({
          'fixed z-20 h-screen overflow-hidden top-0 bg-gradient-to-r opacity-90 duration-500': true,
          'w-1/3': showContent,
          'w-0': !showContent,
          'from-purple-800 to-purple-500 right-0': showContent === 1,
          'from-yellow-200 to-yellow-500 left-0': showContent === 2,
          'from-red-200 to-white right-0': showContent === 3,
          'left-0': showContent === 4 || showContent === 5,
        })}
      >
        {showContent === 1 && <Experience />}
        {showContent === 2 && <Contact />}
        {showContent === 3 && <Skill />}
        {showContent === 4 && <Information />}
        {showContent === 5 && <Project />}
      </div>
    </HomeStyle>
  );
};

export default Home;
