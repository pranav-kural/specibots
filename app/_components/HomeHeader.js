import { Raleway } from "next/font/google";
import RobotPic from "./RobotPic";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600"],
});

export default function HomeHeader() {
  return (
    <div id="home-header-container" className="container-fluid mt-3">
      <div className="row align-items-center">
        <div
          id="home-header"
          className={`col align-self-start ${raleway.className}`}
        >
          Specialized Bots <br /> For Most Accurate Results
        </div>
        <div className="col align-self-end text-right d-flex justify-content-end">
          <div className="robot-pic-container">
            <RobotPic />
          </div>
        </div>
      </div>
    </div>
  );
}
