import React from 'react';
import styles from './Resume.module.css';


const Resume = () => {
  return (
    <article className={styles.resume} data-page="resume">
      <header>
        <h2 className={styles.articleTitle}>Resume</h2>
      </header>
      
      <section className={styles.timeline}>
        <div className={styles.titleWrapper}>
          <div className={styles.iconBox}>
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className={styles.h3}>Education</h3>
        </div>
        
        <ol className={styles.timelineList}>
          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>CMI Public School Chalakudy</h4>
            <span>2009 - 2021</span>
            <p className={styles.timelineText}>
              Successfully completed my schooling at CMI Public School Chalakudy, achieving full A1 grades in both Class 10 and 12, and subsequently pursued higher education in Computer Science.
            </p>
          </li>

          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>Model Engineering College Thrikkakara</h4>
            <span>2021 — 2025</span>
            <p className={styles.timelineText}>
              I have completed my Bachelor of Technology degree in Computer Science with Honours in Machine Learning from Govt. Model Engineering College under Kerala Technical University, graduating in 2025.
            </p>
          </li>
        </ol>
      </section>      
      <section className={styles.timeline}>
        <div className={styles.titleWrapper}>
          <div className={styles.iconBox}>
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className={styles.h3}>Work Experience</h3>
        </div>

        <ol className={styles.timelineList}>
          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>Full Stack Intern, Metashot, Bengaluru, India</h4>
            <span>Jan 2025 – Present</span>
            <div className={styles.timelineText}>
              <ul className={styles.workExperienceList}>
                <li>Engineered high-performance APIs, reducing response times by 45% through caching and optimized data flow.</li>
                <li>Migrated AI microservices to Azure using Docker, lowering infrastructure costs by 30% and accelerating deployment cycles.</li>
                <li>Redesigned admin dashboard with React.js and Zustand, improving task efficiency by 60%.</li>
                <li>Designed a post-interview evaluation system using custom AI models to generate detailed performance reports, enhancing feedback accuracy and increasing candidate engagement by 35%.</li>
                <li>Fixed bugs in scoring and reporting logic, doubling system accuracy and reducing support queries.</li>
              </ul>
            </div>
          </li>
        </ol>
      </section>      
      <section className={styles.timeline}>
        <div className={styles.titleWrapper}>
          <div className={styles.iconBox}>
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className={styles.h3}>Projects</h3>
        </div>

        <ol className={styles.timelineList}>
          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>SnapSync</h4>
            <p className={styles.timelineText}>
              SnapSync is an AI-powered photo distribution platform that leverages technologies like Flask, React Native, Next.js, Docker, PostgreSQL, Python, and OpenCV to enable scalable, real-time image management and advanced face recognition for efficient and secure photo sharing.
            </p>
          </li>

          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>CryptoX</h4>
            <p className={styles.timelineText}>
              CryptoX is a web app that simulates cryptocurrency wallet management, enabling users to manage virtual wallets and track simulated asset values using React and Supabase.
            </p>
          </li>

          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>YouTube Transcriber</h4>
            <p className={styles.timelineText}>
              YouTube Transcriber is an AI-powered tool that converts YouTube video audio into text using Python and third-party APIs for accurate and efficient transcription.
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Resume;
