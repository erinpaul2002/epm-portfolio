import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const contacts = [
	{
		icon: <ion-icon name="mail-outline"></ion-icon>,
		title: 'Email',
		value: 'erinpaulmanjaly2002@gmail.com',
		link: 'mailto:erinpaulmanjaly2002@gmail.com',
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
		<aside
			className={`content-card ${styles.sidebar}${
				active ? ` ${styles.active}` : ''
			}`}
			data-sidebar
		>			<div className={styles.sidebarInfo}>
				<figure className={styles.avatarBox}>
					<img
						src="/assets/images/my-avatar.png"
						alt="Erin Paul Manjaly"
						width="80"
					/>
				</figure>
				<div className={styles.infoContent}>
					<h1 className={styles.name} title="Erin Paul Manjaly">
						Erin Paul Manjaly
					</h1>
					<p className={styles.title}>Developer</p>
				</div>
				<button
					className={styles.infoMoreBtn}
					data-sidebar-btn
					onClick={handleToggle}
				>
					<span>Show Contacts</span>
					<ion-icon name="chevron-down"></ion-icon>
				</button>
			</div>			<div className={styles.sidebarInfoMore}>
				<div className="separator"></div>
				<ul className={styles.contactsList}>
					{contacts.map((item, index) => (
						<li className={styles.contactItem} key={index}>
							<div className={styles.iconBox}>{item.icon}</div>
							<div className={styles.contactInfo}>
								<p className={styles.contactTitle}>{item.title}</p>
								{item.link ? (
									<a
										href={item.link}
										className={styles.contactLink}
										target="_blank"
										rel="noopener noreferrer"
									>
										{item.value}
									</a>
								) : (
									<address>{item.value}</address>
								)}
							</div>
						</li>
					))}
				</ul>
				<div className="separator"></div>
				<ul className={styles.socialList}>
					{socials.map((item, idx) => (
						<li className={styles.socialItem} key={idx}>
							<a
								href={item.link}
								className={styles.socialLink}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={item.label}
							>
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
