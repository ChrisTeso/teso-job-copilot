export type Stage = "Research" | "Applied" | "Conversation" | "Interview" | "Offer";

export type Opportunity = {
  id: string;
  company: string;
  role: string;
  category: "AI Product" | "Product Leadership" | "Founder-adjacent";
  stage: Stage;
  fit: number;
  compensation: string;
  nextAction: string;
  due: string;
  contactRole: string;
  appliedOn: string;
};

// Every record is deliberately fictional and exists only for this public demo.
export const opportunities: Opportunity[] = [
  { id: "opp-01", company: "Northstar AI", role: "VP, AI Products", category: "AI Product", stage: "Interview", fit: 94, compensation: "$260K–$310K + equity", nextAction: "Prepare architecture narrative", due: "Today", contactRole: "Founder", appliedOn: "2026-07-15" },
  { id: "opp-02", company: "Aster Health", role: "Chief Product Officer", category: "Product Leadership", stage: "Conversation", fit: 91, compensation: "$250K–$295K + equity", nextAction: "Send marketplace thesis", due: "Tomorrow", contactRole: "Executive recruiter", appliedOn: "2026-07-17" },
  { id: "opp-03", company: "Ember Systems", role: "Head of Product, Agents", category: "AI Product", stage: "Applied", fit: 89, compensation: "$235K–$275K + equity", nextAction: "Identify founder connection", due: "Jul 30", contactRole: "No contact yet", appliedOn: "2026-07-20" },
  { id: "opp-04", company: "HarborWorks", role: "GM, Marketplace", category: "Founder-adjacent", stage: "Offer", fit: 87, compensation: "$245K–$285K + equity", nextAction: "Model equity scenarios", due: "Aug 1", contactRole: "CEO", appliedOn: "2026-07-08" },
  { id: "opp-05", company: "Juniper Cloud", role: "SVP, Product Innovation", category: "Product Leadership", stage: "Research", fit: 84, compensation: "$270K–$330K + equity", nextAction: "Assess operating model", due: "Aug 2", contactRole: "Board advisor", appliedOn: "2026-07-24" },
  { id: "opp-06", company: "Meridian Labs", role: "Product Lead, Healthcare AI", category: "AI Product", stage: "Interview", fit: 92, compensation: "$230K–$270K + equity", nextAction: "Draft 30/60/90 plan", due: "Jul 31", contactRole: "Hiring manager", appliedOn: "2026-07-12" },
  { id: "opp-07", company: "Atlas Foundry", role: "Venture Studio President", category: "Founder-adjacent", stage: "Conversation", fit: 86, compensation: "$240K–$290K + carry", nextAction: "Share venture-building cases", due: "Aug 4", contactRole: "Managing partner", appliedOn: "2026-07-22" },
  { id: "opp-08", company: "Signal Ridge", role: "VP, Platform Product", category: "Product Leadership", stage: "Applied", fit: 82, compensation: "$225K–$260K + equity", nextAction: "Follow up after five days", due: "Aug 5", contactRole: "Talent partner", appliedOn: "2026-07-25" }
];

