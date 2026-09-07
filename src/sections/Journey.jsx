import { motion } from 'framer-motion'

function Journey() {
  const journey = [
    {
      year: '2025',
      title: 'WEB DEVELOPMENT',
      description:
        'Building modern web experiences and learning how frontend and backend systems work together.',
      status: 'BUILDING',
    },
    {
      year: '2025',
      title: 'ARTIFICIAL INTELLIGENCE',
      description:
        'Exploring AI tools, prompt engineering, automation, and practical AI applications.',
      status: 'EXPLORING',
    },
    {
      year: '2026',
      title: 'DATA ANALYSIS',
      description:
        'Started working with real-world datasets, data cleaning, exploratory analysis, and visualization.',
      status: 'BUILDING',
    },
    {
      year: 'NEXT',
      title: 'MACHINE LEARNING',
      description:
        'Going deeper into machine learning concepts, models, experimentation, and real-world applications.',
      status: 'UP NEXT',
    },
  ]

  return (
    <section className="journey" id="journey">
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
            05 / MY JOURNEY
          </span>
        </motion.div>

        {/* Intro */}
        <motion.div
          className="journey-intro"
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
          <h2>
            Always
            <span> learning.</span>
          </h2>

          <p>
            My journey is less about having everything figured out
            and more about continuously learning, building, and improving.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="journey-list">

          {journey.map((item, index) => (
            <motion.article
              className="journey-item"
              key={item.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
                transition: {
                  duration: 0.25,
                },
              }}
            >

              {/* Index */}
              <motion.div
                className="journey-index mono"
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.15 + index * 0.12,
                  duration: 0.4,
                }}
              >
                0{index + 1}
              </motion.div>

              {/* Year */}
              <motion.div
                className="journey-year mono"
                initial={{
                  opacity: 0,
                  x: -20,
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
                  duration: 0.5,
                }}
              >
                {item.year}
              </motion.div>

              {/* Content */}
              <motion.div
                className="journey-content"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.25 + index * 0.12,
                  duration: 0.55,
                }}
              >
                <h3>{item.title}</h3>

                <p>
                  {item.description}
                </p>
              </motion.div>

              {/* Status */}
              <motion.span
                className="journey-status mono"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.35 + index * 0.12,
                  duration: 0.4,
                }}
              >
                {item.status}
              </motion.span>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Journey
