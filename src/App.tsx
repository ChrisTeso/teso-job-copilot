import { useMemo, useState } from "react";
import { filterOpportunities, groupByStage, summarize } from "./analytics";
import { opportunities, type Opportunity } from "./data";

function Metric({ label, value, detail }: { label: string; value: string | number; detail: string }) {
  return <article className="metric"><span>{label}</span><strong>{value}</strong><small>{detail}</small></article>;
}

function OpportunityCard({ item }: { item: Opportunity }) {
  return (
    <article className="opportunity-card">
      <div className="fit-ring" aria-label={`${item.fit}% fit`}><strong>{item.fit}</strong><span>FIT</span></div>
      <div className="opportunity-main">
        <div className="eyebrow-row"><span>{item.category}</span><span>{item.appliedOn}</span></div>
        <h3>{item.role}</h3><p className="company">{item.company}</p>
        <div className="card-meta"><span>{item.compensation}</span><span>{item.contactRole}</span></div>
        <div className="next-action"><span>Next action</span><strong>{item.nextAction}</strong><em>{item.due}</em></div>
      </div>
    </article>
  );
}

function App() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => filterOpportunities(opportunities, query), [query]);
  const summary = summarize(opportunities);
  const groups = groupByStage(filtered);

  return (
    <main className="shell">
      <header className="hero">
        <div><p className="kicker">EXECUTIVE SEARCH OPERATING SYSTEM</p><h1>Teso Job Copilot</h1><p className="subtitle">A synthetic showcase of a high-intent career pipeline—prioritized by fit, leverage, and next action.</p></div>
        <div className="privacy-badge"><span>◆</span><div><strong>PUBLIC DEMO</strong><small>100% synthetic records</small></div></div>
      </header>

      <section className="metrics" aria-label="Pipeline summary">
        <Metric label="ACTIVE PIPELINE" value={summary.active} detail="qualified opportunities" />
        <Metric label="LATE STAGE" value={summary.lateStage} detail="interviews + offers" />
        <Metric label="PORTFOLIO FIT" value={`${summary.weightedFit}%`} detail="weighted alignment" />
        <Metric label="INTERVIEWS" value={summary.interviews} detail="in active preparation" />
      </section>

      <section className="control-bar">
        <div><span className="live-dot" /> Opportunity command center</div>
        <label><span>Search</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Company, role, stage…" /></label>
      </section>

      <section className="pipeline" aria-label="Opportunity pipeline">
        {groups.map((group) => (
          <section className="stage" key={group.stage}>
            <header><div><span>{group.stage}</span><strong>{group.items.length}</strong></div><i /></header>
            <div className="stage-list">
              {group.items.map((item) => <OpportunityCard item={item} key={item.id} />)}
              {!group.items.length && <div className="empty">No matching opportunities</div>}
            </div>
          </section>
        ))}
      </section>

      <footer><span>Decision support, not application automation.</span><span>No real companies, people, links, or candidate data.</span></footer>
    </main>
  );
}

export default App;

