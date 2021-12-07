const RotateScreen: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden p-10 flex items-center justify-center flex-col bg-gray-200">
      <img src={`${process.env.PUBLIC_URL}/assets/common/rotate-mobile.gif`} className="w-60" alt="rotate" />
      <div className="mt-10 pb-20 text-center font-semibold text-2xl text-gray-500">
        Vui lòng xoay ngang thiết bị để có trải nghiệm tốt nhất
      </div>
    </div>
  );
};

export default RotateScreen;
