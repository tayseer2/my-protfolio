import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactUsAnimation from "../../animation/contact-us.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("mnnapdrv");
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">

          <form action="" onSubmit={handleSubmit}>
            <div className="flex">
              <label htmlFor="email">Email Address:</label>
              <input
                autoComplete="off"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="flex" style={{ marginTop: "24px" }}>
              <label htmlFor="message">Your Massage:</label>
              <textarea
                required
                name="message"
                id="message"
                placeholder="Message"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              className="submit"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? "Submitting...." : "Submit"}
            </button>

            {state.succeeded && (
              <p
                style={{ fontSize: "18px", marginTop: "1.7rem" }}
                className="flex message"
              >
                <Lottie
                  loop={false}
                  style={{ height: "70px" }}
                  animationData={doneAnimation}
                />
                Your message has been sent successfully !
              </p>
            )}
          </form>

          <div className="animation ">
            <Lottie
              className="contact-animation"
              animationData={contactUsAnimation}
            />
          </div>

      </div>
    </section>
  );
}
