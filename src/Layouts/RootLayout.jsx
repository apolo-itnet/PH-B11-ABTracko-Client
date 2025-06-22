import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-gray-100">
      <section className="res-padding">
        <Navbar />
      </section>
      <section className="flex-grow">
        <Outlet />
      </section>
      <section className="bottom-0 z-50 res-padding">
        <Footer />
      </section>
    </div>
  );
};

export default RootLayout;
