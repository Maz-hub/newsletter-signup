import { useState } from "react";

import mobileIllustration from "../assets/images/illustration-sign-up-mobile.svg";
import desktopIllustration from "../assets/images/illustration-sign-up-desktop.svg";
import icon from "../assets/images/icon-list.svg";

const NewsletterCard = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (email.includes("@") && email.includes(".")) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }

  return (
    <div className="wrapper">
      <div className="card">
        <div className="w-full lg:w-1/2">
          {/* Mobile image */}
          <img
            src={mobileIllustration}
            alt="Newsletter illustration"
            className="block lg:hidden image"
          />

          {/* Desktop image */}
          <img
            src={desktopIllustration}
            alt="Newsletter illustration"
            className="hidden lg:block image"
          />
        </div>

        <div className="mt-10 mx-6 lg:mt-0 lg:w-1/2 lg:pl-1">
          <h1 className="text-preset-1">Stay updated!</h1>
          <div className="my-4">
            <p className="text-preset-regular">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
          </div>
          <div className="mb-10">
            <div className="flex items-start">
              <img src={icon} alt="" className="mr-4 mb-2" />
              <p className="text-preset-regular">
                Product discovery and building what matters
              </p>
            </div>

            <div className="flex items-start">
              <img src={icon} alt="" className="mr-4 mb-2" />
              <p className="text-preset-regular">
                Measuring to ensure updates are a success
              </p>
            </div>

            <div className="flex items-start">
              <img src={icon} alt="" className="mr-4" />
              <p className="text-preset-regular">And much more!</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <p className="text-preset-3 mb-2">Email address</p>
              <p className={`error-message ${!isError && "hidden"}`}>
                Valid email required
              </p>
            </div>

            <input
              type="email"
              value={email}
              onChange={handleEmail}
              id="email"
              placeholder="email@company.com"
              className={`email-input ${isError ? "input-error" : ""}`}
            />
            <button onClick={handleSubmit} className="button mb-6">
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCard;
