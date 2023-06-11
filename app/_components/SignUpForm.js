export default function SignUpForm() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center fs-2 mb-3">Sign Up</h1>
      <form action="#" className="w-60">
        {/* Signin form */}
        <div className="form-group">
          <label for="exampleInputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="enter name here"
            required
          />
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="enter email address here"
            required
          />
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="enter password here"
            required
          />
        </div>

        <div className="w-100 d-flex justify-content-between align-items-center">
          <button
            id="booking-btn"
            type="submit"
            className="btn btn-primary mt-3"
          >
            Sign Up
          </button>
          <button
            id="reset-btn"
            type="reset"
            className="btn btn-secondary mt-3"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
