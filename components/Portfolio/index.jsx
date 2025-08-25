import React, { useState, useRef, useEffect } from 'react';
import styles from './Portfolio.module.css';
import { li } from 'framer-motion/client';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Work', value: 'work' },
  { label: 'Personal', value: 'personal' },
  { label: 'Python', value: 'python' },
  { label: 'React', value: 'react' },
  { label: 'Nextjs', value: 'nextjs' },
];

const projects = [
  // Personal Projects
  {
    title: 'SnapSync',
    category: 'nextjs',
    type: 'personal',
    image: './assets/images/project-snapsync.png',
    videoSrc: 'https://www.youtube.com/watch?v=Khfs-lmJxl0',
  },
  {
    title: 'CryptoX',
    category: 'react',
    type: 'personal',
    image: './assets/images/project-crypto.jpg',
    videoSrc: 'https://www.youtube.com/watch?v=dk7PLIf-CNs',
  },
  {
    title: 'YouTube Transcriber',
    category: 'python',
    type: 'personal',
    image: './assets/images/project-youtube.png',
    videoSrc: 'https://www.youtube.com/watch?v=s2UEkhpNOcA',
  },
  {
    title: 'Shot-DevSpace',
    category: 'nextjs',
    type: 'work',
    image: './assets/images/project-shot-devspace.png',
    liveUrl: 'https://shot-devspace.netlify.app/',
  },
  {
    title: 'CodeX Editor',
    category: 'react',
    type: 'personal',
    image: './assets/images/project-codeX.png',
    liveUrl: 'https://codex-frontend-drab.vercel.app/',
  },
  {
    title: 'Figma to Website',
    category: 'nextjs',
    type: 'personal',
    image: './assets/images/project-figma-to-website.png',
    liveUrl: 'https://webbywolf-fe-app.vercel.app/',
  },
  {
    title: 'Task Manager',
    category: 'react',
    type: 'personal',
    image: './assets/images/project-task-manager.png',
    liveUrl: 'https://task-manager-fe-three.vercel.app/',
  },
  {
    title: 'Room Finder',
    category: 'nextjs',
    type: 'work',
    image: './assets/images/project-room-finder.png',
    liveUrl: 'https://upsc-room-hunt-fe.vercel.app/',
  },
  {
    title: 'Shot-Prep',
    category: 'nextjs',
    type: 'work',
    image: './assets/images/project-prep.png',
    liveUrl: 'https://prep.metashot.co.in/',
  }
  ,
  {
    title: 'RAG-Agent',
    category: 'nextjs',
    type: 'personal',
    image: './assets/images/project-rag-agent.png',
    liveUrl: 'https://ai-rag-agent-fe.vercel.app/',
  }
,
  {
    title: 'In-A-Minute',
    category: 'nextjs',
    type: 'personal',
    image: './assets/images/project-notes-summarizer.png',
    liveUrl: 'https://mangodesk-in-a-minute-fe.vercel.app/',
  }

];

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectOpen, setSelectOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const videoPopupRef = useRef(null);
  const videoIframeRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter function
  const filterProjects = (filter) => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else if (filter === 'work' || filter === 'personal') {
      setFilteredProjects(projects.filter(project => project.type === filter));
    } else {
      setFilteredProjects(projects.filter(project => project.category.toLowerCase() === filter.toLowerCase()));
    }
    setSelectedFilter(filter);
  };

  // Filter button click handler
  const handleFilterClick = (value) => {
    filterProjects(value);
  };

  // Select dropdown toggle
  const handleSelectClick = () => {
    setSelectOpen(!selectOpen);
  };

  // Select item click handler
  const handleSelectItem = (value) => {
    filterProjects(value);
    setSelectOpen(false);
  };

  // Video popup handlers
  const openVideoPopup = (videoSrc) => {
    const videoId = videoSrc.split('v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    
    if (videoIframeRef.current && videoPopupRef.current) {
      videoIframeRef.current.src = embedUrl;
      videoPopupRef.current.style.display = 'block';      setIsModalOpen(true);
      
      // Hide navbar when modal opens
      const navbar = document.querySelector('[data-page="navbar"]');
      if (navbar) {
        navbar.style.display = 'none';
      }
    }
  };

  const closeVideoPopup = () => {
    if (videoPopupRef.current && videoIframeRef.current) {
      videoIframeRef.current.src = '';
      videoPopupRef.current.style.display = 'none';
      setIsModalOpen(false);
      
      // Show navbar when modal closes
      const navbar = document.querySelector('[data-page="navbar"]');
      if (navbar) {
        navbar.style.display = 'flex';
      }
    }
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (videoPopupRef.current && event.target === videoPopupRef.current) {
        closeVideoPopup();
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Close popup when ESC key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeVideoPopup();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);
  return (
    <article className={styles.portfolio} data-page="portfolio">
      <header>
        <h2 className={styles.articleTitle}>Portfolio</h2>
      </header>

      <section className={styles.projects}>
        <ul className={styles.filterList}>          {filters.map((filter, index) => (
            <li key={index} className={styles.filterItem}>
              <button 
                className={selectedFilter === filter.value ? styles.active : ""} 
                onClick={() => handleFilterClick(filter.value)}
              >
                {filter.label}
              </button>
            </li>
          ))}
        </ul>        <div 
          className={`${styles.filterSelectBox} ${selectOpen ? styles.active : ""}`}
          onClick={handleSelectClick}
        >
          <button className={styles.filterSelect}>
            <div className={styles.selectValue}>
              {filters.find(f => f.value === selectedFilter)?.label || "Select category"}
            </div>

            <div className={styles.selectIcon}>
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className={styles.selectList}>
            {filters.map((filter, index) => (
              <li key={index} className={styles.selectItem}>
                <button onClick={() => handleSelectItem(filter.value)}>
                  {filter.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className={styles.projectList}>
          {filteredProjects.map((project, index) => (
            <li 
              key={index} 
              className={`${styles.projectItem} ${selectedFilter === 'all' || selectedFilter === project.category || selectedFilter === project.type ? styles.active : ''}`}
            >
              <div className={styles.projectWrapper}>
                <figure className={styles.projectImg}>
                  <div className={styles.projectIconContainer}>
                    {project.videoSrc && (
                      <div 
                        className={styles.projectItemIconBox} 
                        onClick={() => openVideoPopup(project.videoSrc)}
                        title="Watch Demo"
                      >
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectItemLiveLink}
                        title="Visit Live Site"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ion-icon name="globe-outline"></ion-icon>
                      </a>
                    )}
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy" 
                  />
                  {/* Work badge */}
                  {project.type === 'work' && (
                    <span style={{position: 'absolute', top: 8, left: 8, background: '#0070f3', color: '#fff', padding: '2px 8px', borderRadius: 4, fontSize: 12, zIndex: 2}}>Work</span>
                  )}
                </figure>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectCategory}>{project.category}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Video Popup */}
        <div id="videoPopup" ref={videoPopupRef} className={styles.videoPopup} style={{ zIndex: 1000, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
          <div className={styles.videoPopupContent} style={{ zIndex: 1001 }}>
            <span className={styles.closeBtn} onClick={closeVideoPopup}>&times;</span>
            <iframe 
              ref={videoIframeRef}
              width="90%" 
              height="100%" 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Portfolio;
