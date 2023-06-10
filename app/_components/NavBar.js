import { Baumans } from "next/font/google";

const baumans = Baumans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-baumans",
});

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className={`navbar-brand logo ${baumans.className}`} href="#">
          SpeciBots
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
            <a
              className="nav-link disabled"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Disabled
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
