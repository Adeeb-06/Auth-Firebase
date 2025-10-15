import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../component/NavBar/NavBar'

const Root = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default Root