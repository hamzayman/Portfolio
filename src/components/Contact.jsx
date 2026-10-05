import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" ref={ref} className={`section fade-section${inView ? ' in-view' : ''}`}>
      <div className="container">
        <h2 className="section-heading">Get in Touch</h2>
        <p className="contact-desc">
          Have an interesting project or just want to talk tech? I'm always happy to connect.
        </p>
        <div className="contact-links">
          <a href="mailto:hamza99ayman250@gmail.com" className="contact-link">
            <span className="contact-link-label">Email</span>
            <span className="contact-link-value">hamza99ayman250@gmail.com</span>
          </a>
          <a href="https://github.com/" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-link-label">GitHub</span>
            <span className="contact-link-value">github.com/hamzayman</span>
          </a>
          <a href="https://linkedin.com/" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-link-label">LinkedIn</span>
            <span className="contact-link-value">linkedin.com/in/hamza--eid</span>
          </a>
        </div>
      </div>
    </section>
  )
}
