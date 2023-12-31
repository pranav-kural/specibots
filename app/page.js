import HomeHeader from "./_components/HomeHeader";
import HomeMain from "./_components/HomeMain";
import NavBar from "./_components/NavBar";

export default function Home() {
  return (
    <div className="container-fluid mb-5">
      <NavBar />
      <HomeHeader />
      <HomeMain />
    </div>
  );
}
