export const Information: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <img
          src="https://profile-v2.herokuapp.com/static/media/profile.23c73f83.jpg"
          className="w-32 h-32 rounded-full"
          alt="avatar"
        />
      </div>

      <div className="text-white text-center mt-5 text-xl uppercase font-semibold">Nguyễn Hồng Đức</div>

      <div className="md:mx-20 mt-10">
        <div className="text-gray-50 whitespace-nowrap">Birthday: 11/12/1999</div>
        <div className="text-gray-50 whitespace-nowrap">Phone: 0376876191</div>
        <div className="text-gray-50 whitespace-nowrap">Email: nguyenduc111299@gmail.com</div>
        <div className="text-gray-50 whitespace-nowrap">School: University of Transport and Communications</div>
        <div className="text-gray-50 whitespace-nowrap">Address: Thanh Thuy, Phu Tho</div>
      </div>
    </div>
  );
};
