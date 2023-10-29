import React from "react";
import { Outlet } from "react-router-dom";
import NavLinks from "../nav/navLinks";

const Layout = ({ tabs }) => {
  return(
    <>
      <header>
        <NavLinks tabs={tabs}/>
      </header>
       <main className="container">
        <Outlet/>
      </main>
      <footer></footer>
    </>
  )
}

export default Layout;

