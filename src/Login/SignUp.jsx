import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup_img from "../img/Signup.png";
import { FaUser, FaPhone, FaEnvelope, FaLock, FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (name && phone && email && password) {
      alert("Account Created Successfully!");
      navigate("/dashboard"); 
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#CCCCFF] via-[#A3A3CC] to-[#5C5C99] p-6">
      <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl w-[950px] flex overflow-hidden border border-white/30">

        <div className="flex-1 p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-[#292966] mb-8">
            Create Your Account 🚀
          </h2>

          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <div className="flex items-center border border-[#A3A3CC] bg-white/40 rounded-full px-4 py-3 shadow-sm hover:shadow-md transition">
                <FaUser className="text-[#5C5C99] mr-3" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1 outline-none bg-transparent text-[#292966] placeholder-gray-600"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center border border-[#A3A3CC] bg-white/40 rounded-full px-4 py-3 shadow-sm hover:shadow-md transition">
                <FaPhone className="text-[#5C5C99] mr-3" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 outline-none bg-transparent text-[#292966] placeholder-gray-600"
                  required
                />
              </div>
            </div>

            
            <div className="mb-4">
              <div className="flex items-center border border-[#A3A3CC] bg-white/40 rounded-full px-4 py-3 shadow-sm hover:shadow-md transition">
                <FaEnvelope className="text-[#5C5C99] mr-3" />
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 outline-none bg-transparent text-[#292966] placeholder-gray-600"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center border border-[#A3A3CC] bg-white/40 rounded-full px-4 py-3 shadow-sm hover:shadow-md transition">
                <FaLock className="text-[#5C5C99] mr-3" />
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 outline-none bg-transparent text-[#292966] placeholder-gray-600"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#5C5C99] to-[#292966] hover:from-[#292966] hover:to-[#5C5C99] text-white w-full py-3 rounded-full mb-6 shadow-lg hover:shadow-xl transition"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center mb-6">
            <span className="flex-1 h-px bg-gray-300"></span>
            <span className="px-3 text-gray-600 text-sm">or</span>
            <span className="flex-1 h-px bg-gray-300"></span>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <FaGoogle className="text-red-500 text-2xl cursor-pointer hover:scale-110 transition" />
            <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:scale-110 transition" />
            <FaApple className="text-black text-2xl cursor-pointer hover:scale-110 transition" />
          </div>

          <div className="text-center text-sm text-gray-700">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/signin")}
              className="text-[#292966] font-semibold cursor-pointer hover:underline"
            >
              Login
            </span>
          </div>
        </div>

        <div className="flex-1 bg-gradient-to-b from-[#A3A3CC] to-[#5C5C99] flex items-center justify-center relative">
          <img
            src={Signup_img}
            alt="Student using laptop"
            className="w-80 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
