const services = [
  {
    name: 'E-commerce Store',
    description: 'A storefront with product filters, cart, and checkout, plus an admin dashboard for inventory and orders.',
    techStack: ['Next.js', 'PostgreSQL', 'Razorpay'],
  },
  {
    name: 'School ERP',
    description: 'Manage student records, attendance, fees, exams, and report cards from one school admin portal.',
    techStack: ['React', 'Django', 'PostgreSQL'],
  },
  {
    name: 'Appointment Booking System',
    description: 'Let customers book or reschedule available slots and get email confirmations. Staff can set their availability.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Nodemailer'],
  },
  {
    name: 'Inventory & Billing Dashboard',
    description: 'Track stock movements, generate PDF invoices, and flag items that need restocking.',
    techStack: ['React', 'Express', 'MySQL', 'PDFKit'],
  },
  {
    name: 'Lead Management CRM',
    description: 'Capture enquiries, assign leads, and track follow-ups and deal stages in one pipeline.',
    techStack: ['React', 'Express', 'PostgreSQL'],
  },
  {
    name: 'Personal Blog & CMS',
    description: 'Publish a public blog from an editor dashboard with drafts, categories, and image uploads.',
    techStack: ['Next.js', 'Payload CMS', 'PostgreSQL'],
  },
  {
    name: 'Restaurant Ordering Website',
    description: 'Take pickup orders from a digital menu and show incoming orders on a live kitchen dashboard.',
    techStack: ['React', 'Node.js', 'Socket.IO', 'PostgreSQL'],
  },
  {
    name: 'Event Registration Portal',
    description: 'Manage limited seats, email QR tickets, and check attendees in at the venue.',
    techStack: ['Next.js', 'PostgreSQL', 'qrcode', 'Nodemailer'],
  },
  {
    name: 'Client Portal',
    description: 'Give clients private access to milestones, deliverables, file sharing, and approvals.',
    techStack: ['React', 'Django', 'PostgreSQL', 'Amazon S3'],
  },
]

function Services() {
  return (
    <section className="capabilities" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading">
          <span className="section-number mono">FULL-STACK DEVELOPMENT</span>
        </div>

        <div className="project-intro">
          <h2 id="services-title">What I can <span>build for you.</span></h2>
          <p>Websites and applications for selling online, managing operations, and serving customers.</p>
        </div>

        <div className="capabilities-grid">
          {services.map((service) => (
            <article className="capability-card capability-software" key={service.name}>
              <div className="capability-content">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>

              <p className="tech-label mono">EXPECTED TECH STACK</p>
              <ul className="capability-skills" aria-label="Expected tech stack">
                {service.techStack.map((technology) => (
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
