// Purpose: Sign Up Page Component
import HomeHeader from "../_components/HomeHeader";
import NavBar from "../_components/NavBar";
import SignUpForm from "../_components/SignUpForm";

export default function SignIn() {
  return (
    <div className="container-fluid">
      <NavBar />
      <HomeHeader />
      <div
        id="home-main-form-container"
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
      >
        <SignUpForm />
      </div>
    </div>
  );
}
