import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <section className="sticky top-0 z-50">
        <Navbar />
      </section>
      <section className="flex-grow">
        <Outlet />
      </section>
      <section className="sticky bottom-0 z-50">
        <Footer />
      </section>
    </div>
  );
};

export default RootLayout;
