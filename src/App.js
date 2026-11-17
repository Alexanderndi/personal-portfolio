import { useState } from "react";
import "./App.css";
import { ProjectVisual } from "./components/ProjectVisual";
import WorkPage from "./WorkPage";
import logo from "./assets/img/ndifreke-logo.png";

const impactStats = [
  { value: "09+", label: "years building software" },
  { value: "99.9%", label: "platform uptime delivered" },
  { value: "35%", label: "faster response times" },
  { value: "40%", label: "shorter release cycles" },
];

const systems = [
  {
    number: "01",
    eyebrow: "NBA × Andela / 2025—now",
    title: "Basketball Africa League digital experiences",
    description:
      "Leading frontend architecture for BAL web applications: translating product and design intent into resilient React and Next.js experiences built for high-attention, live-event moments.",
    tags: ["React", "Next.js", "WordPress", "Performance"],
    result: "Architecture · production support · scale",
    visual: "bal",
    featured: true,
  },
  {
    number: "02",
    eyebrow: "Danholsen / 2023—2024",
    title: "High-load transaction services",
    description:
      "Designed Java and Spring Boot microservices with PostgreSQL, Kafka, RabbitMQ, Docker, Kubernetes, and AWS — with a focus on predictable performance and operational confidence.",
    tags: ["Java", "Spring Boot", "Kafka", "Kubernetes"],
    result: "30% faster queries · 99.9% uptime",
    visual: "pipeline",
  },
  {
    number: "03",
    eyebrow: "Cleaques / 2025—now",
    title: "Livestreaming & operations platforms",
    description:
      "Leading a cross-functional engineering team through the design and delivery of a livestreaming product and role-based operational dashboards.",
    tags: ["Technical leadership", "Cloud-native", "CI/CD", "Dashboards"],
    result: "Direction · delivery · team leverage",
    visual: "operations",
  },
  {
    number: "04",
    eyebrow: "ABBS Consult / CTO & Co-Founder",
    title: "A founder-built digital front door",
    description:
      "Built the ABBS Consult platform around a clear service model: connected digital workplaces, Microsoft 365, SharePoint, responsible AI, and practical support for teams in motion.",
    tags: ["Founder-built", "Product direction", "Content architecture", "Delivery"],
    result: "CTO · co-founder · product system",
    visual: "abbs",
    founder: true,
  },
];

const expertise = [
  {
    index: "01",
    title: "Product surfaces",
    items: "React · Next.js · TypeScript · JavaScript · Angular",
  },
  {
    index: "02",
    title: "Backend systems",
    items: "Java · Spring Boot · PHP · Symfony · Laravel · Node.js",
  },
  {
    index: "03",
    title: "Interfaces & data",
    items: "REST · GraphQL · PostgreSQL · relational design · APIs",
  },
  {
    index: "04",
    title: "Delivery at scale",
    items: "AWS · Docker · Kubernetes · Kafka · CI/CD · testing",
  },
];

