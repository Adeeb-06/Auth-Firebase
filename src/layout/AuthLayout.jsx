import React from "react";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 h-screen">
      <header className="w-11/12 bg-base-200 mx-auto py-4">
        <NavBar />
      </header>
      <main className="w-11/12 mx-auto py-5  ">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
