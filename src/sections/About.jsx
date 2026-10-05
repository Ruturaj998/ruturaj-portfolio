import { motion } from 'framer-motion'
import { ArrowDownRight, Brain, Code2, Database, Video } from 'lucide-react'

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
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

const disciplines = [
  {
    number: '01',
    label: 'SOFTWARE',
    icon: Code2,
  },
  {
    number: '02',
    label: 'DATA',
    icon: Database,
  },
  {
    number: '03',
    label: 'AI',
    icon: Brain,
  },
  {
    number: '04',
    label: 'CREATIVE',
    icon: Video,
  },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid" aria-hidden="true" />

      <motion.div
        className="about-inner"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="about-sidebar" variants={fadeUp}>
          <div className="about-section-number mono">
            01 / ABOUT
          </div>

          <div className="about-sidebar-line" />

          <div className="about-disciplines">
            {disciplines.map((item) => {
              const Icon = item.icon

              return (
                <div
                  className="about-discipline"
                  key={item.number}
                >
                  <span className="about-discipline-number mono">
                    {item.number}
                  </span>

                  <Icon
                    className="about-discipline-icon"
                    size={15}
                    strokeWidth={1.6}
                  />

                  <span className="mono">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>

        <div className="about-main">
          <motion.div className="about-heading" variants={fadeUp}>
            <span className="about-heading-small mono">
              A LITTLE ABOUT ME
            </span>

            <h2>
              I'm <span>Ruturaj.</span>
            </h2>
          </motion.div>

          <motion.div className="about-copy" variants={fadeUp}>
            <p className="about-lead">
              A Computer Science student specializing in Data
              Science, currently turning ideas into experiments,
              applications, and data-driven projects.
            </p>

            <p>
              I'm interested in the intersection of software,
              data and AI — building things to understand how
              they work, then improving them through iteration.
            </p>

            <p>
              Outside the code, I work with video, photography
              and visual storytelling. I enjoy combining technical
              thinking with creative work to build experiences
              that feel useful and human.
            </p>
          </motion.div>

          <motion.div className="about-details" variants={fadeUp}>
            <div className="about-detail">
              <span className="about-detail-label mono">
                CURRENTLY LEARNING
              </span>

              <div className="about-detail-content">
                <span>Machine Learning</span>
                <span>Advanced Data Analytics</span>
                <span>AI Applications</span>
              </div>
            </div>

            <div className="about-detail">
              <span className="about-detail-label mono">
                BASED IN
              </span>

              <div className="about-detail-content">
                <span>India</span>
              </div>
            </div>

            <div className="about-detail about-detail-mindset">
              <span className="about-detail-label mono">
                MINDSET
              </span>

              <div className="about-mindset">
                <span>Learn</span>
                <ArrowDownRight
                  size={16}
                  strokeWidth={1.5}
                />
                <span>Build</span>
                <ArrowDownRight
                  size={16}
                  strokeWidth={1.5}
                />
                <span>Improve</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}