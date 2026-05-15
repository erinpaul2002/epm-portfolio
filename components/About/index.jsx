import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const aboutText = [
  "Hi, I'm Erin Paul Manjaly, a passionate Computer Science student, currently pursuing my B.Tech at Govt. Model Engineering College, Kochi. With a strong foundation in Python, C, Java, React, Next.js, and Supabase, I have developed several full-stack applications and have a deep interest in Artificial Intelligence, Web Development, and Machine Learning.",
  "I'm always eager to learn, explore new technologies, and solve complex problems through innovative solutions. Beyond my academic pursuits, I enjoy extracurricular activities such as football, swimming, and photo/video editing."
];

const services = [
  {
    icon: './assets/images/icon-coding.svg',
    title: 'Software Development',
    text: 'Building robust and scalable applications using modern technologies and best practices.'
  },
  {
    icon: './assets/images/icon-dev.svg',
    title: 'Web development',
    text: 'Creating dynamic and responsive websites that deliver exceptional user experiences.'
  },
  {
    icon: './assets/images/icon-ai.svg',
    title: 'AI and Machine Learning',
    text: 'Harnessing AI and machine learning to develop intelligent solutions that drive innovation.'
  },
  {
    icon: './assets/images/icon-api.svg',
    title: 'API Integration',
    text: 'Integrating APIs to enhance application functionality and streamline user experiences.'
  }
];

const techStack = [
  { img: './assets/images/icon-html.png', label: 'HTML' },
  { img: './assets/images/icon-css.png', label: 'CSS' },
  { img: './assets/images/icon-js.png', label: 'JavaScript' },
  { img: './assets/images/icon-react.png', label: 'React' },
  { img: './assets/images/icon-nextjs.png', label: 'Next.js' },
  { img: './assets/images/icon-python.png', label: 'Python' },
  { img: './assets/images/icon-nest.png', label: 'Nest' },
  { img: './assets/images/icon-nodejs.png', label: 'Node.js' },
  { img: './assets/images/icon-clerk.png', label: 'Clerk' },
  { img: './assets/images/icon-firebase.png', label: 'Firebase' },
  { img: './assets/images/icon-supabase.png', label: 'Supabase' },
  { img: './assets/images/icon-sql.png', label: 'SQL' },
  { img: './assets/images/icon-postgresql.png', label: 'PostgreSQL' },
  { img: './assets/images/icon-mongodb.png', label: 'MongoDB' },
  { img: './assets/images/icon-convexdb.png', label: 'ConvexDB' },
  { img: './assets/images/icon-docker.png', label: 'Docker' },
  { img: './assets/images/icon-azure.png', label: 'Microsoft Azure' },
  { img: './assets/images/icon-git.png', label: 'Git' },
  { img: './assets/images/icon-github.png', label: 'GitHub' },
  { img: './assets/images/icon-postman.png', label: 'Postman' },
  { img: './assets/images/icon-cursorai.png', label: 'CursorAI' },
  { img: './assets/images/icon-claudecode.png', label: 'Claude Code' },
  { img: './assets/images/icon-codex.png', label: 'Codex' },
  { img: './assets/images/icon-antigravity.png', label: 'Antigravity' },
  { img: './assets/images/icon-grafana.png', label: 'Grafana' },
  { img: './assets/images/icon-sentry.png', label: 'Sentry' },
  { img: './assets/images/icon-railway.png', label: 'Railway' },
  { img: './assets/images/icon-render.png', label: 'Render' },
  { img: './assets/images/icon-flutter.png', label: 'Flutter' }
];

const About = () => {
  return (
    <article className={styles.about} data-page="about">
      <header>
        <h2 className={styles.articleTitle}>About me</h2>
      </header>
      <section className={styles.aboutText}>
        {aboutText.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </section>
      <section className={styles.service}>
        <h3 className={styles.sectionTitle}>What i'm doing</h3>
        <ul className={styles.serviceList}>
          {services.map((service, idx) => (
            <li className={styles.serviceItem} key={idx}>
              <div className={styles.serviceIconBox}>
                <img src={service.icon} alt={service.title} width="40" />
              </div>
              <div className={styles.serviceContentBox}>
                <h4 className={styles.serviceTitle}>{service.title}</h4>
                <p className={styles.serviceItemText}>{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section id="techstack" className={styles.tech}>
        <h3 className={styles.sectionTitle}>TechStacks</h3>
        <div className={styles.carouselContainer}>
          <motion.div
            style={{
              display: 'flex',
              width: 'max-content'
            }}
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: techStack.length * 1.5,
                ease: "linear"
              }
            }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {[...techStack, ...techStack].map((tech, idx) => (
              <div className={styles.techItem} key={idx}>
                <a href="#techstack">
                  <img src={tech.img} alt={tech.label} />
                  <span className={styles.techLabel}>{tech.label}</span>
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </article>
  );
};

export default About;
