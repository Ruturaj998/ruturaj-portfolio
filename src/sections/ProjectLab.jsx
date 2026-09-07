import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function PythonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M11.8 2C7.9 2 8.1 3.7 8.1 3.7v2.7h3.8v.8H6.6C3.2 7.2 3 10.5 3 10.5s-.4 3.3 3 3.3h1.8v-1.9s-.1-2.3 2.3-2.3h3.8s2.2 0 2.2-2.2V4.3S16.4 2 11.8 2Zm-2.1 1.5c.4 0 .8.3.8.8s-.4.8-.8.8-.8-.3-.8-.8.4-.8.8-.8Z"
      />
      <path
        fill="currentColor"
        d="M12.2 22c3.9 0 3.7-1.7 3.7-1.7v-2.7h-3.8v-.8h5.3c3.4 0 3.6-3.3 3.6-3.3s.4-3.3-3-3.3h-1.8v1.9s.1 2.3-2.3 2.3h-3.8s-2.2 0-2.2 2.2v3.1S7.6 22 12.2 22Zm2.1-1.5c-.4 0-.8-.3-.8-.8s.4-.8.8-.8.8.3.8.8-.4.8-.8.8Z"
      />
    </svg>
  )
}

function DataIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="12" width="3" height="8" rx="1" fill="currentColor" />
      <rect x="10.5" y="7" width="3" height="13" rx="1" fill="currentColor" />
      <rect x="17" y="4" width="3" height="16" rx="1" fill="currentColor" />
    </svg>
  )
}

function PlotlyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="5" cy="18" r="2" fill="currentColor" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="19" cy="6" r="2" fill="currentColor" />
      <path
        d="M6.5 16.5 10.5 13.5M13.5 10.5 17.5 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function DashIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 18V8M10 18v-5M16 18V5M22 18H2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ApiIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 6h12M6 12h12M6 18h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="4" cy="6" r="1.2" fill="currentColor" />
      <circle cx="20" cy="12" r="1.2" fill="currentColor" />
      <circle cx="4" cy="18" r="1.2" fill="currentColor" />
    </svg>
  )
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse
        cx="12"
        cy="5"
        rx="7"
        ry="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function WebIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3 8h18M7 12l2 2-2 2M11 16h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ProjectLab() {
  const [openProject, setOpenProject] = useState(null)

  const projects = [
    {
      number: '01',
      title: 'GLOBAL VISION',
      category: 'DATA ANALYTICS',
      description:
        'A climate analytics project exploring long-term global temperature trends, anomalies, and regional warming patterns through data analysis and interactive visualization.',
      technologies: [
        { name: 'Python', icon: <PythonIcon /> },
        { name: 'Pandas', icon: <DataIcon /> },
        { name: 'Plotly', icon: <PlotlyIcon /> },
        { name: 'Dash', icon: <DashIcon /> },
      ],
      problem:
        'Global climate data can be difficult to understand when presented as raw numbers. The goal was to transform decades of climate data into meaningful visual insights.',
      approach: [
        'Data Cleaning',
        'Exploratory Analysis',
        'Anomaly Detection',
        'Regional Analysis',
        'Visualization',
      ],
      learned: [
        'Working with real-world climate datasets',
        'Data cleaning and aggregation',
        'Advanced data visualization',
        'Building interactive dashboards',
      ],
    },

    {
      number: '02',
      title: 'TRACE-X',
      category: 'SOFTWARE',
      description:
        'A device tracking system focused on registering devices, managing device information, and connecting a backend system with a web interface.',
      technologies: [
        { name: 'Python', icon: <PythonIcon /> },
        { name: 'API', icon: <ApiIcon /> },
        { name: 'Database', icon: <DatabaseIcon /> },
        { name: 'Web', icon: <WebIcon /> },
      ],
      problem:
        'Managing registered devices requires a structured system that can store device information and connect different parts of the application.',
      approach: [
        'Device Registration',
        'Backend Processing',
        'API Communication',
        'Database Management',
        'Web Interface',
      ],
      learned: [
        'Backend application structure',
        'API-based communication',
        'Database integration',
        'Connecting application components',
      ],
    },
  ]

  const toggleCaseStudy = (number) => {
    setOpenProject(openProject === number ? null : number)
  }

  return (
    <section className="project-lab" id="work">
      <div className="container">

        {/* Section Heading */}
        <motion.div
          className="section-heading project-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="section-number mono">
            03 / PROJECT LAB
          </span>
        </motion.div>

        {/* Intro */}
        <motion.div
          className="project-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2>
            Things I've
            <span> built.</span>
          </h2>

          <p>
            A collection of experiments, applications, and data-driven
            projects built while learning and exploring new technologies.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="projects-list">

          {projects.map((project, index) => {
            const isOpen = openProject === project.number

            return (
              <motion.article
                className={`project-card ${isOpen ? 'project-open' : ''}`}
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.25,
                  },
                }}
              >

                {/* Project Top */}
                <motion.div
                  className="project-card-top"
                  whileHover={{ x: 3 }}
                >
                  <span className="project-number mono">
                    {project.number}
                  </span>

                  <span className="project-category mono">
                    {project.category}
                  </span>
                </motion.div>

                {/* Project Main */}
                <div className="project-main">

                  <div className="project-title-row">
                    <motion.h3
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>

                    <motion.span
                      className="project-arrow"
                      animate={{
                        rotate: isOpen ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      ↗
                    </motion.span>
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                </div>

                {/* Project Bottom */}
                <div className="project-bottom">

                  <div className="project-tech">
                    <span className="tech-label mono">
                      TECH STACK
                    </span>

                    <div className="tech-list">

                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          className="tech-item"
                          key={tech.name}
                          initial={{
                            opacity: 0,
                            x: -8,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                            amount: 0.15,
                          }}
                          transition={{
                            duration: 0.4,
                            delay:
                              0.25 +
                              index * 0.15 +
                              techIndex * 0.07,
                          }}
                          whileHover={{
                            y: -3,
                          }}
                        >
                          <span className="tech-icon">
                            {tech.icon}
                          </span>

                          <span>{tech.name}</span>
                        </motion.div>
                      ))}

                    </div>
                  </div>

                  <motion.button
                    className="project-link"
                    onClick={() => toggleCaseStudy(project.number)}
                    whileTap={{ scale: 0.97 }}
                  >
                    {isOpen ? 'CLOSE CASE STUDY' : 'VIEW CASE STUDY'}

                    <motion.span
                      animate={{
                        rotate: isOpen ? 90 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      {isOpen ? '−' : '↗'}
                    </motion.span>
                  </motion.button>

                </div>

                {/* Animated Case Study */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="project-case-study"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        overflow: 'hidden',
                      }}
                    >

                      <div className="case-divider" />

                      {/* Problem */}
                      <motion.div
                        className="case-block"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.12,
                          duration: 0.45,
                        }}
                      >
                        <span className="case-label mono">
                          01 / THE PROBLEM
                        </span>

                        <p className="case-large-text">
                          {project.problem}
                        </p>
                      </motion.div>

                      {/* Approach */}
                      <motion.div
                        className="case-block"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.2,
                          duration: 0.45,
                        }}
                      >
                        <span className="case-label mono">
                          02 / APPROACH
                        </span>

                        <div className="case-process">

                          {project.approach.map((step, stepIndex) => (
                            <motion.div
                              className="case-process-step"
                              key={step}
                              initial={{
                                opacity: 0,
                                x: -12,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                delay:
                                  0.25 +
                                  stepIndex * 0.07,
                                duration: 0.35,
                              }}
                            >
                              <span className="mono">
                                0{stepIndex + 1}
                              </span>

                              <strong>
                                {step}
                              </strong>

                              {stepIndex !==
                                project.approach.length - 1 && (
                                <motion.span
                                  className="case-process-arrow"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{
                                    delay:
                                      0.35 +
                                      stepIndex * 0.07,
                                  }}
                                >
                                  ↓
                                </motion.span>
                              )}
                            </motion.div>
                          ))}

                        </div>
                      </motion.div>

                      {/* Technologies */}
                      <motion.div
                        className="case-block"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.28,
                          duration: 0.45,
                        }}
                      >
                        <span className="case-label mono">
                          03 / TECHNOLOGIES
                        </span>

                        <div className="case-tech-grid">

                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              className="case-tech-card"
                              key={tech.name}
                              initial={{
                                opacity: 0,
                                scale: 0.94,
                              }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                              }}
                              transition={{
                                delay:
                                  0.32 +
                                  techIndex * 0.07,
                                duration: 0.35,
                              }}
                              whileHover={{
                                y: -4,
                                scale: 1.02,
                              }}
                            >
                              <span className="case-tech-logo">
                                {tech.icon}
                              </span>

                              <span>{tech.name}</span>
                            </motion.div>
                          ))}

                        </div>
                      </motion.div>

                      {/* What I Learned */}
                      <motion.div
                        className="case-block"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.35,
                          duration: 0.45,
                        }}
                      >
                        <span className="case-label mono">
                          04 / WHAT I LEARNED
                        </span>

                        <div className="case-learning-grid">

                          {project.learned.map((item, learnedIndex) => (
                            <motion.div
                              className="case-learning-item"
                              key={item}
                              initial={{
                                opacity: 0,
                                x: -10,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                delay:
                                  0.4 +
                                  learnedIndex * 0.07,
                                duration: 0.35,
                              }}
                            >
                              <span className="mono">
                                0{learnedIndex + 1}
                              </span>

                              <p>{item}</p>
                            </motion.div>
                          ))}

                        </div>
                      </motion.div>

                      {/* Case Footer */}
                      <motion.div
                        className="case-footer"
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.48,
                          duration: 0.4,
                        }}
                      >
                        <span className="mono">
                          PROJECT / {project.number}
                        </span>

                        <div className="case-actions">

                          <motion.a
                            href="#"
                            className="case-action"
                            whileHover={{ x: 4 }}
                          >
                            GITHUB ↗
                          </motion.a>

                          <motion.a
                            href="#"
                            className="case-action"
                            whileHover={{ x: 4 }}
                          >
                            LIVE DEMO ↗
                          </motion.a>

                        </div>
                      </motion.div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.article>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default ProjectLab