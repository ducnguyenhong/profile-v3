import clsx from 'clsx';
import styled from 'styled-components';

const SkillStyle = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/assets/skill/img-bg-skill.webp);
`;

const ARRAY_FRONTEND = [
  {
    name: 'HTML',
    url: 'https://www.w3schools.com/html',
    logo: '/assets/logo/img-logo-html.png',
  },
  {
    name: 'CSS',
    url: 'https://www.w3schools.com/css',
    logo: '/assets/logo/img-logo-css.png',
  },
  {
    name: 'Javascript',
    url: 'https://www.w3schools.com/js',
    logo: '/assets/logo/img-logo-javascript.png',
  },
  {
    name: 'Typescript',
    url: 'https://www.typescriptlang.org',
    logo: '/assets/logo/img-logo-typescript.png',
  },
  {
    name: 'ReactJS',
    url: 'https://reactjs.org',
    logo: '/assets/logo/img-logo-react.png',
  },
  {
    name: 'React Native',
    url: 'https://reactnative.dev',
    logo: '/assets/logo/img-logo-react-native.png',
  },
  {
    name: 'NextJS',
    url: 'https://nextjs.org',
    logo: '/assets/logo/img-logo-nextjs.png',
  },
];

const ARRAY_BACKEND = [
  {
    name: 'NodeJS',
    url: 'https://nodejs.org',
    logo: '/assets/logo/img-logo-node.png',
  },
  {
    name: 'ExpressJS',
    url: 'https://expressjs.com',
    logo: '/assets/logo/img-logo-express.png',
  },
  {
    name: 'NestJS',
    url: 'https://nestjs.com',
    logo: '/assets/logo/img-logo-nestjs.png',
  },
  {
    name: 'MongoDB',
    url: 'https://www.mongodb.com',
    logo: '/assets/logo/img-logo-mongodb.png',
  },
  {
    name: 'MySQL',
    url: 'https://www.mysql.com',
    logo: '/assets/logo/img-logo-mysql.png',
  },
  {
    name: 'SQL Server',
    url: 'https://www.microsoft.com/en-us/sql-server',
    logo: '/assets/logo/img-logo-sqlserver.png',
  },
];

const ARRAY_OTHER = [
  {
    name: 'Github',
    url: 'https://github.com',
    logo: '/assets/logo/img-logo-github.png',
  },
  {
    name: 'Gitlab',
    url: 'https://gitlab.com',
    logo: '/assets/logo/img-logo-gitlab.png',
  },
  {
    name: 'Docker',
    url: 'https://www.docker.com',
    logo: '/assets/logo/img-logo-docker.png',
  },
  {
    name: 'Firebase',
    url: 'https://firebase.google.com',
    logo: '/assets/logo/img-logo-firebase.png',
  },
  {
    name: 'Photoshop',
    url: 'https://www.adobe.com/products/photoshop.html',
    logo: '/assets/logo/img-logo-photoshop.png',
  },
];

const ARRAY_UI = [
  {
    name: 'Tailwind',
    url: 'https://tailwindcss.com',
    logo: '/assets/logo/img-logo-tailwind.png',
  },
  {
    name: 'Bootstrap',
    url: 'https://getbootstrap.com',
    logo: '/assets/logo/img-logo-bootstrap.png',
  },
  {
    name: 'Material UI',
    url: 'https://mui.com',
    logo: '/assets/logo/img-logo-material.png',
  },
  {
    name: 'Ant design',
    url: 'https://ant.design',
    logo: '/assets/logo/img-logo-antdesign.png',
  },
];

export const Skill: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  return (
    <SkillStyle
      className={clsx({
        'fixed z-20 h-screen lg:overflow-hidden transform bg-no-repeat bg-cover top-0 right-0 opacity-90 duration-500':
          true,
        'w-2/3 lg:w-1/3 translate-x-0': isShow,
        'w-0': !isShow,
      })}
    >
      {isShow && (
        <div className="p-10 right-0 h-auto lg:h-full relative top-0">
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
