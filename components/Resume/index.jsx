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
              OpenGrad Hub is an all-in-one platform for managing students, classes, and schedules. It includes tools for tracking attendance, managing lessons, and setting different access levels for users to keep everything organized.
            </p>
          </li>

          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>Challenge Tracker</h4>
            <p className={styles.timelineText}>
              Challenge Tracker is a tool for streamers on YouTube and Twitch to interact with their viewers. It allows fans to send in live challenges that show up on the screen in real-time, with a simple dashboard for moderators to track progress.
            </p>
          </li>

          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>Shot Prep</h4>
            <p className={styles.timelineText}>
              Shot Prep is an AI-powered mock interview tool for students preparing for MBA admissions or any other course. It helps users practice with realistic AI interviews, pay for sessions easily, and get instant feedback reports to improve their performance.
            </p>
          </li>

          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>PDF Translator/Editor</h4>
            <p className={styles.timelineText}>
              PDF Translator/Editor is a simple tool that lets you upload PDFs and translate them into different languages instantly. It also allows you to edit the translated text directly, making it easy to handle documents in multiple languages.
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Resume;
