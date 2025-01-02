import React from "react";
import { FaTiktok, FaYoutube, FaGoogle } from "react-icons/fa";
const SignUp = ({ onToggle }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl bg-white rounded-2xl shadow-md">
     

      {/* Form Section */}
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/ p-4 sm:p-5 lg:p-6">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mb-4 text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg hover:bg-purple-600"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <button
            onClick={onToggle}
            className="text-pink-500 hover:underline"
          >
            Login
          </button>
        </p>

        <h3 className="text-center flex justify-center font-lg">- or -</h3>

         {/* Social Icons */}
         <div className="flex justify-center mt-6 space-x-6 text-gray-600">
          <button className="hover:text-red-700">
            <FaTiktok size={28} />
          </button>
          <button className="hover:text-red-500">
            <FaYoutube size={28} />
          </button>
          <button className="hover:text-blue-500">
            <FaGoogle size={28} />
          </button>
        </div>
      </div>
     

 {/* Image Section */}
     
      <div className="hidden md:block w-1/2 p-1">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/001/386/239/small/abstract-fluid-art-colors-free-vector.jpg"
          alt="Sign Up GIF"
          className="h-[500px] rounded-r-2xl"
        />
      </div>
    </div>
  );
};

export default SignUp;
