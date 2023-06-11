// Purpose: Sign In Page Component
import HomeHeader from "../_components/HomeHeader";
import NavBar from "../_components/NavBar";
import SignInForm from "../_components/SignInForm";

export default function SignIn() {
  return (
    <div className="container-fluid">
      <NavBar />
      <HomeHeader />
      <div
        id="home-main-form-container"
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
      >
        <SignInForm />
      </div>
    </div>
  );
}
