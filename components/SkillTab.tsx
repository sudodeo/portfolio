import React from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import styles from "../styles/Skills.module.css";
import db from "../db";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";

const SkillTab = () => {
  return (
    <div
      className={`flex items-stretch justify-center flex-wrap gap-[60px] pt-20 ${styles.skill_tab}`}
      data-aos="zoom-out"
    >
      <article className={styles.box}>
        <div className={styles.content}>
          <div className={styles.skill_icon}>
            <CodeOutlinedIcon fontSize="large" />
          </div>
          <div className={styles.skill_text}>
            <h3>{db.skills[0].title}</h3>
            <p>{db.skills[0].description}</p>
          </div>
        </div>
      </article>

      <article className={styles.box}>
        <div className={styles.content}>
          <div className={styles.skill_icon}>
            <SmartToyOutlinedIcon fontSize="large" />
          </div>
          <div className={styles.skill_text}>
            <h3>{db.skills[1].title}</h3>
            <p>{db.skills[1].description}</p>
          </div>
        </div>
      </article>

      <article className={styles.box}>
        <div className={styles.content}>
          <div className={styles.skill_icon}>
            <PrecisionManufacturingOutlinedIcon fontSize="large" />
          </div>
          <div className={styles.skill_text}>
            <h3>{db.skills[2].title}</h3>
            <p>{db.skills[2].description}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SkillTab;
