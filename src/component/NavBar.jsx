import React from 'react'
import { NavLink } from 'react-router'
import user from '../assets/user.png'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div className='flex mt-6 justify-between'>
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/career'}>Career</Link>
      </div>
      <div className="loginbtn flex gap-5">
        <img src={user} alt="aslj" />
        <Link to={'/auth/login'}><button className='btn btn-primary px-10 '>Login</button></Link>
      </div>
    </div>
  )
}

export default NavBar