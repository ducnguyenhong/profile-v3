const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full relative">
      <img src={`${process.env.PUBLIC_URL}/assets/img-island.png`} alt="island" />

      <div className="absolute" style={{ left: '40%', top: '0' }}>
        <img src={`${process.env.PUBLIC_URL}/assets/img-volcano.png`} className="w-32 cursor-pointer" alt="volcano" />
      </div>

      <div className="absolute" style={{ left: '50%', top: '55%' }}>
        <img
          src="https://cdn-icons.flaticon.com/png/512/2969/premium/2969989.png?token=exp=1637517580~hmac=bd70aa2c0865bbd5ef07c6b4e111b39d"
          className="w-20 cursor-pointer"
          alt="sea shells"
        />
      </div>

      <div className="absolute" style={{ right: '20%', bottom: '40%' }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3112/3112953.png"
          className="w-20 cursor-pointer"
          alt="umbrella"
        />
      </div>
    </div>
  );
};

export default Home;
