const services = [
  'E-commerce Store',
  'School ERP',
  'Appointment Booking System',
  'Inventory & Billing Dashboard',
  'Lead Management CRM',
  'Personal Blog & CMS',
  'Restaurant Ordering Website',
  'Event Registration Portal',
  'Client Portal',
]

const techStack = ['React', 'Node.js', 'PostgreSQL']

function Services() {
  return (
    <section className="capabilities" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-number mono" id="services-title">Services</h2>
        </div>

        <div className="capabilities-grid">
          {services.map((service) => (
            <article className="capability-card capability-software" key={service}>
              <div className="capability-content">
                <h3>{service}</h3>
              </div>

              <ul className="capability-skills" aria-label="Tech stack">
                {techStack.map((technology) => (
                  <li className="skill-item" key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
