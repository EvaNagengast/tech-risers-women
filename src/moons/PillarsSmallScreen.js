import React, { useState } from "react";
import styles from "./pillarsSmallScreen.module.css";
import pillar1Image from "../media/communityDriven.png";
import pillar2Image from "../media/practicalSkills.png";
import pillar3Image from "../media/professionalGrowth.png";
import { SlArrowDown } from "react-icons/sl";

function Pillars() {
  const [info, setInfo] = useState(styles.pillarClosed);
  const [info2, setInfo2] = useState(styles.pillar2Closed);
  const [info3, setInfo3] = useState(styles.pillar3Closed);
  const [arrow, setArrow] = useState(styles.arrowClosed);
  const [arrow2, setArrow2] = useState(styles.arrowClosed);
  const [arrow3, setArrow3] = useState(styles.arrowClosed);

  const handleClick = () => {
    const newPosition =
      info === styles.pillarClosed ? styles.pillarOpen : styles.pillarClosed;
    setInfo(newPosition);

    const newArrow =
      arrow === styles.arrowClosed ? styles.arrowOpen : styles.arrowClosed;
    setArrow(newArrow);
  };

  const handleClick2 = () => {
    const newPosition2 =
      info2 === styles.pillar2Closed
        ? styles.pillar2Open
        : styles.pillar2Closed;
    setInfo2(newPosition2);

    const newArrow2 =
      arrow2 === styles.arrow2Closed ? styles.arrow2Open : styles.arrow2Closed;
    setArrow2(newArrow2);
  };

  const handleClick3 = () => {
    const newPosition3 =
      info3 === styles.pillar3Closed
        ? styles.pillar3Open
        : styles.pillar3Closed;
    setInfo3(newPosition3);

    const newArrow3 =
      arrow3 === styles.arrow3Closed ? styles.arrow3Open : styles.arrow3Closed;
    setArrow3(newArrow3);
  };

  return (
    <div className={styles.pillars}>
      {/* Pillar 1 */}
      <div className={styles.pillar1} onClick={handleClick}>
        <img src={pillar1Image} alt="" className={styles.pillarImage} />
        <div className={`${styles.arrowClosed} ${arrow}`}>
          <SlArrowDown />
        </div>
      </div>{" "}
      <div className={`${styles.pillarClosed} ${info}`} onClick={handleClick}>
        Tech Risers Women emphasizes the creation of a supportive and
        collaborative community amongst women in tech. We want to build
        connections, share experiences, insights, and opportunities, ultimately
        to gain confidence, feel heard, and thrive with a sense of belonging
      </div>
      {/* Pillar 2 */}
      <div className={styles.pillar2} onClick={handleClick2}>
        <img src={pillar2Image} alt="" className={styles.pillarImage} />
        <div className={`${styles.arrow2Closed} ${arrow2}`}>
          <SlArrowDown />
        </div>
      </div>{" "}
      <div className={`${styles.pillar2Closed} ${info2}`} onClick={handleClick2}>
        The focus here is on providing tangible, hands-on skills that are
        directly applicable in the tech field. Workshops, training sessions, and
        collaborative projects are designed to equip women with the practical
        knowledge needed to navigate the challenges of the industry. The goal is
        to ensure that participants not only gain theoretical knowledge but also
        develop the skills necessary for real-world scenarios, and to raise
        confidence and competence in their roles.
      </div>
      {/* Pillar 3 */}
      <div className={styles.pillar3} onClick={handleClick3}>
        <img src={pillar3Image} alt="" className={styles.pillarImage} />
        <div className={`${styles.arrow3Closed} ${arrow3}`}>
          <SlArrowDown />
        </div>
      </div>{" "}
      <div className={`${styles.pillar3Closed} ${info3}`} onClick={handleClick3}>
        We want to create an environment that supports continuous learning and
        mentorship to foster the professional development of women in tech. This
        involves providing resources, guidance, and opportunities to grow
        professionaly. By emphasizing professional and personal growth, the
        initiative aims to empower women to achieve their goals, whether it be
        through skill-building, networking, or mentorship programs, ultimately
        contributing to their success in the tech sector.
      </div>
    </div>
  );
}

export default Pillars;
