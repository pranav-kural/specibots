import HomeHeader from "./_components/HomeHeader";
import HomeMain from "./_components/HomeMain";
import NavBar from "./_components/NavBar";

export default function Home() {
  return (
    <div className="container-fluid">
      <NavBar />
      <HomeHeader />
      <HomeMain />
    </div>
  );
}
