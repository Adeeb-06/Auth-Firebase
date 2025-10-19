import React from 'react'
import { Outlet } from 'react-router'
import Header from '../component/Header.jsx'

const Root = () => {
  return (
    <>
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <section className='left_nav'>

        </section>
        <section className="main">
          
          <Outlet />
        </section>
        <section className='right_nav'>

        </section>
      </main>
    </div>
    </>
  )
}

export default Root