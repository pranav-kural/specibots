import { Baumans } from "next/font/google";

const baumans = Baumans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-baumans",
});

export default function NavBar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className={`navbar-brand logo ${baumans.className}`} href="#">
            SpeciBots
          </a>
          <div className="navbar-expand-sm">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="about">
                About
              </a>
              <a className="nav-link" href="sign-in">
                Sign-in
              </a>
              <a className="nav-link border border-rounded" href="sign-up">
                Sign-up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
