import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default HomeLayout;
