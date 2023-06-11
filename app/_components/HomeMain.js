import BookingForm from "./BookingForm";

export default function HomeMain() {
  return (
    <div className="container-sm d-flex flex-column justify-content-start align-items-center">
      <div className="row"></div>
      <p className="text-decoration-underline mb-3">How it works?</p>
      <p className="fs-4 fw-bolder text-uppercase mb-3">Get Started</p>
      <div
        id="home-main-form-container"
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
      >
        <BookingForm />
      </div>
    </div>
  );
}
