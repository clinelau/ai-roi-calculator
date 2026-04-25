export const PS_PACKAGES = [
  {
    id: 'foundation',
    name: 'Agentic Foundation',
    cost: 1_600_000,
    tagline: 'Governed AI foundation',
    profile: 'Right for you if: Your leadership wants to move but your org isn\'t ready to mobilize at scale. You need to prove value and establish a governed, repeatable development engine before expanding.',
  },
  {
    id: 'acceleration',
    name: 'Agentic Acceleration',
    cost: 2_700_000,
    tagline: 'Scaled AI adoption',
    profile: 'Right for you if: You\'ve piloted something but adoption is stalling. Your employees need a structured program to shift their workflows, and your architecture needs to scale beyond the pilot.',
  },
  {
    id: 'transformation',
    name: 'Agentic Transformation',
    cost: 3_700_000,
    tagline: 'Enterprise-wide AI',
    profile: 'Right for you if: Your C-suite is committed to a full operating model rewrite — shifting the entire enterprise from clicks to conversations. The question isn\'t whether, it\'s how fast.',
  },
]

// Assumptions for an implementation without Salesforce Professional Services
export const WITHOUT_PS = {
  adoptionRate: 0.33,
  productivityCapture: 0.50,
  year1RampFactor: 0.25,
}

// Per-package assumptions grounded in each tier's scope of services
export const PACKAGE_ASSUMPTIONS = {
  // Foundation: AI & Data Governance + repeatable agent development engine drives
  // consistency and trust, lifting productivity capture and adoption — but without
  // Change Management, workforce enablement is organic rather than structured.
  foundation: {
    adoptionRate: 0.68,
    productivityCapture: 0.70,
    year1RampFactor: 0.60,
  },
  // Acceleration: adds Change Management (the primary adoption driver per Prosci) and
  // Architecture & Scalability — justified by the existing McKinsey/Prosci benchmarks.
  acceleration: {
    adoptionRate: 0.82,
    productivityCapture: 0.75,
    year1RampFactor: 0.80,
  },
  // Transformation: adds Experience Design (workflows redesigned from clicks to
  // conversations, capturing higher-value work) and heavier upfront strategic investment
  // driving faster Year 1 readiness. Note: 3-year return is a conservative floor —
  // Innovation Lab and Experience Design expand the addressable scope of automation
  // beyond what fixed multipliers can model.
  transformation: {
    adoptionRate: 0.90,
    productivityCapture: 0.88,
    year1RampFactor: 0.88,
  },
}

export const SOURCES = [
  {
    id: 1,
    claim: '33% effective adoption without structured implementation',
    citation: 'McKinsey Global Survey on AI, 2023 — "only 16% of AI implementations successfully scale"',
  },
  {
    id: 2,
    claim: 'Organizations with excellent change management are 6× more likely to meet objectives',
    citation: 'Prosci Best Practices in Change Management, 11th Edition, 2023',
  },
  {
    id: 3,
    claim: 'Acceleration (82% adoption) reflects structured Change Management maturity; Foundation (68%) reflects governance-led trust without formal workforce enablement; Transformation (90%) reflects full organizational readiness and enterprise governance',
    citation: 'Derived from Prosci PCT Model research — high change management maturity benchmarks',
  },
  {
    id: 4,
    claim: 'Productivity capture reflects implementation quality: Foundation governance (70%) ensures consistent agent quality; Acceleration structured rollout (75%); Transformation Experience Design (88%) redesigns workflows from clicks to conversations, capturing higher-value work',
    citation: 'McKinsey, "The economic potential of generative AI," 2023',
  },
]
