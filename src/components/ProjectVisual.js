export const ProjectVisual = ({ type, large = false }) => {
  if (type === "pipeline") {
    return (
      <div className={`project-visual pipeline-visual ${large ? "project-visual-large" : ""}`} aria-label="Representative event-driven service architecture">
        <div className="visual-label">REPRESENTATIVE SYSTEM MAP</div>
        <div className="pipeline-flow">
          <div className="pipeline-node"><span>01</span><strong>REST</strong><small>request</small></div>
          <div className="pipeline-connector"><i /></div>
          <div className="pipeline-node pipeline-node-accent"><span>02</span><strong>KAFKA</strong><small>events</small></div>
          <div className="pipeline-connector"><i /></div>
          <div className="pipeline-node"><span>03</span><strong>JAVA</strong><small>services</small></div>
          <div className="pipeline-connector"><i /></div>
          <div className="pipeline-node pipeline-node-accent"><span>04</span><strong>SQL</strong><small>state</small></div>
        </div>
        <div className="pipeline-status"><span /> async processing / predictable under load</div>
      </div>
    );
  }

  if (type === "operations") {
    return (
      <div className={`project-visual operations-visual ${large ? "project-visual-large" : ""}`} aria-label="Representative operations dashboard">
        <div className="visual-label">OPERATIONS / LIVE VIEW</div>
        <div className="operations-header"><strong>platform health</strong><span><i /> all systems nominal</span></div>
        <div className="operations-grid">
          <div className="operations-chart">
            <div className="chart-title">throughput / 24h</div>
            <div className="chart-bars"><i style={{ height: "34%" }} /><i style={{ height: "57%" }} /><i style={{ height: "46%" }} /><i style={{ height: "76%" }} /><i style={{ height: "63%" }} /><i style={{ height: "90%" }} /><i style={{ height: "72%" }} /><i style={{ height: "97%" }} /></div>
            <div className="chart-axis"><span>00</span><span>12</span><span>24</span></div>
          </div>
          <div className="operations-metrics"><div><span>active streams</span><strong>18</strong></div><div><span>p95 latency</span><strong>142ms</strong></div><div><span>delivery</span><strong>99.9%</strong></div></div>
        </div>
      </div>
    );
  }

  if (type === "abbs") {
    return (
      <div className={`project-visual abbs-visual ${large ? "project-visual-large" : ""}`} aria-label="Representative ABBS Consult service platform">
        <div className="visual-label">ABBS CONSULT / PLATFORM VIEW</div>
        <div className="abbs-header"><strong>technology that moves your business forward</strong><span>lagos / nigeria</span></div>
        <div className="abbs-grid">
          <div className="abbs-intro"><small>connected thinking</small><strong>Better tools.<br /><em>Better work.</em></strong><span>people · progress · possibility</span></div>
          <div className="abbs-services">
            <div><span>01</span><strong>SharePoint</strong><small>workspaces</small></div>
            <div><span>02</span><strong>Microsoft 365</strong><small>connected tools</small></div>
            <div className="abbs-service-accent"><span>03</span><strong>AI governance</strong><small>intentional adoption</small></div>
            <div><span>04</span><strong>Intranet design</strong><small>team home</small></div>
          </div>
        </div>
        <div className="abbs-footer"><span>BUILT AROUND YOUR PEOPLE</span><span>DESIGNED FOR YOUR BUSINESS</span></div>
      </div>
    );
  }

  return (
    <div className={`project-visual bal-visual ${large ? "project-visual-large" : ""}`} aria-label="Representative Basketball Africa League digital experience">
      <div className="visual-label">BAL / DIGITAL EXPERIENCE</div>
      <div className="bal-topbar"><span>basketball africa league</span><span>live event / 2025</span></div>
      <div className="bal-stage">
        <div className="bal-copy"><small>match centre</small><strong>Where the<br /><em>game lives.</em></strong><span>scores · stories · schedules</span></div>
        <div className="bal-score"><span>Q4</span><strong>72</strong><i>—</i><strong>68</strong><span>08:31</span></div>
        <div className="bal-court"><i /><i /><i /></div>
      </div>
      <div className="bal-footer"><span>NBA × ANDELA</span><span>responsive / editorial / fast</span></div>
    </div>
  );
};
