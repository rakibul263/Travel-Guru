import React, { useState } from "react";
import bgImage from "../assets/Rectangle 1.png";
import Navbar from "../components/Navbar";
import RightBanner from "../components/RightBanner";
import { Outlet } from "react-router";

const Home = () => {
  const [rightAside, setRightAside] = useState(null);
  return (
    <div
      className="relative min-h-screen bg-cover bg-center "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-82">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="grid grid-cols-12 items-center place-items-center h-[100vh] w-8/12  gap-15 mx-auto">
          <section className="col-span-5">
            <Outlet context={setRightAside} />
          </section>
          <section className="col-span-7">
            {rightAside || <RightBanner />}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
