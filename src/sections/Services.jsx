const services = [
  {
    name: 'E-commerce Store',
    description: 'Sell online and manage products, inventory, coupons, orders, and refunds from one dashboard. Shoppers can find products, check out securely, receive order emails, and track shipments.',
    techStack: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Razorpay',
      'Shiprocket',
      'React',
      'Tailwind CSS',
      'Next.js Route Handlers',
      'Prisma',
      'Auth.js',
      'Cloudinary',
      'Resend',
      'Meilisearch',
      'Redis',
      'BullMQ',
      'GA4',
      'Sentry',
      'Vitest',
      'Playwright',
      'Vercel',
      'GitHub Actions',
    ],
  },
  {
    name: 'School ERP',
    description: 'Manage student records, attendance, exams, report cards, and fees in one place. Administrators, teachers, and parents get role-based dashboards, with document uploads, online fee collection, and automated reminders.',
    techStack: [
      'React',
      'Django',
      'PostgreSQL',
      'Django REST Framework',
      'Razorpay',
      'TypeScript',
      'Tailwind CSS',
      'Django ORM',
      'Django Auth',
      'Django REST Framework permissions',
      'WeasyPrint',
      'openpyxl',
      'Amazon S3',
      'Django Email',
      'Amazon SES',
      'Celery',
      'Redis',
      'pytest',
      'Playwright',
      'Docker',
      'GitHub Actions',
      'Sentry',
    ],
  },
  {
    name: 'Appointment Booking System',
    description: 'Customers can view available slots, book or reschedule an appointment, and receive email reminders. Staff can manage working hours, blocked dates, and bookings from a shared calendar.',
    techStack: [
      'React',
      'Node.js',
      'PostgreSQL',
      'FullCalendar',
      'Nodemailer',
      'TypeScript',
      'Tailwind CSS',
      'Express',
      'Prisma',
      'Auth.js',
      'Redis',
      'BullMQ',
      'Vitest',
      'Playwright',
      'Docker',
      'GitHub Actions',
    ],
  },
  {
    name: 'Inventory & Billing Dashboard',
    description: 'Track stock by location, record purchases and sales, and flag items that need restocking. Staff can generate PDF invoices and export stock and sales reports for reconciliation.',
    techStack: [
      'React',
      'Express',
      'MySQL',
      'PDFKit',
      'ExcelJS',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Prisma',
      'Auth.js',
      'Recharts',
      'Vitest',
      'Playwright',
      'Docker',
      'GitHub Actions',
    ],
  },
  {
    name: 'Lead Management CRM',
    description: 'Capture leads from enquiry forms, assign owners, and move deals through a pipeline. Sales teams can set follow-up reminders, log conversations, and review conversion reports.',
    techStack: [
      'React',
      'Express',
      'PostgreSQL',
      'Recharts',
      'Resend',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Prisma',
      'Auth.js',
      'dnd-kit',
      'Redis',
      'BullMQ',
      'Vitest',
      'Playwright',
      'Docker',
      'GitHub Actions',
    ],
  },
  {
    name: 'Personal Blog & CMS',
    description: 'Publish a searchable blog with categories, tags, and author pages. Editors can save drafts, preview posts, and manage images. Public posts include metadata for search and sharing.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Payload CMS',
      'PostgreSQL',
      'Amazon S3',
      'React',
      'Tailwind CSS',
      'Vitest',
      'Playwright',
      'Docker',
      'GitHub Actions',
    ],
  },
  {
    name: 'Restaurant Ordering Website',
    description: 'Customers can browse a menu, customize items, and place pickup orders. A live kitchen dashboard shows new orders and lets staff mark them as preparing or ready for pickup.',
    techStack: [
      'React',
      'Node.js',
      'Socket.IO',
      'PostgreSQL',
      'Razorpay',
      'TypeScript',
      'Tailwind CSS',
      'Express',
      'Prisma',
      'Auth.js',
      'Vitest',
      'Playwright',
      'Docker',
      'GitHub Actions',
    ],
  },
  {
    name: 'Event Registration Portal',
    description: 'Publish event details, manage seat limits, and email QR tickets to attendees. Organizers can scan tickets at the venue and export attendance reports.',
    techStack: [
      'Next.js',
      'PostgreSQL',
      'qrcode',
      'ZXing',
      'Nodemailer',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'Auth.js',
      'ExcelJS',
      'Vitest',
      'Playwright',
      'Vercel',
      'GitHub Actions',
    ],
  },
  {
    name: 'Client Portal',
    description: 'Clients can sign in to view milestones, download deliverables, and approve work. Teams can share files and send updates within a workspace that only the assigned client can access.',
    techStack: [
      'React',
      'Django',
      'PostgreSQL',
      'Amazon S3',
      'Amazon SES',
      'TypeScript',
      'Tailwind CSS',
      'Django REST Framework',
      'Django Auth',
      'Celery',
      'Redis',
      'pytest',
      'Playwright',
      'Docker',
      'GitHub Actions',
      'Sentry',
    ],
  },
]

function Services({ onEnquire }) {
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
          {services.map((service, index) => (
            <article className="capability-card capability-software" key={service.name}>
              <div className="capability-content">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>

              <div className="service-stack">
                <h4 className="service-stack-heading mono" id={`service-stack-${index}`}>
                  Expected Tech Stack
                </h4>
                <ul className="capability-skills" aria-labelledby={`service-stack-${index}`}>
                  {service.techStack.slice(0, 5).map((technology) => (
                    <li className="skill-item" key={technology}>{technology}</li>
                  ))}
                </ul>
                <details className="service-stack-details">
                  <summary>
                    <span className="stack-collapsed-label">View full stack</span>
                    <span className="stack-expanded-label">Hide full stack</span>
                  </summary>
                  <ul className="capability-skills" aria-label="Additional expected tools">
                    {service.techStack.slice(5).map((technology) => (
                      <li className="skill-item" key={technology}>{technology}</li>
                    ))}
                  </ul>
                </details>
              </div>

              <a
                className="service-enquiry"
                href="#contact-form"
                onClick={() => onEnquire(service.name)}
                aria-label={`Enquire about ${service.name}`}
              >
                Enquire about this <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
