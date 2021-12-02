import styled from 'styled-components';

const SkillStyle = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/assets/skill/img-bg-skill.png);
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

const ARRAY_USED = [
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

export const Skill: React.FC = () => {
  return (
    <SkillStyle className="p-10 bg-no-repeat bg-cover h-full relative">
      <div className="mt-20">
        <div className="flex justify-center">
          <label className="uppercase font-semibold">Frontend</label>
        </div>
        <div className="flex justify-center mt-7">
          {ARRAY_FRONTEND.map((item) => {
            const { name, url, logo } = item;
            return (
              <div key={name} className="mx-2" title={name}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img src={logo} className="h-10 w-auto duration-300 transform hover:scale-125" alt={name} />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-20">
        <div className="flex justify-center">
          <label className="uppercase font-semibold">Backend & Database</label>
        </div>
        <div className="flex justify-center mt-7">
          {ARRAY_BACKEND.map((item) => {
            const { name, url, logo } = item;
            return (
              <div key={name} className="mx-2" title={name}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img src={logo} className="h-10 w-auto duration-300 transform hover:scale-125" alt={name} />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-20">
        <div className="flex justify-center">
          <label className="uppercase font-semibold">Used</label>
        </div>
        <div className="flex justify-center mt-7 flex-wrap">
          {ARRAY_USED.map((item) => {
            const { name, url, logo } = item;
            return (
              <div key={name} className="mx-2" title={name}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img src={logo} className="h-10 w-auto duration-300 transform hover:scale-125" alt={name} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </SkillStyle>
  );
};
