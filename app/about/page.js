import RobotPic from "../_components/RobotPic";
import NavBar from "../_components/NavBar";
import { Baumans } from "next/font/google";
import HowItWorks from "../_components/HowItWorks";

const baumans = Baumans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-baumans",
});

export default function About() {
  return (
    <div className="container-fluid">
      <NavBar />
      <div className="row">
        <div className="col d-flex flex-column align-items-start pl-32">
          <span
            id="about-logo-container"
            className={`fs-1 ${baumans.className}`}
          >
            SpeciBots
          </span>
          <span>
            <b>Located at:</b> #1, Pristine Dr, Luxe, ON Canada V6TE4H
          </span>
          <span>
            <b>Contact:</b> 123-567-7890 | <b>Business Hours:</b> Mon-Fri 8 AM -
            5 PM
          </span>
          <span>
            <b>Off-hours support:</b> msg@specibots.com
          </span>
          <span className="my-3 fs-5">
            Providing specialized chatbots which have been specially trained and
            fine-tuned to provide most accurate results for conversations that
            relate to a specific topic.
          </span>
          <span className="my-2 fs-5">
            Get more actionable and insightful responses <b>faster</b> without
            compromising speed or accuracy.
          </span>
          <span
            className="my-3 fs-4 text-decoration-underline"
            style={{ color: "#0143CB" }}
          >
            <a href="/">
              <b>Try it now</b>
            </a>
          </span>
          <span className="my-3 fs-6">
            To learn more check <HowItWorks />
          </span>
          <span className="my-3 fs-6">
            <b>Important:</b> We take data privacy very seriously. Rest assured
            your data including any chat sessions are not stored or shared with
            anyone.
          </span>
        </div>
        <div className="col d-flex justify-content-end align-items-center">
          <div className="robot-pic-container">
            <RobotPic />
          </div>
        </div>
      </div>
    </div>
  );
}
