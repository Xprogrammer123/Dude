
import { FaTiktok, FaYoutube, FaGoogle } from "react-icons/fa";

const Login = ({ onToggle }: { onToggle: () => void }) =>{
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-md border-2 space-x-5">
      {/* Image Section */}
      <div className="hidden md:block w-1/2">
        <img 
          src="https://t4.ftcdn.net/jpg/06/98/51/03/360_F_698510354_aaTfE4qy568xxE7Uz31UFuUhJGNFCulu.jpg" 
          alt="Login Visual" 
          className="object-cover h-[500px] rounded-l-2xl"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center h-full p-2">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Login</h2>
        <form className="space-y-4">
          <div> 
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg hover:from-pink-600 hover:to-purple-600"
          >
            Login
          </button>
        </form>

     

        <p className="mt-4 text-center">
          Don’t have an account?{" "}
          <button
            onClick={onToggle}
            className="text-purple-500 hover:underline"
          >
           Create account
          </button> 
        </p>
          

      </div>
        
    </div>
  );
};

export default Login;
















