import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { ContactStyle } from './contact.style';

const ARRAY_CONTACT = ['phone', 'email', 'facebook', 'github'];

const Contact: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  const [activeContact, setActiveContact] = useState<string>(ARRAY_CONTACT[0]);

  useEffect(() => {
    const intervalContact = setInterval(function () {
      const currentContact = ARRAY_CONTACT.indexOf(activeContact);
      const nextContact = currentContact === ARRAY_CONTACT.length - 1 ? 0 : currentContact + 1;
      setActiveContact(ARRAY_CONTACT[nextContact]);
    }, 2000);

    return () => clearInterval(intervalContact);
  }, [activeContact]);

  return (
    <ContactStyle
      className={clsx({
        'fixed z-20 h-screen overflow-y-auto lg:overflow-hidden bg-no-repeat bg-cover top-0 left-0 opacity-90 duration-500':
          true,
        'w-2/3 lg:w-1/3': isShow,
        'w-0': !isShow,
      })}
    >
      {isShow && (
        <div className="content pt-20 pb-96 lg:pb-0 relative h-auto bg-no-repeat bg-cover flex items-start justify-center">
          <div className="grid grid-cols-2 gap-x-16 gap-y-10 px-10">
            <a
              href="tel:0389755202"
              className={clsx({
                'bubble bubble-phone ml-14 col-span-1 overflow-hidden flex flex-col items-center mt-24 border border-white rounded-full justify-center w-28 h-28 group duration-500':
                  true,
                'bg-green-600': activeContact === 'phone',
                'hover:bg-green-600': activeContact !== 'phone',
              })}
            >
              <FontAwesomeIcon
                icon={faPhone}
                className={clsx({
                  'mb-2 duration-500': true,
                  'text-white': activeContact === 'phone',
                  'group-hover:text-white text-green-700': activeContact !== 'phone',
                })}
              />
              <span
                className={clsx({
                  'block text-center font-semibold duration-500': true,
                  'text-white': activeContact === 'phone',
                  'group-hover:text-white text-green-700': activeContact !== 'phone',
                })}
              >
                0389755202
              </span>
            </a>

            <a
              href="https://github.com/autoclickvn"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx({
                'bubble bubble-github col-span-1 -m-5 overflow-hidden flex flex-col items-center border border-white rounded-full justify-center w-28 h-28 group duration-500':
                  true,
                'bg-gray-700': activeContact === 'github',
                'hover:bg-gray-700': activeContact !== 'github',
              })}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className={clsx({
                  'text-xl mb-2 duration-500': true,
                  'text-white': activeContact === 'github',
                  'group-hover:text-white text-gray-700': activeContact !== 'github',
                })}
              />
              <span
                className={clsx({
                  'block text-center font-semibold duration-500': true,
                  'text-white': activeContact === 'github',
                  'group-hover:text-white text-gray-700': activeContact !== 'github',
                })}
              >
                autoclickvn
              </span>
            </a>

            <a
              href="mailto:autoclickvn@gmail.com"
              className={clsx({
                'bubble bubble-email col-span-1 overflow-hidden flex flex-col items-center border border-white rounded-full justify-center w-28 h-28 mt-12 group duration-500':
                  true,
                'bg-pink-600': activeContact === 'email',
                'hover:bg-pink-600': activeContact !== 'email',
              })}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className={clsx({
                  'text-xl mb-2 duration-500': true,
                  'text-white': activeContact === 'email',
                  'group-hover:text-white text-pink-500': activeContact !== 'email',
                })}
              />
              <span
                className={clsx({
                  'block text-center font-semibold duration-500': true,
                  'text-white': activeContact === 'email',
                  'group-hover:text-white text-pink-500': activeContact !== 'email',
                })}
              >
                autoclickvn
              </span>
            </a>

            <a
              href="https://facebook.com/ducnh99"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx({
                'bubble bubble-facebook ml-14 col-span-1 overflow-hidden flex flex-col items-center border border-white rounded-full justify-center w-28 h-28 group duration-500':
                  true,
                'bg-blue-800': activeContact === 'facebook',
                'hover:bg-blue-800': activeContact !== 'facebook',
              })}
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className={clsx({
                  'text-xl mb-2 duration-500': true,
                  'text-white': activeContact === 'facebook',
                  'group-hover:text-white text-blue-600': activeContact !== 'facebook',
                })}
              />
              <span
                className={clsx({
                  'block text-center font-semibold duration-500': true,
                  'text-white': activeContact === 'facebook',
                  'group-hover:text-white text-blue-600': activeContact !== 'facebook',
                })}
              >
                Nguyễn Đức
              </span>
            </a>
          </div>
        </div>
      )}
    </ContactStyle>
  );
};

export default Contact;
