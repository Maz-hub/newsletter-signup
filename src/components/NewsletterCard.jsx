import mobileIllustration from "../assets/images/illustration-sign-up-mobile.svg";

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
        <h1 className="heading-primary-mobile">Stay updated!</h1>
      </div>
    </div>
  );
};

export default NewsletterCard;
