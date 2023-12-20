import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import SocialLogo from "../components/SocialLogo";
import { useUserContext } from "../context/UserContext";
import { getUserByEmail } from "../services/user";

const Login = () => {
  const { user, login } = useUserContext();
  console.log(user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    return <Navigate to="/" />;
  }

  const handleLogin = async () => {
    if (email.length > 0) {
      const res = await getUserByEmail(email);
      if (res.password == password) {
        login(res);
        window.alert("Login successful!");
        window.location.href = "/";
      }
    }
  };
  return (
    <div className="bg-[#EFE8E1] h-screen w-screen grid grid-cols-2 font-poppins text-themeblack">
      <div className="col-span-1 overflow-hidden relative">
        <div className="w-[140%] h-[140%] bg-[#D0C8C0] rounded-full translate-x-[-35%] translate-y-[-14%]" />
        <img
          src={process.env.PUBLIC_URL + "/login/loginman.png"}
          alt="login-man"
          className="absolute top-0 left-20 w-[65%] object-cover"
        />
      </div>
      <div className="col-span-1 h-full w-[60%] ml-10 flex flex-col justify-center pl-5">
        <h1 className="text-5xl font-bold">Welcome Back</h1>
        <p className="text-xl mt-2 pl-2">Log in to continue your progress</p>
        <form className="mt-16">
          <div className="mb-4">
            <label htmlFor="email" className="block pl-2 text-xl mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 bg-[#D0C8C0] rounded-xl"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block pl-2 text-xl mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-4 bg-[#D0C8C0] rounded-xl"
              required
            />
          </div>

          <div
            id="remember-forget-wrapper"
            className="w-full flex flex-row justify-between pl-2 items-center"
          >
            <div
              id="remember-wrapper"
              className="flex flex-row gap-2 items-center"
            >
              <input type="checkbox" className="h-5 w-5 accent-[#D0C8C0]" />
              <label htmlFor="remember" className="text-xl">
                Remember me
              </label>
            </div>

            <p className="text-xl cursor-pointer">Forget password?</p>
          </div>
          <button
            type="button" // Change to "submit" if you want to submit the form
            onClick={handleLogin}
            className="bg-[#6096BA] text-lightcreme w-full px-6 py-5 rounded-2xl font-semibold text-2xl mt-14 transform transition-transform hover:scale-105"
          >
            sign In
          </button>
        </form>
        <p className="mx-auto text-xl mt-10">OR LOGIN WITH</p>
        <div
          id="social-wrapper"
          className="flex flex-row w-full justify-between mt-8"
        >
          <SocialLogo src="/login/instagram.png" alt="instagram" />
          <SocialLogo src="/login/facebook.png" alt="facebook" />
          <SocialLogo src="/login/google.png" alt="google" />
          <SocialLogo src="/login/twitter.png" alt="twitter" />
        </div>
        <p className="text-xl mt-12">
          Don't have an account?{" "}
          <Link to="/register">
            <span className="font-semibold cursor-pointer">Register here</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
