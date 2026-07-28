import { describe, expect, it } from "vitest";
import { filterOpportunities, groupByStage, summarize } from "./analytics";
import { opportunities } from "./data";

describe("job-search analytics", () => {
  it("summarizes the synthetic portfolio", () => {
    expect(summarize(opportunities)).toEqual({ active: 7, interviews: 2, weightedFit: 88, lateStage: 3 });
  });

  it("returns every pipeline stage in operating order", () => {
    expect(groupByStage(opportunities).map((group) => group.stage)).toEqual([
      "Research", "Applied", "Conversation", "Interview", "Offer",
    ]);
  });

  it("filters across company, role, and operating metadata", () => {
    expect(filterOpportunities(opportunities, "healthcare")).toHaveLength(1);
    expect(filterOpportunities(opportunities, "founder")).toHaveLength(3);
    expect(filterOpportunities(opportunities, "no-match")).toEqual([]);
  });
});
