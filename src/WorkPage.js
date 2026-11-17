import { ProjectVisual } from "./components/ProjectVisual";
import "./App.css";
import logo from "./assets/img/ndifreke-logo.png";

const caseStudies = [
  {
    number: "01",
    eyebrow: "ABBS Consult / CTO & Co-Founder / ongoing",
    type: "abbs",
    title: "A founder-built digital front door",
    summary: "A focused company platform for ABBS Consult, a Lagos-based technology consultancy helping organisations get more from Microsoft 365, SharePoint, responsible AI, and connected digital workplaces.",
    ownership: "As CTO and Co-Founder, I personally shaped the product direction, information architecture, interface system, service storytelling, implementation, deployment, and ongoing iteration.",
    outcome: "A clear, people-first digital presence that turns a complex service catalogue into a confident path from first impression to conversation.",
    stack: ["Founder-built", "Product direction", "Content architecture", "Microsoft 365", "SharePoint"],
  },
  {
    number: "02",
    eyebrow: "NBA × Andela / 2025—now",
    type: "bal",
    title: "Basketball Africa League digital experiences",
    summary: "A frontend architecture and delivery practice for BAL web applications — designed to keep product, editorial, and live-event needs moving together.",
    ownership: "Frontend architecture, React and Next.js delivery, WordPress custom post types and editorial workflows, technical feasibility, performance, and production support.",
    outcome: "Responsive, dynamic experiences built for audiences at scale, with the calm operational support live moments demand.",
    stack: ["React", "Next.js", "WordPress", "JavaScript", "Performance"],
  },
  {
    number: "03",
    eyebrow: "Danholsen / 2023—2024",
    type: "pipeline",
    title: "High-load transaction services",
    summary: "A microservices platform shaped around efficient data access, asynchronous processing, and deployment confidence.",
    ownership: "Java and Spring Boot services, PostgreSQL schemas and indexing, REST APIs, Kafka and RabbitMQ workflows, Docker, Kubernetes, AWS, CI/CD, security, and production debugging.",
    outcome: "30% faster query execution, 35% faster response speed, 40% shorter release cycles, 70% fewer vulnerabilities, and 99.9% uptime.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "RabbitMQ", "AWS"],
  },
  {
    number: "04",
    eyebrow: "Cleaques / 2025—now",
    type: "operations",
    title: "Livestreaming & operations platforms",
    summary: "A team-led build across a livestreaming product and role-based dashboards for the people operating it.",
    ownership: "Technical direction, system design, cross-functional planning, cloud-native delivery, CI/CD workflows, production support, and the balance between delivery speed and maintainability.",
    outcome: "A clearer path from product requirements to coordinated engineering work — with the team structure and technical direction to keep delivery moving.",
    stack: ["Technical leadership", "Cloud-native", "CI/CD", "Dashboards", "Agile"],
  },
  {
    number: "05",
    eyebrow: "Inchcape Digital + JARsoft / 2021—2024",
    type: "pipeline",
    title: "Backend systems & full-stack platforms",
    summary: "A body of work across business-critical backend services and full-stack products, from service boundaries to user-facing delivery.",
    ownership: "Backend architecture, secure APIs, Spring Boot, Symfony, Laravel, Angular, PHP, PostgreSQL, AWS, Docker, Kubernetes, testing, code review, and technical documentation.",
    outcome: "Maintainable systems that could evolve across teams, with stronger service boundaries, repeatable delivery, and a better onboarding path for engineers.",
    stack: ["PHP", "Symfony", "Laravel", "Angular", "AWS", "Docker"],
  },
];

const workHistory = [
  { date: "2025—now", role: "Senior Software Engineer", company: "National Basketball Association (NBA)", detail: "United States · through Andela" },
  { date: "2025—now", role: "Software Engineering Team Lead", company: "Cleaques", detail: "Lagos, Nigeria" },
  { date: "2022—2024", role: "Senior Backend Engineer", company: "Inchcape Digital", detail: "Bogotá, Colombia" },
  { date: "2021—2023", role: "Full Stack Engineer", company: "JARsoft Solutions Limited", detail: "Lagos, Nigeria" },
  { date: "2021—2022", role: "Engineering Team Lead", company: "Dewolsela", detail: "Lagos, Nigeria" },
  { date: "2018—2021", role: "Full Stack Engineer", company: "0’seven IT Solutions", detail: "Lagos, Nigeria" },
  { date: "2017—2018", role: "Software Developer", company: "Nexus Capital Asset Management", detail: "France" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function WorkPage() {
  return (
    <div className="site-shell work-page">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="/">
            <img className="brand-logo" src={logo} alt="" aria-hidden="true" />
            <span className="brand-name">Ndifreke Alexander</span>
          </a>
          <nav className="site-nav work-page-nav">
            <a href="/#expertise">Expertise</a>
            <a href="/#journey">Journey</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            <a className="nav-cta" href="/">Back to home <Arrow /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="work-page-hero">
          <div className="container work-page-hero-inner">
            <p className="eyebrow"><span className="eyebrow-line" /> The work / selected systems + history</p>
            <h1>Built for the <em>long game.</em></h1>
            <div className="work-page-intro">
              <p>Real engineering work is a sequence of decisions: what to simplify, what to protect, and what to make visible. Here is the record behind the headline.</p>
              <span className="work-page-count">05 / case studies<br />07 / roles</span>
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="work-section-label"><span>01</span><span>Selected systems</span><span>Evidence over theatre</span></div>
            <div className="case-study-list">
              {caseStudies.map((project) => (
                <article className="case-study" key={project.number}>
                  <div className="case-study-visual"><ProjectVisual type={project.type} large /></div>
                  <div className="case-study-copy">
                    <div className="case-study-topline"><span>{project.number}</span><span>{project.eyebrow}</span></div>
                    <h2>{project.title}</h2>
                    <p className="case-study-summary">{project.summary}</p>
                    <div className="case-study-details">
                      <div><span>What I owned</span><p>{project.ownership}</p></div>
                      <div><span>What changed</span><p>{project.outcome}</p></div>
                    </div>
                    <ul className="tag-list case-study-tags">{project.stack.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work-history-section">
          <div className="container work-history-grid">
            <div>
              <div className="work-section-label work-section-label-dark"><span>02</span><span>Work history</span><span>Seven chapters</span></div>
              <h2>The throughline is simple: make the system, and the team, better.</h2>
              <p className="work-history-intro">From early PHP and Drupal work to senior backend engineering and technical leadership, each chapter added another layer of perspective.</p>
              <a className="text-link" href="https://www.linkedin.com/in/ndifrekeeduo" target="_blank" rel="noreferrer">Full profile on LinkedIn <Arrow /></a>
            </div>
            <div className="work-history-list">
              {workHistory.map((item, index) => (
                <div className={`work-history-item ${index === 0 ? "work-history-item-current" : ""}`} key={`${item.company}-${item.role}`}>
                  <span className="work-history-date">{item.date}</span>
                  <div className="work-history-marker"><span /></div>
                  <div><h3>{item.role}</h3><p>{item.company}</p><span>{item.detail}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="container contact-card">
            <div>
              <p className="section-kicker">03 / next chapter</p>
              <h2>Bring the hard problem.</h2>
              <p className="contact-copy">If you are building something ambitious, untangling a system, or growing an engineering team, I’d like to hear what you are working on.</p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:jackson.ndialex@gmail.com">jackson.ndialex@gmail.com <Arrow /></a>
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

export default WorkPage;
