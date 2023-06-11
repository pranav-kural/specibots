"use client";

import React, { useState } from "react";

export default function BookingForm() {
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  async function handleSubmit() {
    setBookingSubmitted(true);
  }

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      {!bookingSubmitted ? ( // if bookingSubmitted is true}
        <form action={handleSubmit}>
          <div className="d-flex flex-column me-3">
            <label htmlFor="category-select" className="form-label">
              Category
            </label>
            <select
              name="category-select"
              id="category-select"
              className="form-select mb-3"
              aria-label="Select category"
              required
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
          </div>

          <div className="d-flex flex-column me-3">
            <label htmlFor="subcategory-select" className="form-label">
              Subcategory
            </label>
            <select
              name="subcategory-select"
              id="subcategory-select"
              className="form-select mb-3"
              aria-label="Select a subcategory"
              required
            >
              <option value="default" defaultValue={true}>
                Select a subcategory
              </option>
              <option value="subcategory-1">Subcategory 1</option>
              <option value="subcategory-2">Subcategory 2</option>
              <option value="subcategory-3">Subcategory 3</option>
              <option value="subcategory-4">Subcategory 4</option>
            </select>
          </div>

          <div className="d-flex flex-column me-3">
            <label htmlFor="booking-date" className="form-label">
              Booking Date
            </label>
            <input
              id="booking-date"
              type="date"
              className="form-control mb-3"
              required
            />
          </div>

          <div className="w-100 d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column me-3">
              <label htmlFor="from-time" className="form-label">
                From
              </label>
              <input
                id="from-time"
                type="time"
                className="form-control"
                required
              />
            </div>

            <div className="d-flex flex-column">
              <label htmlFor="to-time" className="form-label">
                To
              </label>
              <input
                id="to-time"
                type="time"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="mt-3 w-100 d-flex flex-column justify-content-center align-items-start">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="enter email address here"
              required
            />
          </div>

          <div className="w-100 d-flex justify-content-between align-items-center">
            <button
              id="booking-btn"
              type="submit"
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
          <div className="mt-3 w-100 d-flex justify-content-center align-items-center">
            <span className="text-muted">flat rate $1 per minute</span>
          </div>
        </form>
      ) : (
        // else
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
          <h1 className="fs-2 border-l mb-4">Congratulations! 🎉</h1>
          <p>
            Your session has been booked. Details for accessing the session has
            been sent to your email.
          </p>
        </div>
      )}
    </div>
  );
}
