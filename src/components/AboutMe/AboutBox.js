import classes from "./AboutBox.module.css";

const AboutBox = (props) => {
  return (
    <div className={classes.details}>
      {props.details.map((item) => {
        return (
          <div key={item.name} className={classes["detail-box"]}>
            <div className={classes.icon}>
              <img src={item.icon} alt="icon" />
            </div>
            <div className={classes.name}>{item.name}</div>
            <div className={classes.details}>{item.details}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutBox;
