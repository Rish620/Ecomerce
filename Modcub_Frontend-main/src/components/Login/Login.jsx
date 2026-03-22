import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submission starts

    try {
      const res = await axios.post(
        `${server}/user/login-user`,
        { email, password },
        { withCredentials: true }
      );
      localStorage.setItem("token", res.data.token);
      toast.success("Login Success!");
      navigate("/");
      window.location.reload(true);
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setLoading(false); // Set loading to false after request is complete
    }
  };

  return (
    <div className="min-h-screen bg-[#053C5F] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="p-4 rounded-xl sm:mx-auto sm:w-full sm:max-w-md bg-[#1a4d78]">
        <Link to="/" className="text-white font-semibold pl-2 hover:underline">
          Home
        </Link>
        <h2 className="text-center text-3xl font-semibold text-white">
          Login Here
        </h2>
        <div className="py-8 px-4 sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-white"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="example@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-white"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  placeholder="***********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-semibold text-white text-md"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-white hover:underline"
                >
                  FORGOT PASSWORD?
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="group relative w-[50%] h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-lg font-semibold rounded-md text-white bg-[#1758A5]"
                disabled={loading} // Disable button when loading
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
            <div className="flex w-full">
              <h4 className="text-white">Don’t have an account yet? </h4>
              <Link
                to="/sign-up"
                className="text-white font-semibold pl-2 hover:underline"
              >
                REGISTER HERE
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
