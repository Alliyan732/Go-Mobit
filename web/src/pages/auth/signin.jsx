import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/signin.webp";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  const validateForm = () => {
    if (!email || !password) {
      setIsErrorVisible(true);
      setErrorMsg("Please fill out all fields");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsErrorVisible(true);
      setErrorMsg("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    if (email === "admin@gmail.com" && password === "admin") {
      sessionStorage.setItem("authenticated", "true");
      navigate("/");
    } else {
      setIsErrorVisible(true);
      setErrorMsg("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-row items-center flex-1 h-full justify-center px-4 sm:px-0">
      <div className="hidden md:block w-1/2 h-screen">
        <img className="h-full" src={loginImage} alt="" />
      </div>

      <div className="flex flex-col h-screen w-full md:w-1/2 p-4 overflow-y-auto">
        <div className="flex flex-col w-4/5 mx-auto flex-1 items-center justify-center">
          <h1 className="font-sans font-bold text-3xl mx-auto mb-5">
            Sign In To Admin Panel!
          </h1>
          {isErrorVisible && (
            <p
              style={{
                color: "red",
                fontSize: 16,
                alignSelf: "flex-start",
                paddingBottom: "4%",
              }}
            >
              {errorMsg}
            </p>
          )}
          <form onSubmit={handleSignIn} className="mt-6 w-[90%] mx-auto">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800 font-sans"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaRegEnvelope color="grey" />
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="block w-full pl-10 pr-3 borderblock px-4 py-2.5 mt-2 bg-white border rounded-md focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 sm:text-sm transition duration-150 ease-in-out"
                placeholder="info@yourmai.com"
                type="email"
              />
            </div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800 mt-5 font-sans"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock color="grey" height="50" width="500" />
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="block w-full pl-10 pr-3 borderblock px-4 py-2.5 mt-2 bg-white border rounded-md focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 sm:text-sm transition duration-150 ease-in-out"
                placeholder="******"
                type="password"
              />
            </div>
            <label
              htmlFor="keep-signed-in"
              className="inline-flex items-center mt-7"
            >
              <input
                checked={isChecked}
                onChange={handleCheckBoxChange}
                type="checkbox"
                id="keep-signed-in"
                name="keep-signed-in"
                className="form-checkbox w-4 h-4 text-indigo-600"
              />
              <span className="ml-2 text-sm text-gray-500 font-sans">
                Keep me signed in
              </span>
            </label>
            <div className="mt-8 ">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-700 focus:outline-none focus:bg-black"
              >
                Login
              </button>
            </div>
            <div className="mt-5 text-center">
              <p
                onClick={() => alert("Feature not added yet!")}
                className=" cursor-pointer text-[#1C9CEA] hover:underline font-sans"
              >
                Forgot Password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
