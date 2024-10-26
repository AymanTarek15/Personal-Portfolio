import { motion } from 'framer-motion';
export default function Projects() {
  const projectData = [
    { title: 'Hand-Time', description: 'A website design based on an existing template using HTML and CSS before I learnt to do responsive design.', link: 'https://aymantarek15.github.io/Hand-Time/' },
    { title: 'Sneakers Website', description: 'A simple website showcasing sneaker details using HTML and CSS using a responsive design.', link: 'https://aymantarek15.github.io/Sneakers/' },
    { title: 'Job-Entry', description: 'A responsive design project, showcasing my ability to replicate a design using HTML and CSS.', link: 'https://aymantarek15.github.io/Job-Entry/' },
    { title: 'Weather App', description: 'A React app using the weather API to show weather conditions and time for any country or city.', link: 'https://aymantarek15.github.io/new-weather-app/' },
    { title: 'Tic-Tac-Toe Game', description: 'A tic-tac-toe game built with React that shows who won or if the game is a draw.', link: 'https://aymantarek15.github.io/tic-tac-toe/' },
    { title: 'Ecommerce App', description: 'An ecommerce website built using React Router, Redux, and responsive design principles.', link: 'https://aymantarek15.github.io/Ecommerce-app/' }
  ];

  return (
    <section id="projects" className='wave-top wave-bottom'>
      <h2>Projects</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {projectData.map((project, index) => (
          <motion.div
            className="portfolio-item"
            key={index}
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View Project
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}