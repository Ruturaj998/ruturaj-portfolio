import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-2.34-1.98-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 7.07c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.54c0 .26.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.14 3 3.25 3.9 3.25 5s.89 2 2 2 2-.9 2-2-.89-2-2-2ZM20.75 13.41c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H9.67V20h3.38v-6.39c0-1.68.32-3.31 2.4-3.31 2.05 0 2.07 1.93 2.07 3.42V20h3.38l-.15-6.59Z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsappIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
      <path d="M9 8.5c.2-.4.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c.5 1 1.3 1.8 2.3 2.3l.7-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.6-.5.8-.5.2-1.1.2-1.7 0-2.1-.7-4.7-3.3-5.4-5.4-.2-.6-.2-1.2.2-1.7Z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 3 3.5 10.2c-.7.3-.7 1.3 0 1.6l4.3 1.7 1.7 5.1c.2.6 1 .8 1.4.3l2.4-2.9 4.3 3.2c.5.4 1.2.1 1.4-.5L22 4c.2-.7-.4-1.3-1-1Z" />
      <path d="m8 13.5 9-6.5-6.1 7.1" />
    </svg>
  )
}

function Contact() {
  const [state, handleSubmit] = useForm('mzebkrkz')

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Ruturaj998',
      icon: <GithubIcon />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ruturaj-padhy-7ab26a387/',
      icon: <LinkedinIcon />,
    },
    {
      name: 'Email',
      href: 'mailto:ruturaj.exe@gmail.com',
      icon: <EmailIcon />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/_.ruttuu_/',
      icon: <InstagramIcon />,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/918144170616',
      icon: <WhatsappIcon />,
    },
    {
      name: 'Telegram',
      href: 'https://t.me/ruturaj_ex3',
      icon: <TelegramIcon />,
    },
  ]

  return (
    <section className="contact" id="contact">
      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number mono">
            09 / CONTACT
          </span>
        </motion.div>

        <div className="contact-grid">

          {/* LEFT CARD */}
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="contact-kicker mono">
              HAVE AN IDEA?
            </p>

            <h2>
              Let's build
              <span> something.</span>
            </h2>

            <p className="contact-description">
              Whether it's a project, collaboration, or just a
              conversation about technology, feel free to reach out.
            </p>

            <div className="contact-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noreferrer' : undefined}
                  className="contact-link"
                  aria-label={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 + index * 0.08,
                    duration: 0.45,
                  }}
                  whileHover={{
                    x: 6,
                  }}
                >
                  <span className="contact-link-icon">
                    {link.icon}
                  </span>

                  <strong>
                    {link.name}
                  </strong>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            {state.succeeded ? (
              <motion.div
                className="contact-success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="mono">
                  MESSAGE SENT
                </span>

                <h3>
                  Thanks for reaching out.
                </h3>

                <p>
                  Your message has been sent successfully.
                  I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="contact-form"
              >

                <div className="contact-field">
                  <label htmlFor="name" className="mono">
                    NAME
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />

                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email" className="mono">
                    EMAIL
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="subject" className="mono">
                    SUBJECT
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="What is this about?"
                    required
                  />

                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="message" className="mono">
                    MESSAGE
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me a little about your idea..."
                    required
                  />

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                {state.errors && (
                  <div className="contact-error">
                    Something went wrong. Please try again.
                  </div>
                )}

                <motion.button
                  type="submit"
                  className="contact-submit"
                  disabled={state.submitting}
                  whileHover={
                    !state.submitting ? { x: 5 } : {}
                  }
                  whileTap={
                    !state.submitting ? { scale: 0.98 } : {}
                  }
                >
                  {state.submitting
                    ? 'SENDING...'
                    : 'SEND MESSAGE →'}
                </motion.button>

              </form>
            )}

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact