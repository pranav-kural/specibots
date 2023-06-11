"use client";

import { useState } from "react";

export default function BookingForm() {
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  async function handleSubmit() {
    setBookingSubmitted(true);
    console.log("BookingForm.js handleSubmit()");
  }

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      {!bookingSubmitted ? ( // if bookingSubmitted is true}
        <form>
          <select
            name="category-select"
            id="category-select"
            className="form-select mb-3"
            aria-label="Select category"
          >
            <option value="default" defaultValue={true}>
              Select a category
            </option>
            <option value="Accounting">Accounting</option>
            <option value="health">Health</option>
            <option value="IT">IT</option>
            <option value="legal">Legal</option>
            <option value="Marketing">Marketing</option>
            <option value="Research">Research</option>
            <option value="Software">Software</option>
            <option value="Skin Care">Skin Care</option>
          </select>
          <select
            name="subcategory-select"
            id="subcategory-select"
            className="form-select mb-3"
            aria-label="Select a subcategory"
          >
            <option value="default" defaultValue={true}>
              Select a subcategory
            </option>
            <option value="subcategory-1">Subcategory 1</option>
            <option value="subcategory-2">Subcategory 2</option>
            <option value="subcategory-3">Subcategory 3</option>
            <option value="subcategory-4">Subcategory 4</option>
          </select>

          <input type="date" className="form-control mb-3" />

          <div className="w-100 d-flex justify-content-between align-items-center">
            <input type="time" className="form-control me-3" />
            <input type="time" className="form-control" />
          </div>

          <div className="w-100 d-flex justify-content-between align-items-center">
            <button
              id="booking-btn"
              onClick={() => setBookingSubmitted(true)}
              className="btn btn-primary mt-3"
            >
              Book
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
      ) : (
        // else
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
          <h1 className="fs-2 border-l mb-4">Congratulations! 🎉</h1>
          <p>
            Your session has been booked.Details for accessing the session has
            been sent to your email.
          </p>
        </div>
      )}
    </div>
  );
}
