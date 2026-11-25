const steps = [
  {
    title: 'Tell me what you need',
    description: 'Share what your business needs to sell, manage, or automate.',
  },
  {
    title: 'Review the scope',
    description: 'We’ll agree on the features, timeline, and price before work starts.',
  },
  {
    title: 'Try the preview',
    description: 'Test your website or app and share feedback before launch.',
  },
]

export default function WorkingTogether() {
  return (
    <section className="capabilities work-process" aria-labelledby="work-process-title">
      <div className="container">
        <div className="project-intro">
          <h2 id="work-process-title">How we’ll <span>work together.</span></h2>
        </div>

        <ol className="work-process-steps">
          {steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
