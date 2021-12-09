import clsx from 'clsx';
import { ARRAY_EXP } from './experience.data';
import { ExpStyle } from './experience.style';

const Experience: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  return (
    <ExpStyle
      className={clsx({
        'fixed z-20 overflow-y-auto h-screen lg:overflow-hidden transform bg-no-repeat bg-cover top-0 right-0 opacity-90 duration-500':
          true,
        'w-2/3 lg:w-1/3 translate-x-0': isShow,
        'w-0': !isShow,
      })}
    >
      {isShow && (
        <div className="relative h-full bg-no-repeat bg-cover">
          <div className="absolute w-full h-full bg-gray-700 opacity-10 top-0 left-0 z-10"></div>
          <div className="z-50 absolute top-0 left-0 w-full h-full">
            <div className="flex justify-center mt-5">
              <img
                src={`${process.env.PUBLIC_URL}/assets/experience/img-top-experience.png`}
                className="w-40 mr-36 z-40"
                alt="top perience"
              />
            </div>
            <div className="px-20 mt-10 relative">
              <img
                src={`${process.env.PUBLIC_URL}/assets/experience/img-straw.png`}
                className="absolute -top-56 left-48 w-52 z-10"
                alt="straw"
              />

              {ARRAY_EXP.map((item, index) => {
                const { workplace, time, position, icon } = item;
                return (
                  <div key={`exp_${time}`} className="grid grid-cols-3">
                    <div
                      className={clsx({
                        'col-span-1 relative z-40': true,
                        'h-28': ARRAY_EXP.length !== index + 1,
                      })}
                    >
                      <span className="block font-semibold text-gray-600 text-xl">{time}</span>
                      <div className="absolute -top-2 -right-5">
                        <img src={`${process.env.PUBLIC_URL}${icon}`} alt="ic" className="w-14" />
                      </div>
                    </div>
                    <div className="col-span-4 lg:col-span-2 ml-10">
                      <span className="font-bold text-xl block text-gray-600">{workplace}</span>
                      <span className="block text-gray-600">{position}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </ExpStyle>
  );
};

export default Experience;