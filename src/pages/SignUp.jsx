import React from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'

const Signup = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  const onsubmit = (data) => {
    const { name, email, password, imageUrl } = data;
    console.log(name, email, password, imageUrl);
  };


  return (
    <div>
      <div className="pt-20 flex items-center justify-center bg-base-200">
        <div className="card w-[26rem] bg-base-300 shadow-xl p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold text-primary text-center mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
            <div>
              <label className="block text-primary mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", {required:{value: true, message: 'Name is required'}})}
                className="input input-bordered w-full border-accent focus:outline-none focus:border-secondary"
              />
            </div>
            {errors.name && <p className="text-sm text-center text-accent mt-4">
              {errors.name.message}
            </p>}

            <div>
              <label className="block text-primary mb-2">Email</label>
              <input
                type="email"
                {...register("email", {required:{value: true, message: 'Email is required'}})}
                placeholder="Enter your email"
                className="input input-bordered w-full border-accent focus:outline-none focus:border-secondary"
              />
            </div>
            {errors.email && <p className="text-sm text-center text-accent mt-4">
              {errors.email.message}
            </p>}

            <div>
              <label className="block text-primary mb-2">Profile Image Link</label>
              <input
                type="text"
                placeholder="Paste image URL"
                {...register("imageUrl", {required:{value: true, message: 'Image URL is required'}})}
                className="input input-bordered w-full border-accent focus:outline-none focus:border-secondary"
              />
            </div>

            <div>
              <label className="block text-primary mb-2">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                {...register("password", {required:{value: true, message: 'Password is required'}})}
                className="input input-bordered w-full border-accent focus:outline-none focus:border-secondary"
              />
            </div>

            <button
              type="submit"
              className="btn w-full bg-secondary text-white border-none hover:bg-[#b01b42]"
            >
              Create Account
            </button>
          </form>

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
