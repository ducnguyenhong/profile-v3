import clsx from 'clsx';

interface Exp {
  time: string;
  position: string;
  workplace: string;
}

const arrayExp: Exp[] = [
  {
    time: '2004 ',
    workplace: 'Bao Yen primary school',
    position: 'Student',
  },
  {
    time: '2009',
    workplace: 'Thanh Thuy secondary school',
    position: 'Student',
  },
  {
    time: '2013',
    workplace: 'Thanh Thuy high school',
    position: 'Student',
  },
  {
    time: '2017',
    workplace: 'University of Transport and Communications',
    position: 'Student',
  },
  {
    time: '2020',
    workplace: 'Omnischool (EkidEnglish)',
    position: 'Frontend Developer',
  },
];

export const Experience: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-10">
        {arrayExp.map((item, index) => {
          const { workplace, time, position } = item;
          return (
            <div key={`exp_${time}`} className="grid grid-cols-4 lg:grid-cols-4">
              <div
                className={clsx({
                  'border-r-4 border-gray-200 col-span-1 relative': true,
                  'h-24': arrayExp.length !== index + 1,
                })}
              >
                <span className="block font-semibold text-gray-50">{time}</span>
                <div className="absolute top-0 -right-3 py-1">
                  <div
                    className={clsx({
                      'w-5 h-5 rounded-full flex justify-center items-center': true,
                      'bg-red-500': index === 0,
                      'bg-blue-500': index === 1,
                      'bg-green-500': index === 2,
                      'bg-yellow-500': index === 3,
                      'bg-purple-500': index === 4,
                      'bg-pink-500': index === 5,
                    })}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 lg:col-span-3 ml-5">
                <span className="font-medium block text-gray-50">{workplace}</span>
                <span className="block text-gray-100">{position}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
