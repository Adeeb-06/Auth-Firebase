import React from 'react'
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'

const Login = () => {
  const {register, handleSubmit ,setError, formState: { errors }} = useForm()

const onsubmit = (data) => {
  // console.log(data)
  const {email, password} = data
  console.log(email, password)
}


  return (
<div>
     <div className="pt-20 flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-300 shadow-xl p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold text-[--color-primary] text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
          <div>
            <label className="block text-[--color-primary] mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register('email' , {required: {value: true, message: 'Email is required'}})}
              className="input input-bordered w-full border-color-accent focus:outline-none focus:border-secondary"
            />
          </div>
          {errors.email && <p className="text-sm text-center text-color-accent mt-4">
            {errors.email.message}
          </p>}

          <div>
            <label className="block text-primary mb-2">Password</label>
            <input
              type="password"
              {...register('password' , {required: {value: true, message: 'Password is required'}})}
              placeholder="Enter your password"
              className="input input-bordered w-full border-accent focus:outline-none focus:border-secondary"
            />
          </div>
          {errors.password && <p className="text-sm text-center text-color-accent mt-4">
            {errors.password.message}
          </p>}

          <button
            type="submit"
            className="btn w-full bg-secondary text-white border-none hover:bg-[#b01b42]"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-color-accent mt-4">
          Don’t have an account?{" "}
          <Link to={'/auth/signup'} className="text-secondary font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
</div>
  )
}

export default Login