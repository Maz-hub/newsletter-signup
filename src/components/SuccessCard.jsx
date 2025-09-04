import icon from "../assets/images/icon-list.svg";

const SuccessCard = () => {
  return (
    <div className="wrapper-mobile">
      <div className="card-success">
        <div className=" items-start">
          <img
            src={icon}
            alt="Success checkmark"
            className="w-16 h-16 shrink-0"
          />

          <h1 className="text-preset-1 md:text-preset-1-success my-8">
            Thanks for subscribing!
          </h1>

          <p className="text-preset-regular mb-8 lg:text-left">
            A confirmation email has been sent to{" "}
            <strong>ash@loremcompany.com</strong>. Please open it and click the
            button inside to confirm your subscription.
          </p>

          <button className="button">Dismiss message</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
