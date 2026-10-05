import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowRight,
  Code2,
  Database,
  Sparkles,
  Video,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const focusItems = [
  {
    icon: Code2,
    label: 'SOFTWARE',
    value: 'Build & ship',
  },
  {
    icon: Database,
    label: 'DATA',
    value: 'Analyze & explore',
  },
  {
    icon: Sparkles,
    label: 'AI',
    value: 'Experiment & learn',
  },
  {
    icon: Video,
    label: 'CREATIVE',
    value: 'Shoot & edit',
  },
]

export default function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work')

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />

      <motion.div
        className="hero-content"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-eyebrow" variants={fadeUp}>
          <span className="hero-status-dot" />
          <span className="mono">AVAILABLE TO BUILD</span>
        </motion.div>

        <motion.div className="hero-heading-wrap" variants={fadeUp}>
          <p className="hero-kicker mono">
            COMPUTER SCIENCE × DATA SCIENCE
          </p>

          <h1 className="hero-title">
            RUTURAJ
            <span>PADHY</span>
          </h1>
        </motion.div>

        <motion.div className="hero-main-copy" variants={fadeUp}>
          <h2>
            Building with
            <span> code, creativity & data.</span>
          </h2>

          <p>
            I build software, work with data, experiment with AI,
            and create visual stories through video and photography.
          </p>
        </motion.div>

        <motion.div className="hero-actions" variants={fadeUp}>
          <motion.button
            type="button"
            className="hero-primary-btn"
            onClick={scrollToWork}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>EXPLORE MY WORK</span>
            <ArrowRight size={18} strokeWidth={1.8} />
          </motion.button>

          <motion.a
            href="/ruturaj-portfolio/Ruturaj_Padhy_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hero-secondary-btn"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            VIEW RESUME
            <ArrowDownRight size={17} strokeWidth={1.8} />
          </motion.a>
        </motion.div>

        <motion.div className="hero-focus-row" variants={fadeUp}>
          {focusItems.map((item, index) => {
            const Icon = item.icon

            return (
              <div className="hero-focus-item" key={item.label}>
                <div className="hero-focus-icon">
                  <Icon size={16} strokeWidth={1.7} />
                </div>

                <div className="hero-focus-copy">
                  <span className="mono">{item.label}</span>
                  <small>{item.value}</small>
                </div>

                {index !== focusItems.length - 1 && (
                  <span className="hero-focus-divider" />
                )}
              </div>
            )
          })}
        </motion.div>
      </motion.div>

      <motion.aside
        className="hero-profile-card"
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="hero-card-header">
          <span className="mono">CURRENTLY BUILDING</span>

          <span className="hero-card-live">
            <span />
            LIVE
          </span>
        </div>

        <div className="hero-card-project">
          <div className="hero-card-number mono">01</div>

          <div>
            <h3>TRACE-X</h3>
            <p>Device tracking system</p>
          </div>
        </div>

        <div className="hero-card-line" />

        <div className="hero-card-section">
          <span className="mono">FOCUS</span>

          <div className="hero-card-tags">
            <span>Software</span>
            <span>Data</span>
            <span>AI</span>
          </div>
        </div>

        <div className="hero-card-section">
          <span className="mono">ALSO</span>

          <div className="hero-card-tags">
            <span>Video</span>
            <span>Photography</span>
          </div>
        </div>

        <div className="hero-card-footer">
          <span className="mono">ODISHA, INDIA</span>
          <span className="mono">2026</span>
        </div>
      </motion.aside>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="mono">SCROLL TO EXPLORE</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  )
}