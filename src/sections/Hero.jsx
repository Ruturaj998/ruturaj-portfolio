import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        {/* Hero Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.p
            className="hero-eyebrow mono"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="accent">●</span> BUILDING IN PUBLIC
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            RUTURAJ
            <br />
            <span>PADHY</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            Computer Science <span>×</span> Data Science
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            I build software, analyze data, and experiment with AI —
            turning ideas into useful digital experiences.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <a
              href="#work"
              className="hero-btn hero-btn-primary"
            >
              Explore My Work
              <span>↗</span>
            </a>

            <a
              href="#resume"
              className="hero-btn hero-btn-secondary"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          className="hero-card-wrapper"
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.35,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="hero-card"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >

            <div className="hero-card-top">
              <span className="mono">LIVE PROFILE</span>
              <span className="status-dot">● ONLINE</span>
            </div>

            <div className="hero-card-line" />

            <div className="profile-block">
              <span className="profile-label mono">
                CURRENTLY
              </span>

              <strong>
                B.Tech — Computer Science
              </strong>

              <p>
                Specialization — Data Science
              </p>
            </div>

            <div className="profile-block">
              <span className="profile-label mono">
                FOCUS
              </span>

              <p>Data Analytics</p>
              <p>Artificial Intelligence</p>
              <p>Web Development</p>
            </div>

            <div className="profile-block">
              <span className="profile-label mono">
                STATUS
              </span>

              <div className="status-text">
                <span>Learning</span>
                <span>→</span>
                <span>Building</span>
                <span>→</span>
                <span>Shipping</span>
              </div>
            </div>

            <div className="hero-card-footer mono">
              RUTURAJ.DEV / 01
            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
