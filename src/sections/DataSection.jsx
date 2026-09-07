import { motion } from 'framer-motion'

function DataSection() {
  const cards = [
    {
      label: 'CURRENT FOCUS',
      value: 'Data Science',
      description:
        'Exploring machine learning, analytics, visualization, and AI applications.',
      large: true,
      arrow: true,
    },
    {
      label: 'PROJECTS',
      value: '02',
      description:
        'Experiments and applications built while learning.',
    },
    {
      label: 'APPROACH',
      value: 'BUILD',
      description:
        'Learn → Build → Improve → Repeat',
    },
  ]

  return (
    <section className="data-section" id="data">
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
            04 / RUTURAJ / DATA
          </span>
        </motion.div>

        {/* Intro */}
        <motion.div
          className="data-intro"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <h2>
              Built with
              <span> curiosity.</span>
            </h2>
          </div>

          <p>
            A snapshot of what I'm building, learning,
            and exploring across software, data, and AI.
          </p>
        </motion.div>

        {/* Data Cards */}
        <div className="data-grid">

          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              className={`data-card ${
                card.large ? 'data-card-large' : ''
              }`}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.98,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -7,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <motion.span
                className="data-label mono"
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
                }}
                transition={{
                  delay: 0.2 + index * 0.12,
                  duration: 0.4,
                }}
              >
                {card.label}
              </motion.span>

              <motion.strong
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
                  delay: 0.3 + index * 0.12,
                  duration: 0.5,
                }}
              >
                {card.value}
              </motion.strong>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.4 + index * 0.12,
                  duration: 0.45,
                }}
              >
                {card.description}
              </motion.p>

              {card.arrow && (
                <motion.span
                  className="data-card-arrow"
                  animate={{
                    x: [0, 4, 0],
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  ↗
                </motion.span>
              )}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default DataSection
