import clsx from 'clsx';
import styled from 'styled-components';

const ExpStyle = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/assets/experience/img-bg-experience.png);
`;

const arrayExp = [
  {
    time: '2004 ',
    workplace: 'Bao Yen primary school',
    position: 'Student',
    icon: '/assets/experience/img-ic-timeline-1.png',
  },
  {
    time: '2009',
    workplace: 'Thanh Thuy secondary school',
    position: 'Student',
    icon: '/assets/experience/img-ic-timeline-2.png',
  },
  {
    time: '2013',
    workplace: 'Thanh Thuy high school',
    position: 'Student',
    icon: '/assets/experience/img-ic-timeline-3.png',
  },
  {
    time: '2017',
    workplace: 'University of Transport and Communications',
    position: 'Student',
    icon: '/assets/experience/img-ic-timeline-4.png',
  },
  {
    time: '2020',
    workplace: 'Omnischool (EkidEnglish)',
    position: 'Frontend Developer',
    icon: '/assets/experience/img-ic-timeline-5.png',
  },
];

export const Experience: React.FC = () => {
  return (
    <ExpStyle className="relative h-full bg-no-repeat bg-cover">
      <div className="absolute w-full h-full bg-gray-700 opacity-30 top-0 left-0 z-10"></div>
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

          {arrayExp.map((item, index) => {
            const { workplace, time, position, icon } = item;
            return (
              <div key={`exp_${time}`} className="grid grid-cols-3">
                <div
                  className={clsx({
                    'col-span-1 relative z-40': true,
                    'h-28': arrayExp.length !== index + 1,
                  })}
                >
                  <span className="block font-semibold text-white text-xl">{time}</span>
                  <div className="absolute -top-2 -right-5">
                    <img src={`${process.env.PUBLIC_URL}${icon}`} alt="ic" className="w-14" />
                  </div>
                </div>
                <div className="col-span-4 lg:col-span-2 ml-10">
                  <span className="font-bold text-xl block text-white">{workplace}</span>
                  <span className="block text-white">{position}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ExpStyle>
  );
};
