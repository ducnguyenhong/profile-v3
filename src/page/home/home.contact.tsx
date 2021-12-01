import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const ContactStyle = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/assets/contact/img-bg-contact.png);

  .contact-facebook {
    background: rgb(76, 100, 247);
    background: linear-gradient(180deg, rgba(76, 100, 247, 1) 0%, rgba(255, 255, 255, 1) 35%);
  }

  .contact-email {
    background: rgb(232, 95, 250);
    background: linear-gradient(180deg, rgba(232, 95, 250, 1) 0%, rgba(255, 255, 255, 1) 35%);
  }

  .contact-phone {
    background: rgb(61, 223, 101);
    background: linear-gradient(180deg, rgba(61, 223, 101, 1) 0%, rgba(255, 255, 255, 1) 35%);
  }

  .contact-github {
    background: rgb(126, 126, 126);
    background: linear-gradient(180deg, rgba(126, 126, 126, 1) 0%, rgba(255, 255, 255, 1) 35%);
  }

  .-rotate-10 {
    transform: rotate(-10deg);
  }
`;

export const Contact: React.FC = () => {
  return (
    <ContactStyle className="relative h-full bg-no-repeat bg-cover flex items-center justify-center">
      {/* <div className="z-40">
        <img
          src={`${process.env.PUBLIC_URL}/assets/contact/img-label-contact.png`}
          className="w-56"
          alt="label contact"
        />
      </div> */}

      <div className="grid grid-cols-2 gap-x-10 gap-y-10 px-10">
        <div className="col-span-1 flex items-center transform mt-24 -rotate-10">
          <FontAwesomeIcon icon={faPhone} className="text-lg mr-2 text-yellow-500" />
          <a href="tel:0389755202" className="block text-center font-semibold text-2xl">
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
          <FontAwesomeIcon icon={faEnvelope} className="text-xl mr-2" />
          <a
            href="mailto:nguyenduc111299@gmail.com"
            className="block text-center text-purple-500 font-semibold text-2xl"
          >
            nguyenduc111299
          </a>
        </div>

        <div className="col-span-1 flex items-center transform -rotate-10 -mt-10">
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

      {/* <div className="h-full w-px bg-gray-500 absolute top-0 left-72 z-10"></div>
      <div className="w-full h-px bg-gray-500 absolute top-96 left-0 z-10"></div> */}
      {/* <div>
        <div className="contact-phone rounded-2xl w-28 h-28 overflow-hidden flex items-center justify-center flex-col">
          <div className="w-7 h-7 rounded-lg bg-green-400 flex items-center justify-center">
            <FontAwesomeIcon icon={faPhone} className="text-white" />
          </div>
          <a href="tel:0389755202" className="block text-center text-green-500 text-sm font-medium mt-3">
            0389755202
          </a>
        </div>

        <div className="contact-email rounded-2xl w-28 h-28 mt-5 ml-16 overflow-hidden flex items-center justify-center flex-col">
          <div className="w-7 h-7 rounded-lg bg-purple-400 flex items-center justify-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-white" />
          </div>
          <a href="mailto:autoclickvn@gmail.com" className="block text-center text-purple-500 font-medium mt-3 text-sm">
            autoclickvn
          </a>
        </div>

        <div className="contact-facebook rounded-2xl w-28 h-28 mt-5 ml-32 overflow-hidden flex items-center justify-center flex-col">
          <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center">
            <FontAwesomeIcon icon={faFacebook} className="text-white" />
          </div>
          <a
            href="https://facebook.com/ducnh99"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-medium mt-3 text-sm text-blue-600"
          >
            Nguyễn Đức
          </a>
        </div>

        <div className="contact-github rounded-2xl w-28 h-28 mt-5 ml-48 overflow-hidden flex items-center justify-center flex-col">
          <div className="w-7 h-7 rounded-lg bg-gray-500 flex items-center justify-center">
            <FontAwesomeIcon icon={faGithub} className="text-white" />
          </div>
          <a
            href="https://github.com/autoclickvn"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-medium mt-3 text-sm text-gray-600"
          >
            Nguyễn Đức
          </a>
        </div>

        <div className="contact-youtube rounded-2xl w-28 h-28 mt-5 ml-64 64overflow-hidden flex items-center justify-center flex-col">
          <div className="w-7 h-7 rounded-lg bg-red-500 flex items-center justify-center">
            <FontAwesomeIcon icon={faYoutube} className="text-white" />
          </div>
          <a
            href="https://www.youtube.com/channel/UCLO94_1jrZLbzLJdsxsjrGA"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-medium mt-3 text-sm text-red-600"
          >
            Proton Studio
          </a>
        </div>
      </div> */}
      {/* <img
        src="https://image.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg"
        className="w-full h-44 absolute bottom-0 left-0"
        alt="bottom contact"
      /> */}
    </ContactStyle>
  );
};
