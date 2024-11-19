import React from 'react'
import styles from "./Developer.module.css";
import { getImageUrl } from '../../utils'

export const Developer = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}> 
                <h1 className={styles.title}>
                    Hi, I'm Kubo
                </h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer in mattis enim. In a dignissim nisi. 
                    Sed sit amet dolor lectus. Lorem ipsum dolor sit amet, 
                    onsectetur adipiscing elit. Maecenas gravida tincidunt orci, 
                    a accumsan velit efficitur vel. Nunc nec interdum urna. 
                    Praesent dictum efficitur aliquet. 
                </p>
                <a href="email.gmail.com" className={styles.contactBtn}>Contact Mie</a>
            </div>
            <img src={getImageUrl("developer/developerImage.png")} alt="Developer" className={styles.developerImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}
