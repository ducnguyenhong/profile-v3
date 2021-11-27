import styled from 'styled-components';

const ProjectStyle = styled.div`
  background: #f1d4a5;
  // background: linear-gradient(
  //   180deg,
  //   rgba(255, 255, 255, 1) 0%,
  //   rgba(255, 255, 255, 1) 56%,
  //   rgba(150, 249, 171, 1) 100%
  // );
`;

export const Project: React.FC = () => {
  return (
    <ProjectStyle className="h-full">
      <div className="relative">
        <img src={`${process.env.PUBLIC_URL}/assets/img-top-project.png`} alt="top project" className="w-full h-52" />
        <img
          src={`${process.env.PUBLIC_URL}/assets/img-label-project.png`}
          alt="top project"
          className="absolute top-20 left-5 h-40"
        />
      </div>

      <div className="pb-5 px-20 mt-16">
        <div className="grid grid-cols-2 gap-x-20 gap-y-5">
          <div className="col-span-1 flex flex-col items-center cursor-pointer transform duration-300 hover:scale-125 opacity-90 hover:opacity-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img-project-1.png`}
              className="block w-32 h-28"
              alt="project 1"
            />
            <label className="block font-bold text-green-500">CVFREE</label>
          </div>

          <div className="col-span-1 flex flex-col items-center cursor-pointer transform duration-300 hover:scale-125 opacity-90 hover:opacity-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img-project-3.png`}
              className="block w-32 h-28"
              alt="project 1"
            />
            <label className="block mt-1 font-bold text-yellow-500">CVFREE APP</label>
          </div>

          <div className="col-span-1 flex flex-col items-center cursor-pointer transform duration-300 hover:scale-125 opacity-90 hover:opacity-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img-project-3.png`}
              className="block w-36 h-28"
              alt="project 1"
            />
            <label className="block mt-1 font-bold text-yellow-500">CMS BASE</label>
          </div>

          <div className="col-span-1 flex flex-col items-center cursor-pointer transform duration-300 hover:scale-125 opacity-90 hover:opacity-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img-project-4.png`}
              className="block w-32 h-28"
              alt="project 1"
            />
            <label className="block mt-1 font-bold text-green-600">GALAXY UTILITY</label>
          </div>

          <div className="col-span-1 flex flex-col items-center cursor-pointer transform duration-300 hover:scale-125 opacity-90 hover:opacity-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img-project-1.png`}
              className="block w-32 h-28"
              alt="project 1"
            />
            <label className="block mt-1 font-bold text-green-600">WEATHER</label>
          </div>

          <div className="col-span-1 flex flex-col items-center cursor-pointer transform duration-300 hover:scale-125 opacity-90 hover:opacity-100">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img-project-3.png`}
              className="block w-32 h-28"
              alt="project 1"
            />
            <label className="block mt-1 font-bold text-yellow-500">CARDS GAME</label>
          </div>
        </div>
      </div>

      <img
        src={`${process.env.PUBLIC_URL}/assets/img-bottom-project-2.png`}
        className="w-16 absolute bottom-3 left-3 opacity-50"
        alt="umbrella"
      />

      <img
        src={`${process.env.PUBLIC_URL}/assets/img-bottom-project-3.png`}
        className="absolute w-16 bottom-5 right-3 opacity-30"
        alt="umbrella"
      />

      <img
        src={`${process.env.PUBLIC_URL}/assets/img-bottom-project-4.png`}
        className="w-14 h-14 absolute top-44 right-3 opacity-50"
        alt="umbrella"
      />
    </ProjectStyle>
  );
};
