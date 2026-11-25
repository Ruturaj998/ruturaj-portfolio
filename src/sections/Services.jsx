const services = [
  {
    name: 'E-commerce Store',
    description: 'A full-stack online store with product search, filters, a cart, and secure checkout. Customers can track shipments and receive order emails. The admin dashboard manages products, inventory, coupons, orders, and refunds.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Next.js Route Handlers',
      'PostgreSQL',
      'Prisma',
      'Auth.js',
      'Razorpay',
      'Cloudinary',
      'Shiprocket',
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
    description: 'A school management system with role-based dashboards for administrators, teachers, and parents. It brings together student records, attendance, exams, report cards, and fees, with document uploads, online fee collection, and automated reminders.',
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
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
      'Razorpay',
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
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Auth.js',
      'FullCalendar',
      'Redis',
      'BullMQ',
      'Nodemailer',
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
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MySQL',
      'Prisma',
      'Auth.js',
      'PDFKit',
      'ExcelJS',
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
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Auth.js',
      'dnd-kit',
      'Recharts',
      'Redis',
      'BullMQ',
      'Resend',
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
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Payload CMS',
      'PostgreSQL',
      'Amazon S3',
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
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'Socket.IO',
      'PostgreSQL',
      'Prisma',
      'Auth.js',
      'Razorpay',
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
      'React',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Prisma',
      'Auth.js',
      'qrcode',
      'ZXing',
      'Nodemailer',
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
      'TypeScript',
      'Tailwind CSS',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'Django Auth',
      'Amazon S3',
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
