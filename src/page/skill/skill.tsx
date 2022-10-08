import clsx from 'clsx';
import { ARRAY_BACKEND, ARRAY_FRONTEND, ARRAY_OTHER, ARRAY_UI } from './skill.data';
import { SkillStyle } from './skill.style';

const Skill: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  return (
    <SkillStyle
      className={clsx({
        'fixed z-20 overflow-y-auto h-screen lg:overflow-hidden bg-no-repeat bg-cover top-0 right-0 opacity-90 duration-500':
          true,
        'w-2/3 lg:w-1/2 xl:w-1/3': isShow,
        'w-0': !isShow,
      })}
    >
      {isShow && (
        <div className="content bg-no-repeat bg-cover px-10 pt-10 2xl:pt-48 pb-20 lg:pb-10 right-0 h-auto lg:h-full relative top-0">
          <div className="mt-10">
            <div className="flex justify-center relative">
              <div className="w-1/2 m-auto left-0 right-0 h-px bg-gray-300 absolute top-0 bottom-0 z-10" />
              <label className="uppercase font-semibold z-20 text-gray-500 px-2.5 rounded-2xl bg-yellow-100 text-lg">
                Frontend
              </label>
            </div>
            <div className="flex justify-center mt-7">
              {ARRAY_FRONTEND.map((item) => {
                const { name, url, logo } = item;
                return (
                  <div key={name} className="mx-2" title={name}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <img src={logo} className="h-12 w-auto duration-300 transform hover:scale-125" alt={name} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20">
            <div className="flex justify-center relative">
              <div className="w-1/2 m-auto left-0 right-0 h-px bg-gray-300 absolute top-0 bottom-0 z-10" />
              <label className="uppercase font-semibold z-20 text-gray-500 px-2.5 rounded-xl bg-yellow-100 text-lg">
                UI Framework
              </label>
            </div>
            <div className="flex justify-center mt-7">
              {ARRAY_UI.map((item) => {
                const { name, url, logo } = item;
                return (
                  <div key={name} className="mx-2" title={name}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <img src={logo} className="h-12 w-auto duration-300 transform hover:scale-125" alt={name} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20">
            <div className="flex justify-center relative">
              <div className="w-1/2 m-auto left-0 right-0 h-px bg-gray-300 absolute top-0 bottom-0 z-10" />
              <label className="uppercase font-semibold z-20 text-gray-500 px-2.5 rounded-xl bg-yellow-100 text-lg">
                Backend
              </label>
            </div>
            <div className="flex justify-center mt-7">
              {ARRAY_BACKEND.map((item) => {
                const { name, url, logo } = item;
                return (
                  <div key={name} className="mx-2" title={name}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <img src={logo} className="h-12 w-auto duration-300 transform hover:scale-125" alt={name} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20">
            <div className="flex justify-center relative">
              <div className="w-1/2 m-auto left-0 right-0 h-px bg-gray-300 absolute top-0 bottom-0 z-10" />
              <label className="uppercase font-semibold z-20 text-gray-500 px-2.5 rounded-xl bg-yellow-100 text-lg">
                Other
              </label>
            </div>
            <div className="flex justify-center mt-7 flex-wrap">
              {ARRAY_OTHER.map((item) => {
                const { name, url, logo } = item;
                return (
                  <div key={name} className="mx-2" title={name}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <img src={logo} className="h-12 w-auto duration-300 transform hover:scale-125" alt={name} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </SkillStyle>
  );
};

export default Skill;
