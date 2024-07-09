const Navbar = () => {
  return (
    <nav className="w-full px-20 py-4 absolute top-0 flex justify-between items-center z-50 bg-transparent">
      <div className="flex-1">
        <div className="text-xl text-white font-bold">
          <img src="/journey.svg" alt="The Journey Logo" className="h-10" />
        </div>
      </div>
      <div className="flex gap-2">
        <button
          // onClick={handleLoginModal}
          className="text-white py-1 px-6 rounded-lg border border-white font-bold"
        >
          Login
        </button>
        <button
          // onClick={handleRegisterModal}
          className="text-white bg-cyan-600 py-1 px-6 rounded-lg font-bold hover:bg-cyan-700"
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
