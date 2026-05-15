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
            <span>2009 – 2021</span>
            <p className={styles.timelineText}>
              Completed schooling at CMI Public School Chalakudy; achieved full A1 grades in both Class 10 and 12.
            </p>
          </li>

          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>Model Engineering College Thrikkakara</h4>
            <span>2021 – 2025</span>
            <p className={styles.timelineText}>
              B.Tech in Computer Science with Honours in Machine Learning, Govt. Model Engineering College, APJ Abdul Kalam Technological University, 2021–2025.
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
            <h4 className={styles.timelineItemTitle}>Full Stack Developer, OpenGrad Foundation</h4>
            <span>Apr 2025 – Present</span>
            <div className={styles.timelineText}>
              <ul className={styles.workExperienceList}>
                <li>Own end-to-end development for OpenGrad’s public website and in-house applications.</li>
                <li>Lead development of OpenGrad Hub, a modular workspace for LMS, attendance tracking, meeting scheduling, and task management.</li>
                <li>Build workflow tools and student-facing products spanning task management, scheduling, AI interviews, and PDF translation.</li>
                <li>Integrate Razorpay payments for an MBA prep application and lead a team while overseeing architecture, testing, maintenance, and delivery.</li>
              </ul>
            </div>
          </li>

          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>Full Stack Intern, Metashot, Bengaluru, India</h4>
            <span>Jan 2025 – Apr 2025</span>
            <div className={styles.timelineText}>
              <ul className={styles.workExperienceList}>
                <li>Engineered high-performance APIs, reducing response times by 45% through caching and optimized data flow.</li>
                <li>Migrated AI microservices to Azure using Docker, lowering infrastructure costs by 30% and accelerating deployment cycles.</li>
                <li>Redesigned admin dashboard with React.js and Zustand, improving task efficiency by 60%.</li>
                <li>Designed an AI-powered post-interview evaluation system to generate detailed performance reports and improve feedback quality.</li>
                <li>Fixed bugs in scoring and reporting logic, improving evaluation accuracy and reducing support queries.</li>
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
            <h4 className={styles.timelineItemTitle}>OpenGrad Hub</h4>
            <p className={styles.timelineText}>
              OpenGrad Hub is a comprehensive multi-workspace management platform featuring modular tools for LMS, attendance tracking, and scheduling. It implements a robust Permission-Based Access Control (PBAC) system to manage complex user roles and streamline organizational workflows across various educational tracks.
            </p>
          </li>

          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>Challenge Tracker</h4>
            <p className={styles.timelineText}>
              Challenge Tracker is a streamer-centric engagement platform that allows YouTube and Twitch viewers to submit live challenges to streamers. It features dynamic OBS overlays for real-time stream integration and a moderator dashboard for quick status updates and progress tracking.
            </p>
          </li>

          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>MBA Prep (One Short Track)</h4>
            <p className={styles.timelineText}>
              MBA Prep (One Short Track) is an AI-powered interview simulation platform specializing in MBA admissions. It features a credit-based system with Razorpay integration, automated post-interview report generation, and realistic AI-driven evaluation to help candidates refine their performance.
            </p>
          </li>

          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>PDF Translator/Editor</h4>
            <p className={styles.timelineText}>
              PDF Translator/Editor is an AI-powered platform built with Next.js and integrated with advanced translation APIs. It enables users to upload, translate, and edit PDF documents with high precision, streamlining multilingual document management.
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Resume;
