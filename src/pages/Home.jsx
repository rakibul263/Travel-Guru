import React from "react";
import bgImage from "../assets/Rectangle 1.png";
import Navbar from "../components/Navbar";
import LeftBanner from "../components/LeftBanner";
import RightBanner from "../components/RightBanner";

const Home = () => {
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
        <main className="grid grid-cols-12 items-center place-items-center h-[100vh] w-8/12 mx-auto gap-15">
          <section className="col-span-5">
            <LeftBanner></LeftBanner>
          </section>
          <section className="col-span-7">
              <RightBanner></RightBanner>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
