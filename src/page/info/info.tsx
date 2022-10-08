import { faBirthdayCake, faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { InfoStyle } from './info.style';

const Information: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  const { t } = useTranslation();

  return (
    <InfoStyle
      className={clsx({
        'fixed z-20 overflow-y-auto h-screen lg:overflow-hidden bg-no-repeat bg-cover top-0 left-0 opacity-90 duration-500':
          true,
        'w-2/3 lg:w-1/2 xl:w-1/3': isShow,
        'w-0': !isShow,
      })}
    >
      {isShow && (
        <div className="content pb-10 lg:pb-0 relative h-auto bg-cover bg-no-repeat main-content">
          <div className="relative">
            <img
              src={`${process.env.PUBLIC_URL}/assets/info/img-cover-info.webp`}
              className="h-48 w-full"
              alt="cover"
            />
            <div className="flex justify-center absolute transform -bottom-20 left-12">
              <img
                src={`${process.env.PUBLIC_URL}/assets/info/img-avatar.webp`}
                className="w-36 h-36 rounded-full border-4 border-white"
                alt="avatar"
              />
            </div>
          </div>

          <div className="ml-52 mt-3">
            <label className="block font-bold text-2xl whitespace-nowrap">Nguyễn Hồng Đức</label>
            <span className="block font-medium text-gray-400 whitespace-nowrap">Frontend Developer</span>
          </div>

          <div className="text-center mt-12 font-semibold flex justify-center 2xl:mt-28">
            <div className="bg-gray-50 px-4 py-2 rounded-md">
              <span className="text-gray-600 text-lg font-medium whitespace-nowrap">
                "{t('INFO.HELLO_START')}{' '}
                <span className="text-red-500 font-bold text-lg">{t('INFO.HELLO_MIDDLE')}</span>. {t('INFO.HELLO_END')}"
              </span>
            </div>
          </div>

          <div className="md:mx-20 mt-16 grid grid-cols-2 gap-x-10 gap-y-10 2xl:mt-28">
            <div className="flex items-center justify-center flex-col col-span-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-100 to-pink-400 flex items-center justify-center">
                <FontAwesomeIcon icon={faBirthdayCake} className="text-gray-50 text-xl" />
              </div>
              <span className="mt-2 font-medium text-pink-400 duration-300 hover:text-pink-500 cursor-pointer whitespace-nowrap">
                11/12/1999
              </span>
            </div>

            <div className="flex items-center justify-center flex-col col-span-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-100 to-green-400 flex items-center justify-center">
                <FontAwesomeIcon icon={faPhone} className="text-gray-50 text-xl" />
              </div>
              <a
                href="tel:0376876191"
                className="mt-2 font-medium text-green-400 duration-300 hover:text-green-500 whitespace-nowrap"
              >
                0376876191
              </a>
            </div>

            <div className="flex items-center justify-center flex-col col-span-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-400 flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-50 text-xl" />
              </div>
              <a
                href="mailto:autoclickvn@gmail.com"
                className="mt-2 font-medium text-yellow-400 duration-300 hover:text-yellow-500 whitespace-nowrap"
              >
                autoclickvn@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center flex-col col-span-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-purple-400 flex items-center justify-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-50 text-xl" />
              </div>
              <a
                href="https://www.google.com/maps/place/Thanh+Th%E1%BB%A7y,+Ph%C3%BA+Th%E1%BB%8D/@21.1238164,105.1497739,11z/data=!3m1!4b1!4m5!3m4!1s0x313462409d26e58b:0x62659ef7249ab3d2!8m2!3d21.1141818!4d105.2807163"
                rel="noopener noreferrer"
                target="_blank"
                className="mt-2 font-medium text-purple-400 duration-300 hover:text-purple-500 whitespace-nowrap"
              >
                {t('INFO.ADDRESS')}
              </a>
            </div>
          </div>
        </div>
      )}
    </InfoStyle>
  );
};

export default Information;
