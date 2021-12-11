import clsx from 'clsx';
import { Fragment, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const language = localStorage.getItem('language') || 'en';

  const onChangeLang = useCallback((lang: string) => {
    localStorage.setItem('language', lang);
    window.location.reload();
  }, []);

  return (
    <Fragment>
      <StarfishStyle className="fixed bottom-7 right-7 lg:bottom-10 lg:right-10">
        <button className="outline-none" onClick={() => setShowMore(true)}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/more/img-starfish.png`}
            className="w-10 lg:w-16 cursor-pointer"
            alt="starfish"
          />
        </button>
      </StarfishStyle>

      {showMore && (
        <div className="w-2/3 lg:w-1/2 fixed top-10 lg:top-20 left-0 right-0 mx-auto z-20 rounded-md">
          <div className="bg-gradient-to-r from-yellow-300 to-green-400 p-4 rounded-xl flex items-center justify-center relative">
            <button className="absolute -top-4 -right-4 outline-none" onClick={() => setShowMore(false)}>
              <img src={`${process.env.PUBLIC_URL}/assets/img-close-modal.png`} className="w-12" alt="close" />
            </button>
            <div className="h-80 lg:h-auto overflow-y-auto bg-white py-10 px-10 lg:px-20 w-full rounded-md">
              <div className="w-full">
                <div className="flex justify-center">
                  <label className="uppercase text-yellow-500 font-bold text-lg">
                    Always have new content updated here
                  </label>
                </div>

                <div className="mt-16">
                  <label className="block mr-10 font-semibold text-lg">• {t('STARFISH.LANGUAGE')}</label>
                  <div className="flex justify-center items-center">
                    <button className="outline-none" onClick={() => onChangeLang('en')}>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/common/img-flag-en.png`}
                        className={clsx({
                          'w-16 hover:opacity-100 duration-300 transform hover:scale-110': true,
                          'opacity-50': language === 'vi',
                        })}
                        alt="en"
                        title="English"
                      />
                    </button>

                    <button className="outline-none" onClick={() => onChangeLang('vi')}>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/common/img-flag-vn.png`}
                        className={clsx({
                          'w-16 ml-16 hover:opacity-100 duration-300 transform hover:scale-110': true,
                          'opacity-50': language === 'en',
                        })}
                        alt="vn"
                        title="Tiếng Việt"
                      />
                    </button>
                  </div>
                </div>

                <div className="mt-10 flex items-center">
                  <label className="block mr-10 font-semibold text-lg">• About my project (technology used)</label>
                  <div className="flex items-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/logo/img-logo-react.png`}
                      alt="reactjs"
                      title="reactjs"
                      className="h-10"
                    />
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/logo/img-logo-typescript.png`}
                      alt="typescript"
                      title="typescript"
                      className="h-10 mx-5"
                    />
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/logo/img-logo-tailwind.png`}
                      alt="tailwindcss"
                      title="tailwindcss"
                      className="h-10"
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <label className="block mr-5 font-semibold text-lg">• Other links</label>
                  <div className="mt-5 flex justify-center">
                    <a
                      href="https://autoclickvn.github.io/profile-v1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-10 font-medium text-gray-500 duration-100 hover:text-blue-500 hover:underline"
                    >
                      Profile v1
                    </a>
                    <a
                      href="https://profile-v2.herokuapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-10 font-medium text-gray-500 duration-100 hover:text-blue-500 hover:underline"
                    >
                      Profile v2
                    </a>
                    <a
                      href="https://facebook.com/ducnh99"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-10 font-medium text-gray-500 duration-100 hover:text-blue-500 hover:underline"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCLO94_1jrZLbzLJdsxsjrGA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-500 duration-100 hover:text-blue-500 hover:underline"
                    >
                      Youtube
                    </a>
                  </div>
                </div>

                <div className="mt-10 w-1/2 mx-auto">
                  <hr />
                </div>

                <div className="flex justify-center mt-10">
                  <span className="font-semibold text-gray-600">
                    Copyright © 2021 -
                    <a href="/" className="text-green-500 ml-1 uppercase">
                      nhduc.net
                    </a>
                  </span>
                </div>
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
