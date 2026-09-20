export interface InputField {
  key: string
  label: string
  type: 'input' | 'text' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "BrandPulse",
  slug: "brandpulse-ai",
  productId: "PROD_3aeIG4bQvdmYBct7u9A3Ew",
  priceMonthly: 29,
  yearlyProductId: "PROD_60Vti6orQCSOY4YC46E8mP",
  priceYearly: 290,

  checkoutUrl: "https://pancake.waffo.ai/store/lixingliang-ai-tools-6cilbw8v/checkout/cs_f50ac0be-cd3a-1e21-791e-3c3e6da122c2",
  tagline: "Know when ChatGPT, Perplexity & Claude cite your brand.",
  description: "Enter your brand and a few competitors; see how often leading LLMs mention you across key queries. For growth and marketing leads tracking AI-search visibility (GEO) as buyers shift from Google to LLM answers.",
  toolTitle: "Scan brand visibility",
  resultLabel: "Visibility report",
  ctaLabel: "Scan",
  features: [
  "Multi-LLM tracking",
  "Weekly + competitor gap",
  "Alerts (Pro)",
  "No code"
],
  inputs: [
  {
    "key": "brand",
    "label": "Your brand",
    "type": "input",
    "placeholder": "e.g. Acme"
  },
  {
    "key": "competitors",
    "label": "Competitors (optional, comma/line separated)",
    "type": "textarea",
    "placeholder": "Competitor A, Competitor B"
  },
  {
    "key": "queries",
    "label": "Queries to track (one per line)",
    "type": "textarea",
    "placeholder": "best tools for X\nhow to do Y"
  }
] as InputField[],
  definitionLead: "BrandPulse tracks how often leading LLMs (ChatGPT, Perplexity, Claude) mention your brand versus competitors across key queries — GEO visibility for growth leads as buyers shift from classic search to AI answers.",
  geoFaq: [
    { q: "What is BrandPulse?", a: "A GEO tool showing how often LLMs cite your brand across key queries versus competitors." },
    { q: "Which engines?", a: "Multi-LLM tracking across ChatGPT, Perplexity, and Claude." },
    { q: "What is the competitor gap?", a: "A weekly view of queries where rivals get cited and you do not." },
    { q: "Are there alerts?", a: "Pro tier alerts flag shifts in AI-search visibility." },
    { q: "Do I need code?", a: "No. Enter brands and review reports." },
    { q: "Is this a Google rank tracker?", a: "No. It measures LLM citation / answer-engine visibility, not classic SERP positions." },
  ],
  systemPrompt: "You are a GEO (AI-search visibility) analyst. Given a brand, competitors, and a set of queries, report how often leading LLMs (ChatGPT, Perplexity, Claude) mention the brand vs competitors across those queries, and surface citation gaps.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "1 brand, weekly scan"
  },
  {
    "tier": "Pro",
    "price": "$39/mo",
    "desc": "5 brands, daily + gap"
  },
  {
    "tier": "Team",
    "price": "$99/mo",
    "desc": "25 brands, API + alerts"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const brand = (inputs['brand'] || 'Your brand').trim() || 'Your brand'
  const comps = (inputs['competitors'] || '').split(/[,\n]/).map(s => s.trim()).filter(Boolean)
  const queries = (inputs['queries'] || '').split(/\n/).map(s => s.trim()).filter(Boolean)
  let out = 'AI-SEARCH VISIBILITY - ' + brand + '\n\n'
  const llms = ['ChatGPT', 'Perplexity', 'Claude']
  llms.forEach(m => {
    const score = (brand.length * 7 + m.length * 3) % 11
    out += m + ': mentioned in ' + score + '/10 sampled queries ' + (score > 6 ? '[strong]' : score > 3 ? '[present]' : '[weak]') + '\n'
  })
  if (comps.length) {
    out += '\nCompetitor gap:\n'
    comps.forEach(c => out += '  ' + c + ': ' + ((c.length * 5) % 11) + '/10\n')
  }
  out += '\n--- (Mock heuristic. Pro scans real LLM answers daily + competitor gap reports.)'
  return out
}
}
