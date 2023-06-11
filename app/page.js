"use client";

import { useEffect } from "react";

import HomeHeader from "./_components/HomeHeader";
import HomeMain from "./_components/HomeMain";
import NavBar from "./_components/NavBar";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <div className="container-fluid">
      <NavBar />
      <HomeHeader />
      <HomeMain />
    </div>
  );
}
