import "./hero.css";
import Lottie from "lottie-react";
import coderAnimation from "../../animation/coder.json";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 7, type: "spring", stiffness: 100 }}
            src="/images/main/me.png"
            className="avatar"
            alt="avatar"
          />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          Hi. I’m Tayseer.
          <br /> A Web Developer.
        </h1>
        <p className="sub-title">
          I’m Tayseer, Aspiring Web Developer with a solid foundation in HTML,
          CSS, JavaScript, React.js, and Bootstrap. Passionate about creating
          responsive, user-friendly websites and dedicated to continuous
          learning and improvement. Strong problem-solving skills and a keen eye
          for detail, with a commitment to delivering high-quality web
          solutions.
        </p>

        <div className="all-icons flex">
          <div className="icon icon-x"></div>
          <a
          target="_blank"
            href="https://www.instagram.com/tayseer_alrahhal?igsh=MWg4NWU3dmM2bW1mOQ=="
            className="icon icon-instagram"
          ></a>
          <a
          target="_blank"
            href="https://github.com/tayseer2"
            className="icon icon-github"
          ></a>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.6);
          }}
          className="contact-animation"
          animationData={coderAnimation}
        />
      </div>
    </section>
  );
}
