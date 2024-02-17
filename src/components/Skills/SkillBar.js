import React from "react";
import classes from "./SkillBar.module.css";

const SkillBar = (props) => {
  const percentage = 100;
  return (
    <React.Fragment>
      {props.skills.map((skill) => {
        return (
          <div key = {skill.id} className={classes["skill-bar"]}>
            <div className={classes.info}>
              <p>{skill.name}</p>
              <p className={classes.percent}>{skill.percentage}%</p>
            </div>
            <div className={classes.bar}>
              <span style={{ width: skill.percentage + "%" }}></span>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default SkillBar;
