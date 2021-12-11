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

const ARRAY_TECH_USED = [
  {
    img: `${process.env.PUBLIC_URL}/assets/logo/img-logo-react.png`,
    url: 'https://reactjs.org',
    title: 'ReactJS',
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/logo/img-logo-typescript.png`,
    url: 'https://typescriptlang.org',
    title: 'Typescript',
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/logo/img-logo-tailwind.png`,
    url: 'https://tailwindcss.com',
    title: 'Tailwind CSS',
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/logo/img-logo-flaticon.png`,
    url: 'https://flaticon.com',
    title: 'Flaticon',
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/logo/img-logo-freepik.png`,
    url: 'https://freepik.com',
    title: 'Freepik',
  },
];

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
              <div className="w-full grid-cols-2 grid gap-x-10 gap-y-14">
                <div className="flex justify-center col-span-2">
                  <label className="uppercase text-yellow-500 font-bold text-lg">{t('STARFISH.TITLE')}</label>
                </div>

                <div className="col-span-1">
                  <label className="inline-block font-semibold text-gray-600 border-b">
                    • {t('STARFISH.LANGUAGE')}
                  </label>
                  <div className="flex justify-center items-center mt-5">
                    <button className="outline-none" onClick={() => onChangeLang('en')}>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/common/img-flag-en.png`}
                        className={clsx({
                          'w-12 hover:opacity-100 duration-300 transform hover:scale-110': true,
                          'opacity-30': language === 'vi',
                        })}
                        alt="en"
                        title="English"
                      />
                    </button>

                    <button className="outline-none" onClick={() => onChangeLang('vi')}>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/common/img-flag-vn.png`}
                        className={clsx({
                          'w-12 ml-10 hover:opacity-100 duration-300 transform hover:scale-110': true,
                          'opacity-30': language === 'en',
                        })}
                        alt="vn"
                        title="Tiếng Việt"
                      />
                    </button>
                  </div>
                </div>

                <div className="col-span-1">
                  <label className="inline-block font-semibold text-gray-600 border-b">
                    • {t('STARFISH.TECH_USED')}
                  </label>
                  <div className="flex items-center mt-5 justify-center">
                    {ARRAY_TECH_USED.map((item) => {
                      return (
                        <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.title}>
                          <img
                            src={item.img}
                            alt={item.title}
                            title={item.title}
                            className="h-10 mr-3 transform hover:scale-110 duration-300"
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="col-span-1">
                  <label className="inline-block font-semibold text-gray-600 border-b">• {t('STARFISH.MY_CV')}</label>
                  <div className="mt-5 flex justify-center">
                    <a
                      href="http://cvfree.top/cv-public/nguyen-hong-duc.61767226ca0d8dfd8c726aba"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-10 font-medium text-gray-500 duration-100 hover:text-blue-500 hover:underline"
                    >
                      CV online
                    </a>
                    <a
                      href={`${process.env.PUBLIC_URL}/assets/pdf/nguyen-hong-duc.pdf`}
                      download
                      className="mr-10 font-medium text-gray-500 duration-100 hover:text-blue-500 hover:underline"
                    >
                      CV PDF
                    </a>
                  </div>
                </div>

                <div className="col-span-1">
                  <label className="inline-block font-semibold text-gray-600 border-b">
                    • {t('STARFISH.OTHER_LINK')}
                  </label>
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
                      href="https://www.youtube.com/channel/UCLO94_1jrZLbzLJdsxsjrGA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-500 duration-100 hover:text-blue-500 hover:underline"
                    >
                      Youtube
                    </a>
                  </div>
                </div>

                <div className="col-span-2">
                  <hr />
                </div>

                <div className="flex justify-center col-span-2">
                  <span className="font-semibold text-gray-600">
                    {t('STARFISH.COPYRIGHT')} © 2021 -
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
