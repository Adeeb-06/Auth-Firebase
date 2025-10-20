import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import ph from '../assets/user.png'
import { Link } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'

const NavBar = () => {
  const {user , logOut} = useContext(AuthContext)
  return (
    <div className='flex mt-6 justify-between'>
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/career'}>Career</Link>
      </div>
      <div className="loginbtn flex gap-5">
        <img src={ph} alt="aslj" />
        <Link onClick={() => logOut()} to={'/auth/login'}><button className='btn btn-primary px-10 '>{
          user ? 'Logout' : 'Login'
          }</button></Link>
      </div>
    </div>
  )
}

export default NavBar