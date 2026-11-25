import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background grid */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Hero Name */}
      <motion.div
        className="hero-name-layer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <h1 className="hero-title">
          <span className="hero-name-primary">RUTURAJ</span>
          <span className="hero-name-secondary outlined-text">PADHY</span>
        </h1>
      </motion.div>

      {/* Main Hero Content */}
      <motion.div
        className="hero-content-layer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="hero-editorial-bottom">
          <div className="hero-editorial-center">
            <div className="hero-eyebrow">
              <span className="hero-status-dot" />
              <span className="mono">AVAILABLE TO BUILD</span>
            </div>

            <h2 className="hero-main-headline">
              Building with{' '}
              <span className="accent-text">
                code, data and creativity.
              </span>
            </h2>

            <p className="hero-kicker">
              I build full-stack web apps.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="hero-primary-btn">
                <span>DISCUSS YOUR PROJECT</span>
                <ArrowRight size={16} strokeWidth={2} />
              </a>

              <a href="#work" className="hero-secondary-btn">
                <span>EXPLORE WORK</span>
                <ArrowDownRight size={15} strokeWidth={2} />
              </a>

              <a
                href={`${import.meta.env.BASE_URL}Ruturaj_Padhy_Resume.pdf`}
                target="_blank"
                rel="noreferrer"
                className="hero-secondary-btn"
              >
                <span>VIEW RESUME</span>
                <ArrowDownRight size={15} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.6,
        }}
      >
        <span className="mono">SCROLL TO EXPLORE</span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  )
}