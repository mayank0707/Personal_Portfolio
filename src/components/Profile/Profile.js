import { Fragment } from "react";
import classes from "./Profile.module.css";
import Html from "../Images/html.png";
import css3 from "../Images/css3.png";
import Js from "../Images/javascript.png";
import Waving from "../Images/waving.png";
import react from "../Images/react.png"

const Profile = () => {
  const skills = [
    {
      img: Html,
      title: "HTML5",
    },
    {
      img: css3,
      title: "CSS3",
    },
    {
      img: Js,
      title: "Java Script",
    },
    {
      img: react,
      title: "React"
    }
  ];
  return (
    <Fragment>
      <section id="home" className={classes.home}>
        <div className={classes.container}>
          <div className={classes["left-content"]}>
            <div className={classes["hero-text"]}>
              <h1>Front-End React Developer</h1>
              <img src={Waving} alt="waving_hand" />
              <p>
                Hi, I'm Mayank Gupta.
                <div>
                  A passionate Front-end React Developer based in New Delhi,
                  India. 📍
                </div>
              </p>
              <span>
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/mayank-gupta-01a813190/"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/mayank0707"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </span>
            </div>
            <div className={classes.skills}>
              <p>Tech Stack</p>
              <div className={classes.logos}>
                <ul>
                  {skills.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={`${classes["right-content"]} ${classes["image"]}`}>
            <div className={classes.image}></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Profile;
