import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ARRAY_PROJECTS } from './project.data';
import { ProjectStyle } from './project.style';

const Project: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  const [showProject, setShowProject] = useState<number>(0);
  const { t } = useTranslation();

  return (
    <ProjectStyle
      className={clsx({
        'fixed z-20 overflow-y-auto h-screen lg:overflow-hidden bg-no-repeat bg-cover top-0 left-0 opacity-90 duration-500':
          true,
        'w-2/3 lg:w-1/2 xl:w-1/3': isShow,
        'w-0': !isShow,
      })}
    >
      {isShow && (
        <div className="content h-auto pb-10 lg:pb-0 overflow-y-auto bg-no-repeat bg-cover">
          <div className="pb-5 px-20 mt-60">
            <div className="grid grid-cols-2 gap-x-20 gap-y-7">
              {ARRAY_PROJECTS.map((item, index) => {
                return (
                  <div
                    onClick={() => setShowProject(index + 1)}
                    key={item.title}
                    className="col-span-1 flex flex-col items-center cursor-pointer transform duration-300 hover:scale-125"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}${item.img}`}
                      className={clsx({
                        'block h-28': true,
                        'w-36': index === 1 || index === 2 || index === 5,
                        'w-32': index === 0 || index === 3 || index === 4,
                      })}
                      alt={item.title}
                    />
                    <label
                      className={clsx({
                        'block font-bold whitespace-nowrap uppercase': true,
                        'text-green-500': index === 1 || index === 2 || index === 5,
                        'text-yellow-500': index === 0 || index === 3 || index === 4,
                      })}
                    >
                      {item.title}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {showProject !== 0 && (
            <div className="fixed top-0 lg:top-20 left-0 bottom-0 lg:bottom-auto right-0 m-auto lg:left-auto lg:right-20 z-50 px-20 py-10">
              <div className="bg-gradient-to-r from-yellow-300 to-green-400 p-4 h-full rounded-xl flex items-center justify-center relative">
                <button className="absolute -top-4 -right-4 outline-none" onClick={() => setShowProject(0)}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img-close-modal.png`} className="w-12" alt="close" />
                </button>
                <div className="bg-white py-10 px-20 rounded-md h-full overflow-y-auto" style={{ width: 700 }}>
                  <div className="flex justify-center items-center flex-col">
                    <label className="uppercase font-bold text-2xl">{ARRAY_PROJECTS[showProject - 1].title}</label>
                    <span className="block mt-2 italic font-medium text-gray-400">
                      {t(ARRAY_PROJECTS[showProject - 1].description)}
                    </span>
                  </div>
                  <div className="flex justify-center mt-7">
                    <img
                      src={ARRAY_PROJECTS[showProject - 1].imgDemo}
                      className="h-60 w-auto border-2 rounded-md shadow"
                      alt={ARRAY_PROJECTS[showProject - 1].title}
                    />
                  </div>
                  <div className="flex items-center justify-start mt-5">
                    <div className="flex items-center">
                      <span className="block font-semibold mr-3 whitespace-nowrap">{t('PROJECT.TECH_USED')}:</span>
                      {ARRAY_PROJECTS[showProject - 1].tech.split(' ').map((item) => {
                        return (
                          <div>
                            <img
                              title={item}
                              src={`${process.env.PUBLIC_URL}/assets/logo/img-logo-${item}.png`}
                              className="w-10 mx-5"
                              alt={item}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-5 flex justify-start">
                    <span className="block font-semibold mr-3 whitespace-nowrap">Demo:</span>
                    <a
                      href={ARRAY_PROJECTS[showProject - 1].linkDemo}
                      target="_blank"
                      className="block text-blue-500 hover:text-blue-600 font-medium"
                      rel="noopener noreferrer"
                    >
                      {ARRAY_PROJECTS[showProject - 1].linkDemo}
                    </a>
                  </div>
                  <div className="mt-5 flex justify-start">
                    <span className="block font-semibold mr-3 whitespace-nowrap">Github:</span>
                    <a
                      href={ARRAY_PROJECTS[showProject - 1].github}
                      target="_blank"
                      className="block text-blue-500 hover:text-blue-600 font-medium"
                      rel="noopener noreferrer"
                    >
                      {ARRAY_PROJECTS[showProject - 1].github}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </ProjectStyle>
  );
};

export default Project;
