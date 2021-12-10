import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const animationNumber = keyframes`
  from{transform: translateY(0)}
  to{transform: translateY(-5px)}
`;

const Style = styled.div`
  .number-icon {
    animation: ${animationNumber} 1.2s ease-in-out 3s infinite alternate;
  }
  .number-icon-1 {
    animation-delay: 0.4s;
  }
  .number-icon-2 {
    animation-delay: 0.8s;
  }
  .number-icon-3 {
    animation-delay: 1.2s;
  }
  .number-icon-4 {
    animation-delay: 1.6s;
  }
`;

const TetHoliday: React.FC = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const countDownDate = new Date('Feb 1, 2022 00:00:00').getTime();

  useEffect(() => {
    const countDown = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(countDown);
  }, [countDownDate]);

  return (
    <Style className="fixed -top-2 left-10">
      <a
        href="https://autoclickvn.github.io/count-down-tet-holiday"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        title="Tết Nhâm Dần 2022"
      >
        <div className="grid grid-cols-4">
          <img
            src={`${process.env.PUBLIC_URL}/assets/home/img-tet-2.png`}
            alt="2"
            className="w-8 lg:w-14 number-icon number-icon-1 col-span-1"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/home/img-tet-0.png`}
            alt="0"
            className="w-8 lg:w-14 number-icon number-icon-2 col-span-1"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/home/img-tet-2.png`}
            alt="2"
            className="w-8 lg:w-14 number-icon number-icon-3 col-span-1"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/home/img-tet-2022.png`}
            alt="2"
            className="w-8 lg:w-14 number-icon number-icon-4 col-span-1"
          />
        </div>

        {(days > 0 || hours > 0 || minutes > 0 || seconds > 0) && (
          <div className="mt-2 grid grid-cols-4 gap-x-3">
            <div className="col-span-1 number-icon number-icon-1 font-bold text-blue-300 lg:mx-1 text-xs lg:text-base w-4 lg:w-8">
              {days}d
            </div>
            <div className="col-span-1 number-icon number-icon-2 font-bold text-yellow-200 lg:mx-1 text-xs lg:text-base w-4 lg:w-8">
              {hours}h
            </div>
            <div className="col-span-1 number-icon number-icon-3 font-bold text-blue-300 lg:mx-1 text-xs lg:text-base w-4 lg:w-8">
              {minutes}m
            </div>
            <div className="col-span-1 number-icon number-icon-4 font-bold text-yellow-200 lg:mx-1 text-xs lg:text-base w-4 lg:w-8">
              {seconds}s
            </div>
          </div>
        )}
      </a>
    </Style>
  );
};

export default TetHoliday;
