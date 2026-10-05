import { useInView } from '../hooks/useInView'

const items = [
  { label: 'Data Science', detail: 'Training through DEPI — working with data analysis, ML, and AI tools' },
  { label: 'Cloud', detail: 'AWS Cloud Foundations — learning cloud infrastructure and services' },
  { label: 'Engineering', detail: 'Computer Engineering studies — systems, architecture, and software' },
  { label: 'AI / LLMs', detail: 'Building applications with large language models and AI APIs' },
]

const achievements = [
  <>Participated in the <strong>Agentic AI Hackathon</strong> — ACM Alexandria Student Chapter</>,
  <>Built <strong>CodeScope</strong>, an AI-powered codebase analysis tool</>,
  <>Completed <strong>AWS Cloud Foundations</strong> certificate</>,
]

export default function Learning() {
  const [ref, inView] = useInView()
  const [ref2, inView2] = useInView()

  return (
    <>
      <section id="learning" ref={ref} className={`section fade-section${inView ? ' in-view' : ''}`}>
        <div className="container">
          <h2 className="section-heading">Currently Learning &amp; Building</h2>
          <ul className="learning-list">
            {items.map(i => (
              <li key={i.label}>
                <span className="learning-label">{i.label}</span>
                <span className="learning-detail">{i.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="achievements" ref={ref2} className={`section section--achievements fade-section${inView2 ? ' in-view' : ''}`}>
        <div className="container">
          <h2 className="section-heading">Achievements</h2>
          <ul className="achievements-list">
            {achievements.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
      </section>
    </>
  )
}
