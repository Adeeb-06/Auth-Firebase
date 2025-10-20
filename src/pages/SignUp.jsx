import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";

const Signup = () => {
  const { createUser, setUser , user } = useContext(AuthContext);
  const [globalError, setGlobalError] = useState(""); 

  console.log(user)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    setGlobalError(""); // clear previous error first
    const { name, email, password, imageUrl } = data;

    createUser(email, password)
      .then((user) => {
        console.log(user);
        setGlobalError(""); // clear error if successful
        setUser(user);
        reset(); 
      })
      .catch((error) => {
        console.log(error.message);
        setGlobalError(error.message); // set error directly here
      });
  };

  return (
    <div>
      <div className="pt-20 flex items-center justify-center bg-base-200">
        <div className="card w-[26rem] bg-base-300 shadow-xl p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold text-primary text-center mb-6">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-primary mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                })}
                className="input input-bordered w-full border-accent focus:outline-none focus:border-secondary"
              />
            </div>
            {errors.name && (
              <p className="text-sm text-center text-accent mt-4">
                {errors.name.message}
              </p>
            )}

            {/* Email */}
            <div>
              <label className="block text-primary mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                })}
                className="input input-bordered w-full border-accent focus:outline-none focus:border-secondary"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-center text-accent mt-4">
                {errors.email.message}
              </p>
            )}

            {/* Image URL */}
            <div>
              <label className="block text-primary mb-2">
                Profile Image Link
              </label>
              <input
                type="text"
                placeholder="Paste image URL"
                {...register("imageUrl", {
                  required: { value: true, message: "Image URL is required" },
                })}
                className="input input-bordered w-full border-accent focus:outline-none focus:border-secondary"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-primary mb-2">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                })}
                className="input input-bordered w-full border-accent focus:outline-none focus:border-secondary"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn w-full bg-secondary text-white border-none hover:bg-[#b01b42]"
            >
              Create Account
            </button>
          </form>

          {/* 🔥 Global error (works now) */}
          {globalError && (
            <p className="text-sm text-center text-red-500 mt-4">
              {globalError}
            </p>
          )}

          <p className="text-sm text-center text-accent mt-4">
            Already have an account?{" "}
            <Link to={"/auth/login"} className="text-secondary font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
