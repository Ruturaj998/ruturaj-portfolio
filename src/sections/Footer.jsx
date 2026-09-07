import { motion } from 'framer-motion'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">

        {/* Footer Top */}
        <motion.div
          className="footer-top"
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <motion.a
            href="#"
            className="footer-logo"
            whileHover={{
              y: -3,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            RUTURAJ<span>.DEV</span>
          </motion.a>

          <motion.p
            className="footer-status mono"
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
              delay: 0.15,
              duration: 0.45,
            }}
          >
            <motion.span
              animate={{
                opacity: [1, 0.35, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ●
            </motion.span>{' '}
            BUILDING • LEARNING • SHIPPING
          </motion.p>

        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
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
            delay: 0.2,
            duration: 0.55,
          }}
        >

          <p className="mono">
            © {currentYear} RUTURAJ PADHY
          </p>

          <motion.a
            href="#"
            className="footer-back-top mono"
            whileHover={{
              y: -3,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            BACK TO TOP

            <motion.span
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ↑
            </motion.span>
          </motion.a>

        </motion.div>

      </div>
    </footer>
  )
}

export default Footer
