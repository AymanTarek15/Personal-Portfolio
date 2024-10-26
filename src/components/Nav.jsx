import { motion } from 'framer-motion';
export default function Nav() {
  return (
    <nav>
      {['About Me', 'Projects', 'Contact'].map((item, index) => (
        <motion.a
          key={index}
          href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
          whileHover={{ scale: 1.1, color: "#80d0c7" }}
        >
          {item}
        </motion.a>
      ))}
    </nav>
  );
}