"use client";
import { useEffect } from "react";

import Image from "next/image";
import { Baumans } from "next/font/google";

const baumans = Baumans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-baumans",
});

export default function HowItWorks() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <div>
      <a href="#" data-bs-toggle="modal" data-bs-target="#how-it-works-modal">
        <span className="fs-6 text-decoration-underline">How it works?</span>
      </a>
      <div
        className="modal fade"
        id="how-it-works-modal"
        tabIndex="-1"
        aria-labelledby="howItWorksModalLabel"
        aria-hidden="true"
      >
        <div
          id="how-it-works-modal-dialog"
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        >
          <div className="modal-content">
            <div className="modal-header align-items-center">
              <h5 className="modal-title" id="howItWorksModalLabel">
                <span className="fs-4">How it works?</span>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                X
              </button>
            </div>
            <div className="modal-body">
              <div className="row mb-5">
                <div className="col-sm-12 col-md-8">
                  <p>
                    <span className={baumans.className}>SpeciBots</span>{" "}
                    provides the ability to book chat sessions with specialized
                    bots which have been fine-tuned or specially trained using
                    transfer learning on specific topics.
                  </p>
                </div>
                <div className="col-sm-12 col-md-4">
                  <Image
                    src="/images/productive.png"
                    width={200}
                    height={200}
                    alt="config"
                  />
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-sm-12 col-md-4">
                  <Image
                    src="/images/chatbot.png"
                    width={200}
                    height={200}
                    alt="config"
                  />
                </div>
                <div className="col-sm-12 col-md-8">
                  <p>
                    These <b>content-aware bots</b> are highly capable of
                    providing extremely accurate and strategic responses for
                    queries which may be too complex for a generic chatbot that
                    has been trained on an overload of data.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-8">
                  <p>
                    To get started, all you have to do is select a category
                    based on what kind of chatbot you need to converse with.
                    Then select a <b>specialized bot</b> that best suits your
                    needs. All thats left to do is to book a chat session, and
                    you’re all set! 🎉
                  </p>
                </div>
                <div className="col-sm-12 col-md-4">
                  <Image
                    src="/images/tick.png"
                    width={200}
                    height={200}
                    alt="config"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
