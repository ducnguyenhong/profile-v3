import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { ContactStyle } from './contact.style';

const Contact: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  return (
    <ContactStyle
      className={clsx({
        'fixed z-20 h-screen overflow-y-auto lg:overflow-hidden transform bg-no-repeat bg-cover top-0 left-0 opacity-90 duration-500':
          true,
        'w-2/3 lg:w-1/3 translate-x-0': isShow,
        'w-0': !isShow,
      })}
    >
      {isShow && (
        <div className="relative h-full bg-no-repeat bg-cover flex items-center justify-center">
          <div className="grid grid-cols-2 gap-x-16 gap-y-10 px-10">
            <div className="col-span-2 -rotate-10 mt-10">
              <div className="flex justify-center">
                <label className="uppercase text-2xl font-bold text-green-500">Contact me</label>
              </div>
            </div>
            <div className="col-span-1 flex items-center transform mt-20 -rotate-10">
              <FontAwesomeIcon icon={faPhone} className="text-lg mr-2 text-yellow-500" />
              <a href="tel:0389755202" className="block text-center font-semibold text-yellow-500 text-2xl">
                0389755202
              </a>
            </div>

            <div className="col-span-1 flex items-center transform -rotate-10">
              <FontAwesomeIcon icon={faGithub} className="text-xl mr-2" />
              <a
                href="https://github.com/autoclickvn"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-semibold text-2xl text-gray-600"
              >
                autoclickvn
              </a>
            </div>

            <div className="col-span-1 flex items-center transform -rotate-10 mt-12">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl mr-2 text-pink-500" />
              <a href="mailto:autoclickvn@gmail.com" className="block text-center font-semibold text-pink-500 text-2xl">
                autoclickvn
              </a>
            </div>

            <div className="col-span-1 flex items-center transform -rotate-10 -mt-8">
              <FontAwesomeIcon icon={faFacebook} className="text-xl mr-2 text-blue-500" />
              <a
                href="https://facebook.com/ducnh99"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-semibold text-2xl text-blue-500"
              >
                Nguyễn Đức
              </a>
            </div>
          </div>
        </div>
      )}
    </ContactStyle>
  );
};

export default Contact;
