import type { Opportunity, Stage } from "./data";

export const activeStages: Stage[] = ["Research", "Applied", "Conversation", "Interview", "Offer"];

export function summarize(items: Opportunity[]) {
  const active = items.filter((item) => item.stage !== "Research").length;
  const interviews = items.filter((item) => item.stage === "Interview").length;
  const weightedFit = items.length
    ? Math.round(items.reduce((sum, item) => sum + item.fit, 0) / items.length)
    : 0;
  const lateStage = items.filter((item) => item.stage === "Interview" || item.stage === "Offer").length;
  return { active, interviews, weightedFit, lateStage };
}

export function groupByStage(items: Opportunity[]) {
  return activeStages.map((stage) => ({
    stage,
    items: items.filter((item) => item.stage === stage).sort((a, b) => b.fit - a.fit),
  }));
}

export function filterOpportunities(items: Opportunity[], query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return items;
  return items.filter((item) =>
    [item.company, item.role, item.category, item.stage, item.contactRole]
      .join(" ")
      .toLowerCase()
      .includes(normalized),
  );
}

