import { motion } from 'framer-motion'

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 7.07c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.54c0 .26.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10Z"
      />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.14 3 3.25 3.9 3.25 5s.89 2 2 2 2-.9 2-2-.89-2-2-2ZM20.75 13.41c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H9.67V20h3.38v-6.39c0-1.68.32-3.31 2.4-3.31 2.05 0 2.07 1.93 2.07 3.42V20h3.38l-.15-6.59Z"
      />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m3 7 9 6 9-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()

    const subject = `Portfolio Contact — ${name}`

    const body = `Hello Ruturaj,

Name: ${name}
Email: ${email}

Message:
${message}`

    window.location.href =
      `mailto:ruturaj.exe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const contactLinks = [
    {
      label: 'GITHUB',
      href: 'https://github.com/Ruturaj998',
      icon: <GithubIcon />,
      external: true,
    },
    {
      label: 'LINKEDIN',
      href: 'https://www.linkedin.com/in/ruturaj-padhy-7ab26a387/',
      icon: <LinkedinIcon />,
      external: true,
    },
    {
      label: 'EMAIL',
      href: 'mailto:ruturaj.exe@gmail.com',
      icon: <EmailIcon />,
      external: false,
    },
  ]

  return (
    <section className="contact" id="contact">
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
            08 / CONTACT
          </span>
        </motion.div>

        <div className="contact-layout">

          {/* Contact Information */}
          <motion.div
            className="contact-main"
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
              className="contact-kicker mono"
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
              HAVE AN IDEA?
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
              Let's build
              <span> something.</span>
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
              Whether it's a project, an idea, or simply a conversation
              about technology, feel free to reach out.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="contact-links"
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
                delay: 0.45,
                duration: 0.55,
              }}
            >
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  className="contact-link"
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
                    delay: 0.5 + index * 0.1,
                    duration: 0.4,
                  }}
                  whileHover={{
                    x: 7,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <span className="contact-link-left">

                    <motion.span
                      className="contact-social-icon"
                      whileHover={{
                        scale: 1.12,
                        rotate: 4,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      {link.icon}
                    </motion.span>

                    <span className="mono">
                      {link.label}
                    </span>

                  </span>

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
              ))}
            </motion.div>

          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
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

            {/* Name */}
            <motion.div
              className="contact-field"
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
                delay: 0.25,
                duration: 0.45,
              }}
            >
              <label htmlFor="name" className="mono">
                NAME
              </label>

              <motion.input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                whileFocus={{
                  y: -2,
                }}
                transition={{
                  duration: 0.2,
                }}
              />
            </motion.div>

            {/* Email */}
            <motion.div
              className="contact-field"
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
                duration: 0.45,
              }}
            >
              <label htmlFor="email" className="mono">
                EMAIL
              </label>

              <motion.input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                whileFocus={{
                  y: -2,
                }}
                transition={{
                  duration: 0.2,
                }}
              />
            </motion.div>

            {/* Message */}
            <motion.div
              className="contact-field"
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
                delay: 0.45,
                duration: 0.45,
              }}
            >
              <label htmlFor="message" className="mono">
                MESSAGE
              </label>

              <motion.textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me what's on your mind..."
                required
                whileFocus={{
                  y: -2,
                }}
                transition={{
                  duration: 0.2,
                }}
              />
            </motion.div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="contact-submit"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.55,
                duration: 0.45,
              }}
              whileHover={{
                y: -3,
                x: 3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              SEND MESSAGE

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
            </motion.button>

          </motion.form>

        </div>

      </div>
    </section>
  )
}

export default Contact
