import React from 'react'

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about"> 
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.png")} 
                alt=""
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/pcSystemIcon.png")} 
                        alt="Desktop Application"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Desktop Sytem Developer</h3>
                        <p>
                            Etiam non justo efficitur, tincidunt sem vel, tincidunt dolor. 
                            Mauris sed ipsum porttitor, semper arcu eu, ultrices elit.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/dbIcon.png")} 
                        alt="Database Admin"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Database Designer</h3>
                        <p>
                            Proin blandit vulputate tincidunt. In convallis dapibus pretium. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
