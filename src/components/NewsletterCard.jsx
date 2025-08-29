import mobileIllustration from "../assets/images/illustration-sign-up-mobile.svg";
import icon from "../assets/images/icon-list.svg";

const NewsletterCard = () => {
  return (
    <div className="card">
      <div>
        <img
          src={mobileIllustration}
          alt="Newsletter illustration"
          className="w-full rounded-b-2xl"
        />
      </div>

      <div className="mt-10 mx-6">
        <h1 className="text-preset-mobile">Stay updated!</h1>
        <div className="my-4">
          <p className="text-regular">
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
            <p>Measuring to ensure updates are a success</p>
          </div>

          <div className="flex items-start">
            <img src={icon} alt="" className="mr-4" />
            <p>And much more!</p>
          </div>
        </div>

        <div>
          <p className="text-preset-3">Email address</p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCard;
