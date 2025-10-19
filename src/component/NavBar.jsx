import React from 'react'
import { NavLink } from 'react-router'
import user from '../assets/user.png'

const NavBar = () => {
  return (
    <div className='flex mt-6 justify-between'>
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
      </div>
      <div className="loginbtn flex gap-5">
        <img src={user} alt="aslj" />
        <button className='btn btn-primary px-10 '>Login</button>
      </div>
    </div>
  )
}

export default NavBar