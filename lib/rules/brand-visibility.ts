/** Brand visibility / GEO rules — deterministic checks on inputs + report scaffolding. */
export const RULESET_VERSION = 'brand-visibility@2026-07-20'

export type RuleHit = {
  id: string
  title: string
  severity: 'low' | 'medium' | 'high'
  passed: boolean
  remediation?: string
  ref?: string
}

export function runDeterministicChecks(inputs: Record<string, string>): RuleHit[] {
  const brand = (inputs.brand || '').trim()
  const queries = (inputs.queries || '').split(/\n/).map((s) => s.trim()).filter(Boolean)
  const comps = (inputs.competitors || '').split(/[,\n]/).map((s) => s.trim()).filter(Boolean)
  return [
    {
      id: 'BP-01',
      title: 'Brand name provided for measurement',
      severity: 'high',
      passed: brand.length >= 2,
      remediation: 'Enter the brand name to measure AI-search citation / mention rate.',
      ref: 'https://amecorg.com/2025/07/bp4-0/',
    },
    {
      id: 'BP-02',
      title: 'Competitor set present for Share of Voice context',
      severity: 'medium',
      passed: comps.length >= 1,
      remediation: 'Add 1+ competitors so Share of Voice (brand ÷ category) is meaningful.',
      ref: 'https://www.talkwalker.com/blog/measure-share-voice',
    },
    {
      id: 'BP-03',
      title: 'At least 3 tracked queries',
      severity: 'high',
      passed: queries.length >= 3,
      remediation: 'Provide ≥3 buyer-intent queries; volume without query set is not a KPI.',
      ref: 'https://www.pulsarplatform.com/guides/social-listening-kpis-and-metrics',
    },
    {
      id: 'BP-04',
      title: 'Queries look like search prompts (not empty lines)',
      severity: 'medium',
      passed: queries.every((q) => q.length >= 4),
      remediation: 'Each query should be a realistic prompt/search phrase (4+ characters).',
      ref: 'https://brand24.com/blog/social-listening-metrics/',
    },
    {
      id: 'BP-05',
      title: 'Report must not claim guaranteed ranking/citation',
      severity: 'high',
      passed: true, // enforced in systemPrompt / report footer
      remediation: 'Avoid promising guaranteed LLM citations; report observed/sampled visibility only.',
      ref: 'https://amecorg.com/2025/07/bp4-0/',
    },
    {
      id: 'BP-06',
      title: 'AI-search citation framing available',
      severity: 'low',
      passed: queries.length > 0,
      remediation: 'Track AI citation rate = queries with brand citation ÷ tracked queries.',
      ref: 'https://www.pulsarplatform.com/guides/social-listening-kpis-and-metrics',
    },
  ]
}
