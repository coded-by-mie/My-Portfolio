import React from 'react'

import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";
import projects from "../../data/projects.json";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        <ul className={styles.projects}>
          {projects.map((projectsItem, id) => {
            return (
              <li key={id} className={styles.projectsItem}>
                <img
                  src={getImageUrl(projectsItem.imageSrc)}
                  alt={`${projectsItem.skills} Logo`}
                />
                <div className={styles.projectsItemDetails}>
                  <h3>{`${projectsItem.description}, ${projectsItem.skills}`}</h3>
                  <ul>
                    {projectsItem.projects.map((projects, id) => {
                      return <li key={id}>{projects}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  )
}
