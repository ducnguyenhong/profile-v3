import styled from 'styled-components';

const SkillStyle = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/assets/skill/img-bg-skill.png);
`;

const ARRAY_FRONTEND = [
  {
    name: 'html',
    url: ''
  }
]

export const Skill: React.FC = () => {
  return (
    <SkillStyle className="p-10 bg-no-repeat bg-cover h-full relative">
      {/* <div className="w-full h-full absolute top-0 left-0 bg-gray-50 opacity-30 z-10"></div> */}
      <div>
        <div className="flex justify-center">
          <label className="uppercase font-semibold">Basic</label>
        </div>
        <div className="flex justify-center mt-3">
          <img src={`${process.env.PUBLIC_URL}/assets/img-html.png`} className="w-10" alt="html" />
          <img src={`${process.env.PUBLIC_URL}/assets/img-css.png`} className="w-10 mx-10" alt="css" />
          <img src={`${process.env.PUBLIC_URL}/assets/img-javascript.png`} className="w-10" alt="javascript" />
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-center">
          <label className="uppercase font-semibold">Frontend</label>
        </div>
        <div className="flex justify-center mt-3">
          <img src={`${process.env.PUBLIC_URL}/assets/img-react.png`} className="w-14 h-14 rounded-full" alt="react" />
          <img
            src={`${process.env.PUBLIC_URL}/assets/img-react-native.png`}
            className="w-14 h-14 rounded-full mx-10"
            alt="react-native"
          />
          <img src={`${process.env.PUBLIC_URL}/assets/img-next.png`} className="w-14 h-14 rounded-full" alt="next" />
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-center">
          <label className="uppercase font-semibold">Backend</label>
        </div>
        <div className="flex justify-center mt-2">
          <img src={`${process.env.PUBLIC_URL}/assets/img-node.png`} className="w-14" alt="node" />
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-center">
          <label className="uppercase font-semibold">Database</label>
        </div>
        <div className="flex justify-center mt-2">
          <img
            src={`${process.env.PUBLIC_URL}/assets/img-mongodb.png`}
            className="w-14 h-14 rounded-md"
            alt="mongodb"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/img-mysql.png`}
            className="w-14 h-14 ml-10 rounded-md"
            alt="mysql"
          />
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-center">
          <label className="uppercase font-semibold">And other</label>
        </div>
        <div className="flex justify-center mt-2">
          <img src={`${process.env.PUBLIC_URL}/assets/img-github.png`} className="w-10 h-10 rounded-md" alt="github" />
          <img
            src={`${process.env.PUBLIC_URL}/assets/img-gitlab.png`}
            className="w-10 h-10 rounded-md ml-5"
            alt="gitlab"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/img-docker.png`}
            className="w-10 h-10 rounded-md ml-5"
            alt="docker"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/img-firebase.png`}
            className="w-10 h-10 rounded-md ml-5"
            alt="firebase"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/img-photoshop.png`}
            className="w-10 h-10 rounded-md ml-5"
            alt="photoshop"
          />
        </div>
        <div className="flex justify-center mt-2">
          <img
            src={`${process.env.PUBLIC_URL}/assets/img-tailwind.png`}
            className="w-10 h-10 rounded-md"
            alt="tailwind"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/img-bootstrap.png`}
            className="w-10 h-10 rounded-md ml-5"
            alt="bootstrap"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/img-material.png`}
            className="w-10 h-10 rounded-md ml-5"
            alt="material"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/img-antdesign.png`}
            className="w-10 h-10 rounded-md ml-5"
            alt="antdesign"
          />
        </div>
      </div>
    </SkillStyle>
  );
};
