import Reveal from '../components/Reveal'

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <Reveal>
          <div className="section-heading">
            <span className="section-number mono">
              01 / ABOUT
            </span>
          </div>
        </Reveal>

        <div className="about-grid">

          <Reveal>
            <div className="about-content">

              <p className="about-intro">
                I'm <span>Ruturaj.</span>
              </p>

              <p>
                A Computer Science student specializing in Data Science,
                currently turning ideas into experiments, applications,
                and data-driven projects.
              </p>

              <p>
                I'm interested in the intersection of
                <span> software, data and AI.</span>
              </p>

            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="about-info">

              <div className="about-info-block">
                <span className="mono">
                  CURRENTLY LEARNING
                </span>

                <p>Machine Learning</p>
                <p>Advanced Data Analytics</p>
                <p>AI Applications</p>
              </div>

              <div className="about-info-block">
                <span className="mono">
                  BASED ON
                </span>

                <p>India</p>
              </div>

              <div className="about-info-block">
                <span className="mono">
                  MINDSET
                </span>

                <p>Learn → Build → Improve</p>
              </div>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  )
}

export default About

