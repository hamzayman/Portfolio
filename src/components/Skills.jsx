import { useInView } from '../hooks/useInView'

const groups = [
  { title: 'Programming', items: ['Python', 'C', 'Java'] },
  { title: 'Data / AI', items: ['Data analysis', 'ML fundamentals', 'AI / LLM applications'] },
  { title: 'Development', items: ['Git & GitHub', 'FastAPI', 'GitPython'] },
  { title: 'Cloud', items: ['AWS fundamentals'] },
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" ref={ref} className={`section fade-section${inView ? ' in-view' : ''}`}>
      <div className="container">
        <h2 className="section-heading">Skills</h2>
        <div className="skills-grid">
          {groups.map(g => (
            <div className="skill-group" key={g.title}>
              <h3 className="skill-category">{g.title}</h3>
              <ul className="skill-list">
                {g.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
