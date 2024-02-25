import React from "react";
import { FaUser, FaEnvelope, FaMobileAlt, FaUserClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BackBtn from "../../components/ui/backBtn";
import { addUser } from "../../api/users";
import { FaPlus } from "react-icons/fa";

export default function AddUser() {
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cell, setCell] = React.useState("");
  const [age, setAge] = React.useState("");

  const [errorVisible, setErrorVisible] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const validateForm = () => {
    if (!name || !email || !cell || !age) {
      setErrorVisible(true);
      setErrorMsg("Please fill out all fields!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorVisible(true);
      setErrorMsg("Please enter a valid email address!");
      return false;
    }

    const parsedAge = parseInt(age);
    if (isNaN(parsedAge) || parsedAge < 18 || parsedAge > 60) {
      setErrorVisible(true);
      setErrorMsg("Please enter a valid age between 18 and 60!");
      return false;
    }

    const phoneRegex = /^\d{12}$/;
    if (!phoneRegex.test(cell)) {
      setErrorVisible(true);
      setErrorMsg("Please enter a valid 12-digit phone number");
      return false;
    }

    return true;
  };

  const saveUser = async (e) => {
    setErrorVisible(false);
    if (!validateForm()) {
      return;
    }

    const userData = {
      name,
      email,
      cell,
      age,
    };

    try {
      const response = await addUser(userData);
      console.log(response);
      alert(response.message);
      if (response && response.message === "User added successfully") {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert("error res: ", error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-5 bg-white border border-gray-200 rounded-lg shadow w-[90%] mx-auto mt-10">
        <BackBtn route={"/"} />
        <div className="w-[100%] md:w-[70%] lg:w-[60%] mx-auto mt-5">
          <div className="mb-4 flex flex-col md:flex-row md:items-center">
            <div className="md:text-left text-center md:mb-0">
              <h3 className="text-2xl sm:text-2xl font-semibold font-sans">
                Add User
              </h3>
              <p className="font-sans text-base">Add new user quickly</p>
            </div>
          </div>
          {errorVisible && (
            <p className="text-red-500 text-[16px] mb-2">{errorMsg}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800 font-sans"
              >
                <FaUser className="inline-block mr-2 mb-1" />
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="Name"
                className="block w-full borderblock px-4 py-2.5 mt-2 lg:py-3.5 bg-white border rounded-md focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Enter User name "
                type="text"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 font-sans"
              >
                <FaEnvelope className="inline-block mr-2 mb-1" />
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="Email"
                className="block w-full borderblock px-4 py-2.5 mt-2 lg:py-3.5 bg-white border rounded-md focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Enter Email "
                type="email"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="cell"
                className="block text-sm font-semibold text-gray-800 font-sans"
              >
                <FaMobileAlt className="inline-block mr-2 mb-1" />
                Cell# (Format: +923331234567)
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPlus color="grey" size={14} />
                </div>
                <input
                  value={cell}
                  onChange={(e) => setCell(e.target.value)}
                  id="Cell"
                  className="pl-8 block w-full borderblock px-4 py-2.5 mt-2 lg:py-3.5 bg-white border rounded-md focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Enter Cell# "
                  type="text"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="age"
                className="block text-sm font-semibold text-gray-800 font-sans"
              >
                <FaUserClock className="inline-block mr-2 mb-1" />
                Age
              </label>
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                id="Age"
                className="block w-full borderblock px-4 py-2.5 mt-2 lg:py-3.5 bg-white border rounded-md focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Enter Age "
                type="number"
              />
            </div>
          </div>

          <div className="flex justify-center items-center mt-16 space-x-2 mb-10">
            <button
              onClick={() => navigate("/")}
              className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 w-44 rounded-full shadow-md transition duration-300 ease-in-out"
            >
              Cancel
            </button>
            <button
              onClick={saveUser}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-44 rounded-full shadow-md transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
