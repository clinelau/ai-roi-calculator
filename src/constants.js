export const PS_PACKAGES = [
  {
    id: 'foundation',
    name: 'Agentic Foundation',
    cost: 1_600_000,
    tagline: 'Baseline AI implementation',
  },
  {
    id: 'acceleration',
    name: 'Agentic Acceleration',
    cost: 2_700_000,
    tagline: 'Scaled AI adoption',
  },
  {
    id: 'transformation',
    name: 'Agentic Transformation',
    cost: 3_700_000,
    tagline: 'Enterprise-wide AI',
  },
]

// Assumptions for an implementation without Salesforce Professional Services
export const WITHOUT_PS = {
  adoptionRate: 0.33,
  productivityCapture: 0.50,
  year1RampFactor: 0.25,
}

// Assumptions for an implementation with Salesforce Professional Services
export const WITH_PS = {
  adoptionRate: 0.82,
  productivityCapture: 0.75,
  year1RampFactor: 0.80,
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
    claim: '82% effective adoption with structured PS reflects high-CM project outcomes',
    citation: 'Derived from Prosci PCT Model research — high change management maturity benchmarks',
  },
  {
    id: 4,
    claim: 'Productivity capture rates (50% vs 75%) reflect time recapture efficiency with/without structured rollout',
    citation: 'McKinsey, "The economic potential of generative AI," 2023',
  },
]
