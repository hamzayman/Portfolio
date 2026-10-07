export default function Hero() {
  return (
    <section id="hero" className="section section--hero">
      <div className="hero-dots" aria-hidden="true" />
      <div className="container">
        <div className="hero-intro">
          <div className="hero-photo-wrap">
            <img src="/photo.jpg" alt="Hamza Eid" className="hero-photo" />
          </div>
          <div className="hero-text">
            <h1 className="hero-name">Hamza Eid</h1>
            <p className="hero-title">
              Computer Engineering Student
              <span className="sep"> · </span>
              Data Science Trainee
              <span className="sep"> · </span>
              Developer
            </p>
          </div>
        </div>
        <p className="hero-desc">
          I'm a Computer Engineering student currently training in data science.
          I enjoy building software, understanding how systems work, and turning
          ideas into working projects.
        </p>
        <div className="hero-links">
          <a href="https://github.com/" className="hero-link" target="_blank" rel="noopener noreferrer">
            GitHub<span className="arrow"> ↗</span>
          </a>
          <a href="https://linkedin.com/" className="hero-link" target="_blank" rel="noopener noreferrer">
            LinkedIn<span className="arrow"> ↗</span>
          </a>
          <a href="mailto:hamza99ayman250@gmail.com" className="hero-link">
            Email<span className="arrow"> ↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
