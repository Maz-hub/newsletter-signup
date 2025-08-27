import mobileIllustration from "../assets/images/illustration-sign-up-mobile.svg";

const NewsletterCard = () => {
  return (
    <div
      className="
        bg-white 
        flex flex-col 
        w-full 
        max-w-[400px] 
        mx-auto 
        mt-[--spacing-600] 
      "
    >
      <div>
        <img
          src={mobileIllustration}
          alt="Newsletter illustration"
          className="w-full rounded-b-2xl"
        />
      </div>

      <div className="mt-10 mx-6">
        <h1
          className=" text-[--text-preset-1-mobile] leading-[--leading-preset-1-mobile tracking-[--tracking-preset-1-mobile] [font-weight:var(--font-weight-preset-1-mobile)] text-center text-[--color-blue-800]
  "
        >
          Stay updated!
        </h1>
      </div>
    </div>
  );
};

export default NewsletterCard;
