import React from 'react';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'HTML & CSS', icon: 'fab fa-html5' },
    { name: 'Git & GitHub', icon: 'fab fa-github' },
    { name: 'Responsive Design', icon: 'fas fa-mobile-alt' },
    { name: 'Problem-Solving', icon: 'fas fa-lightbulb' },
    { name: 'Next.js', icon: 'fa-solid fa-n' },
    {
      name: 'Framer Motion',
      customIcon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          // fill="currentColor"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ff0080', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#00f', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0 0 L12 12 L24 0 V24 H12 L0 12 Z"
            fill="#007acc"
          />
        </svg>
      ),
    },
    { name: 'React Native', icon: 'fab fa-react' },
  ];

  return (
    <section id='skills' className="my-skills col-md-6 col-lg-4">
      <h2 className="section-title">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {/* Check if the skill has a custom icon, otherwise render Font Awesome icon */}
            {skill.customIcon ? (
              skill.customIcon
            ) : (
              <i className={`${skill.icon} skill-icon`} aria-hidden="true"></i>
            )}
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
