import { motion } from 'framer-motion'

function Resume() {
  const resumeUrl = '/ruturaj-portfolio/Ruturaj_Padhy_Resume.pdf'

  return (
    <section className="resume" id="resume">
      <div className="container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="section-number mono">
            07 / RESUME
          </span>
        </motion.div>

        <div className="resume-layout">

          {/* Main Resume Content */}
          <motion.div
            className="resume-main"
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <motion.span
              className="resume-kicker mono"
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.15,
                duration: 0.45,
              }}
            >
              RUTURAJ PADHY / CV
            </motion.span>

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.25,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              A snapshot of
              <span> what I do.</span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.35,
                duration: 0.55,
              }}
            >
              Computer Science student specializing in Data Science,
              focused on building software, working with data,
              and exploring practical AI applications.
            </motion.p>

            {/* Resume Buttons */}
            <motion.div
              className="resume-actions"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
                duration: 0.55,
              }}
            >
              {/* View Resume */}
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="resume-btn resume-btn-primary"
                whileHover={{
                  y: -3,
                  x: 3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                VIEW RESUME

                <motion.span
                  whileHover={{
                    x: 4,
                    y: -4,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  ↗
                </motion.span>
              </motion.a>

              {/* Download Resume */}
              <motion.a
                href={resumeUrl}
                download="Ruturaj_Padhy_Resume.pdf"
                className="resume-btn resume-btn-secondary"
                whileHover={{
                  y: -3,
                  x: 3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                DOWNLOAD PDF

                <motion.span
                  whileHover={{
                    y: 3,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  ↓
                </motion.span>
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Resume Information */}
          <motion.div
            className="resume-info"
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Education */}
            <motion.div
              className="resume-info-block"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.25,
                duration: 0.5,
              }}
              whileHover={{
                x: 5,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <span className="resume-info-label mono">
                EDUCATION
              </span>

              <strong>
                B.Tech — Computer Science
              </strong>

              <p>
                Specialization — Data Science
              </p>
            </motion.div>

            {/* University */}
            <motion.div
              className="resume-info-block"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.38,
                duration: 0.5,
              }}
              whileHover={{
                x: 5,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <span className="resume-info-label mono">
                UNIVERSITY
              </span>

              <strong>
                GIET University
              </strong>

              <p>
                2025 — 2029
              </p>
            </motion.div>

            {/* Core Interests */}
            <motion.div
              className="resume-info-block"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.51,
                duration: 0.5,
              }}
              whileHover={{
                x: 5,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <span className="resume-info-label mono">
                CORE INTERESTS
              </span>

              <p>Data Science</p>
              <p>Artificial Intelligence</p>
              <p>Software Development</p>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Resume