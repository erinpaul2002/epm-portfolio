import React, { useState } from 'react';

const contacts = [
  {
    icon: <ion-icon name="mail-outline"></ion-icon>,
    title: 'Email',
    value: 'erinpaulmanjaly@gmail.com',
    link: 'mailto:erinpaulmanjaly@gmail.com',
  },
  {
    icon: <ion-icon name="call-outline"></ion-icon>,
    title: 'Phone',
    value: '+91 8589 030266',
    link: 'tel:+918589030266',
  },
  {
    icon: <ion-icon name="calendar-outline"></ion-icon>,
    title: 'Birthday',
    value: 'November 12, 2002',
    link: null,
  },
  {
    icon: <ion-icon name="location-outline"></ion-icon>,
    title: 'Location',
    value: 'Kerala, India',
    link: null,
  },
];

const socials = [
  {
    icon: <ion-icon name="logo-whatsapp"></ion-icon>,
    link: 'https://wa.me/+918589030266',
    label: 'WhatsApp',
  },
  {
    icon: <ion-icon name="logo-linkedin"></ion-icon>,
    link: 'http://linkedin.com/in/erin-paul-manjaly-17596b250',
    label: 'LinkedIn',
  },
  {
    icon: <ion-icon name="logo-github"></ion-icon>,
    link: 'https://github.com/erinpaul2002',
    label: 'GitHub',
  },
];

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive((prev) => !prev);
  };

  return (
    <aside className={`content-card sidebar${active ? ' active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/assets/images/my-avatar.png" alt="Erin Paul Manjaly" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Erin Paul Manjaly">Erin Paul Manjaly</h1>
          <p className="title">Developer</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn onClick={handleToggle}>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          {contacts.map((item, idx) => (
            <li className="contact-item" key={idx}>
              <div className="icon-box">{item.icon}</div>
              <div className="contact-info">
                <p className="contact-title">{item.title}</p>
                {item.link ? (
                  <a href={item.link} className="contact-link" target="_blank" rel="noopener noreferrer">{item.value}</a>
                ) : (
                  <span className="contact-link">{item.value}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="separator"></div>
        <ul className="social-list">
          {socials.map((item, idx) => (
            <li className="social-item" key={idx}>
              <a href={item.link} className="social-link" target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
