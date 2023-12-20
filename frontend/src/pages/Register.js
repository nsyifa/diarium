import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogo from "../components/SocialLogo";
import { useUserContext } from "../context/UserContext";
import { getUserByEmail, createUser } from "../services/user";

const Register = () => {
  const { user } = useUserContext();
  const [warning, setWarning] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleRegister = async () => {
    if (
      email.length > 0 &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      password.length > 0 &&
      isChecked
    ) {
      const res = await getUserByEmail(email);
      if (res) {
        setWarning("*This email's account already exists!");
      } else {
        const formData = {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
        };
        const newUser = await createUser(formData);
        console.log("New user created:", newUser);
        window.alert(
          "Register successful! Login with your account to proceed."
        );
        window.location.href = "/login";
      }
    } else {
      setWarning("*Fields cannot be empty!");
    }
  };
  return (
    <div className="bg-[#EFE8E1] h-screen w-screen grid grid-cols-2 font-poppins text-themeblack">
      <div className="col-span-1 h-full w-[65%] ml-32 flex flex-col justify-center pl-5">
        <h1 className="text-5xl font-bold">Register Yourself</h1>
        <p className="text-xl mt-2">Begin your journey with Diarium today</p>
        <form className="mt-16">
          <div id="name-wrapper" className="w-full grid grid-cols-2 mb-4 gap-8">
            <div className="col-span-1 w-full">
              <label htmlFor="name" className="block pl-2 text-xl mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-4 bg-[#D0C8C0] rounded-xl"
                required
              />
            </div>

            <div className="col-span-1 w-full">
              <label htmlFor="name" className="block pl-2 text-xl mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-4 bg-[#D0C8C0] rounded-xl"
                required
              />
            </div>
          </div>
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
          <div id="terms-wrapper" className="flex flex-row gap-2 items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-5 w-5 accent-[#D0C8C0]"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="remember" className="text-xl">
              I accept the{" "}
              <span className="font-medium">Terms & Conditions</span>
            </label>
          </div>

          <button
            type="button" // Change to "submit" if you want to submit the form
            onClick={handleRegister}
            className="bg-[#6096BA] text-lightcreme w-full px-6 py-5 rounded-2xl font-semibold text-2xl mt-5 transform transition-transform hover:scale-105"
          >
            sign up
          </button>
          <p className="text-red-600 font-xl mt-2">{warning}</p>
        </form>
        <p className="mx-auto text-xl mt-8">OR SIGN UP WITH</p>
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
          Already signed up?{" "}
          <Link to="/login">
            <span className="font-semibold cursor-pointer">Click here</span>
          </Link>
        </p>
      </div>

      <div className="col-span-1 overflow-hidden relative">
        <div className="w-[140%] h-[140%] bg-[#D0C8C0] rounded-full  translate-x-[4%] translate-y-[-14%]" />
        <img
          src={process.env.PUBLIC_URL + "/register/registerwoman.png"}
          alt="register-woman"
          className="absolute top-32 left-52 w-[50%] object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