const journey = [
  {
    date: "2025—now",
    role: "Senior Software Engineer",
    company: "National Basketball Association (NBA)",
    location: "United States · through Andela",
  },
  {
    date: "2025—now",
    role: "Software Engineering Team Lead",
    company: "Cleaques",
    location: "Lagos, Nigeria",
  },
  {
    date: "2022—2024",
    role: "Senior Backend Engineer",
    company: "Inchcape Digital",
    location: "Bogotá, Colombia",
  },
  {
    date: "2021—2023",
    role: "Full Stack Engineer",
    company: "JARsoft Solutions Limited",
    location: "Lagos, Nigeria",
  },
  {
    date: "2018—2021",
    role: "Full Stack Engineer",
    company: "0’seven IT Solutions",
    location: "Lagos, Nigeria",
  },
  {
    date: "2017—2018",
    role: "Software Developer",
    company: "Nexus Capital Asset Management",
    location: "France",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu}>
            <img className="brand-logo" src={logo} alt="" aria-hidden="true" />
            <span className="brand-name">Ndifreke Alexander</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} id="main-nav">
            <a href="/work" onClick={closeMenu}>Selected work</a>
            <a href="#expertise" onClick={closeMenu}>Expertise</a>
            <a href="#journey" onClick={closeMenu}>Journey</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" onClick={closeMenu}>Resume</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a conversation <Arrow /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> Senior software engineer · Lagos / global</p>
              <h1>Systems that <em>hold up</em> when the stakes are real.</h1>
              <p className="hero-lede">
                I’m Ndifreke Alexander — a senior engineer building reliable product surfaces, APIs, and cloud-native platforms across Java, React, PHP, and modern infrastructure.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">See selected work <Arrow /></a>
                <a className="text-link" href="mailto:jackson.ndialex@gmail.com">Let’s talk <Arrow /></a>
              </div>
              <div className="hero-current">
                <span className="status-dot" />
                <span>Currently</span>
                <strong>Building BAL digital experiences with the NBA through Andela</strong>
              </div>
            </div>

            <div className="hero-console" aria-label="Engineering profile summary">
              <div className="console-bar">
                <span className="console-dots"><i /><i /><i /></span>
                <span>ndifreke / systems.log</span>
                <span className="console-index">[01]</span>
              </div>
              <div className="console-body">
                <p className="console-comment">{"// the work behind the work"}</p>
                <p className="console-command"><span>const</span> operatingPrinciple =</p>
                <p className="console-value">“Make complex systems feel inevitable.”</p>
                <div className="console-divider" />
                <div className="console-row"><span>focus</span><strong>architecture / APIs / DX</strong></div>
                <div className="console-row"><span>mode</span><strong>lead · build · improve</strong></div>
                <div className="console-row"><span>signal</span><strong>calm under complexity</strong></div>
                <div className="console-footer"><span className="console-pulse" /> shipping thoughtful software</div>
              </div>
            </div>
          </div>

          <div className="hero-grid-lines" aria-hidden="true" />
        </section>

        <section className="impact-strip" aria-label="Selected engineering outcomes">
          <div className="container impact-grid">
            {impactStats.map((stat) => (
              <div className="impact-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-heading section-heading-split">
              <div>
                <p className="section-kicker">01 / selected systems</p>
                <h2>Work with a point of view.</h2>
              </div>
              <div className="section-heading-side">
                <p>Strong engineering is more than shipping features. It is making the next feature, incident, and decision easier to handle.</p>
                <a className="work-index-link" href="/work">Open the full work index <Arrow /></a>
              </div>
            </div>

            <div className="systems-grid">
              {systems.map((system) => (
                <article className={`system-card ${system.featured ? "system-card-featured" : ""} ${system.founder ? "system-card-founder" : ""}`} key={system.number}>
                  <div className="system-topline">
                    <span>{system.number}</span>
                    <span>{system.eyebrow}</span>
                  </div>
                  <ProjectVisual type={system.visual} />
                  <h3>{system.title}</h3>
                  <p>{system.description}</p>
                  <ul className="tag-list">
                    {system.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <div className="system-result"><span /> {system.result}</div>
                  <span className="card-arrow" aria-hidden="true"><Arrow /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="principles-section">
          <div className="container principles-grid">
            <div>
              <p className="section-kicker">02 / how I work</p>
              <h2>From ambiguous brief to dependable system.</h2>
              <p className="principles-intro">The best outcome is not the cleverest implementation. It is a system that stays understandable as the product, team, and traffic grow.</p>
            </div>
            <div className="principles-steps">
              <div className="principle-step"><span>01</span><div><h3>Shape</h3><p>Turn requirements into a system model, clear boundaries, and decisions the team can stand behind.</p></div></div>
              <div className="principle-step"><span>02</span><div><h3>Ship</h3><p>Build in small, testable increments with the product context and operational path in view.</p></div></div>
              <div className="principle-step"><span>03</span><div><h3>Strengthen</h3><p>Use observability, feedback, and thoughtful refactoring to make every release a little safer.</p></div></div>
            </div>
          </div>
        </section>

        <section className="section expertise-section" id="expertise">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">03 / technical range</p>
              <h2>The toolkit is broad.<br /><em>The thinking is consistent.</em></h2>
            </div>
            <div className="expertise-grid">
              {expertise.map((area) => (
                <article className="expertise-card" key={area.index}>
                  <span>{area.index}</span>
                  <h3>{area.title}</h3>
                  <p>{area.items}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section journey-section" id="journey">
          <div className="container journey-grid">
            <div className="journey-intro">
              <p className="section-kicker">04 / the journey</p>
              <h2>Senior by title.<br /><em>Useful by default.</em></h2>
              <p>A career across product teams, backend systems, digital platforms, and engineering leadership — always close to the problem and the people solving it.</p>
              <a className="text-link" href="https://www.linkedin.com/in/ndifrekeeduo" target="_blank" rel="noreferrer">View LinkedIn <Arrow /></a>
            </div>
            <div className="timeline">
              {journey.map((item, index) => (
                <div className={`timeline-item ${index === 0 ? "timeline-item-current" : ""}`} key={`${item.company}-${item.role}`}>
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-marker"><span /></div>
                  <div className="timeline-copy">
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                    <span>{item.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-card">
            <div>
              <p className="section-kicker">05 / make contact</p>
              <h2>Bring the hard problem.</h2>
              <p className="contact-copy">If you are building something ambitious, untangling a system, or growing an engineering team, I’d like to hear what you are working on.</p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:jackson.ndial@gmail.com">jackson.ndial@gmail.com <Arrow /></a>
              <div className="resume-actions">
                <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <Arrow /></a>
                <a className="text-link" href="/resume.pdf" download>Download PDF <Arrow /></a>
              </div>
              <div className="contact-links">
                <a href="https://www.linkedin.com/in/ndifrekeeduo" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
                <a href="https://github.com/Alexanderndi" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>Ndifreke Alexander / Senior Software Engineer</span>
          <span>© 2026 · Built with intent</span>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return path === "/work" ? <WorkPage /> : <HomePage />;
}

export default App;
