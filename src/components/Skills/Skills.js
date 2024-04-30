import SkillBar from "./SkillBar";
import classes from "./Skills.module.css";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "React.js",
      percentage: 80,
    },
    {
      id: 2,
      name: "Node.js",
      percentage: 70,
    },
    {
      id: 3,
      name: "Express.js",
      percentage: 60,
    },
    {
      id: 4,
      name: "Javascript",
      percentage: 75,
    },
    {
      id: 5,
      name: "HTML",
      percentage: 70,
    },
    {
      id: 6,
      name: "CSS",
      percentage: 45,
    },
    {
      id: 7,
      name: "Mongo DB",
      percentage: 70,
    },
    {
      id: 8,
      name: "MySQL",
      percentage: 85,
    },
    {
      id: 9,
      name: "SQL Server",
      percentage: 85,
    },
    {
      id: 10,
      name: "Java",
      percentage: 70,
    },
    {
      id: 11,
      name: "C#",
      percentage: 70,
    },
    {
      id: 12,
      name: ".Net Core",
      percentage: 65,
    }
  ];

  return (
    <section id="skills" className={classes["skills-section"]}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>My Skills</h1>
        </div>
        <h3>Here is my skills to represent my Expertise 🎯💪</h3>
        <div className={classes.skills}>
          <SkillBar skills={skills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
