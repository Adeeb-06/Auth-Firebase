import React from 'react'
import { Outlet } from 'react-router'
import Header from '../component/Header.jsx'
import LatestNews from '../component/LatestNews.jsx'
import NavBar from '../component/NavBar.jsx'
import RightAside from '../component/homeLayout/RightAside.jsx'
import LeftAside from '../component/homeLayout/LeftAside.jsx'

const Root = () => {
  return (
    <>
    <div>
      <header>
        <Header/>
      </header>
      <section className='w-11/12 mx-auto my-3'>
        <LatestNews/>
      </section>
      <nav className='w-11/12 mx-auto my-3'>
        <NavBar/>
      </nav>
      <main className='w-11/12 mx-auto my-5   grid grid-cols-12  '>
       <aside className='col-span-3'>
        <LeftAside/>
       </aside>
        <section  className="main col-span-6 ">
          <Outlet />
        </section>
        <aside className='col-span-3'>
          <RightAside/>
        </aside>
      </main>
    </div>
    </>
  )
}

export default Root