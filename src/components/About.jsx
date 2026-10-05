import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" ref={ref} className={`section fade-section${inView ? ' in-view' : ''}`}>
      <div className="container">
        <h2 className="section-heading">About</h2>
        <div className="about-content">
          <p>
            I'm studying Computer Engineering and currently going through data
            science training with DEPI. Most of my time goes into programming,
            building projects, and figuring out how different systems and
            technologies fit together.
          </p>
          <p>
            I've worked with Python, C, and Java across academic and personal
            projects — from building AI-powered tools to lower-level systems
            programming. I'm also getting into cloud computing and machine learning.
          </p>
          <p>
            I learn best by building things. If something interests me, I'll
            usually end up making a project out of it.
          </p>
        </div>
      </div>
    </section>
  )
}
