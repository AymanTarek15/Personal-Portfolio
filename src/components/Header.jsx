import { motion } from 'framer-motion';
export default function Header() {
  return (
    <header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Ayman Aboulsaad</h1>
        <p>Web Developer & JavaScript Enthusiast</p>
        <motion.a
          href="#projects"
          className="cta"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </header>
  );
}