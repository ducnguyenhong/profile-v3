import clsx from 'clsx';
import LoadableUI from 'layout/loadable-ui';
import { useEffect, useState } from 'react';
import Loadable from 'react-loadable';
import { ARRAY_PINMAP } from './home.data';
import { HomeStyle } from './home.style';

const Project = Loadable({
  loader: () => import('page/project'),
  loading: LoadableUI,
});

const Skill = Loadable({
  loader: () => import('page/skill'),
  loading: LoadableUI,
});

const Information = Loadable({
  loader: () => import('page/info'),
  loading: LoadableUI,
});

const Experience = Loadable({
  loader: () => import('page/exp'),
  loading: LoadableUI,
});

const Contact = Loadable({
  loader: () => import('page/contact'),
  loading: LoadableUI,
});

const Home: React.FC = () => {
  const [showContent, setShowContent] = useState<number>(0);
  const [showAnmPinmapEnd, setShowAnmPinmapEnd] = useState<boolean>(false);

  useEffect(() => {
    const x = setTimeout(() => setShowAnmPinmapEnd(true), 5000);

    return () => clearTimeout(x);
  }, []);

  return (
    <HomeStyle className="flex items-center justify-center h-full relative">
      {showContent !== 0 && (
        <div
          onClick={() => setShowContent(0)}
          className="h-screen w-full fixed top-0 left-0 bg-gray-700 opacity-70 z-10"
        />
      )}

      <img src={`${process.env.PUBLIC_URL}/assets/home/img-island.webp`} className="island" alt="island" />

      {ARRAY_PINMAP.map((item) => {
        return (
          <div className={`absolute ${item.divClassName}`}>
            <button onClick={() => setShowContent(item.numberContent)} className="outline-none">
              <img
                src={item.img}
                className={clsx({
                  'w-16 lg:w-24': true,
                  'pin-map-end': showAnmPinmapEnd,
                  'pin-map-start': !showAnmPinmapEnd,
                })}
                alt={item.title}
              />
            </button>
          </div>
        );
      })}

      <Experience isShow={showContent === 1} />
      <Contact isShow={showContent === 2} />
      <Skill isShow={showContent === 3} />
      <Information isShow={showContent === 4} />
      <Project isShow={showContent === 5} />
    </HomeStyle>
  );
};

export default Home;
