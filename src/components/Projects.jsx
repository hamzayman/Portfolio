import { useInView } from '../hooks/useInView'

const projects = [
  {
    name: 'CodeScope',
    tag: 'AI Codebase Auditor',
    desc: (
      <>
        An AI-powered tool that analyzes GitHub repositories and helps developers
        understand unfamiliar codebases. Built during the{' '}
        <strong>Agentic AI Hackathon</strong> by ACM Alexandria Student Chapter.
      </>
    ),
    features: [
      'GitHub repository ingestion',
      'Project structure analysis',
      'Language & framework detection',
      'Dependency analysis',
      'Code quality analysis',
      'AI-generated insights',
      'Risks & recommendations',
    ],
    tech: ['Python', 'FastAPI', 'GitPython', 'AI/LLM APIs'],
    link: '#', // TODO: add actual repo URL
  },
  {
    name: 'Bank Management System',
    tag: 'Systems Programming',
    desc: 'A C-based banking system for managing users and accounts. Handles the full lifecycle of account operations with persistent file-based storage.',
    features: [
      'Login & authentication',
      'Account creation & modification',
      'Deposits & withdrawals',
      'Account transfers',
      'Search functionality',
      'Status management',
      'Report generation',
      'File-based persistence',
    ],
    tech: ['C', 'File Handling', 'Structs', 'Dynamic Memory', 'Modular Design'],
    link: '#', // TODO: add actual repo URL
  },
]

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" ref={ref} className={`section fade-section${inView ? ' in-view' : ''}`}>
      <div className="container">
        <h2 className="section-heading">Projects</h2>
        {projects.map(p => (
          <article className="project" key={p.name}>
            <div className="project-header">
              <h3 className="project-name">{p.name}</h3>
              <span className="project-tag">{p.tag}</span>
            </div>
            <p className="project-desc">{p.desc}</p>
            <ul className="project-features">
              {p.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <div className="project-meta">
              <div className="project-tech">
                {p.tech.map(t => <span key={t}>{t}</span>)}
              </div>
              <a href={p.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View on GitHub<span className="arrow"> ↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
