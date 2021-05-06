import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <div className="home">
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
