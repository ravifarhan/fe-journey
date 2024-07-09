import React from "react";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="relative bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url(/img/background.jpeg)",
          height: "510px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
          <div className="text-white ml-20">
            <h1 className="xl:text-6xl text-4xl font-bold">
              The Journey <br /> you ever dreamed of.
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              We made a tool so you can easily keep & share your travel
              memories. <br />
              But there is a lot more
            </p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Journey</h1>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Find Journey"
            className="w-10/12 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2 hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
