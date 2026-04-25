function ComparisonCard({ without, withPS, packageName, packageId }) {
  return (
    <div className="card comparison">
      <h2>With vs. Without Professional Services</h2>
      <p className="comparison-pkg">PS Package: <strong>{packageName}</strong></p>

      <div className="comparison-grid">
        <div className="col-header"></div>
        <div className="col-header without">Without PS</div>
        <div className="col-header with">With PS</div>

        <div className="row-label">Effective adoption rate</div>
        <div className="col-val without">{without.adoptionPct}%</div>
        <div className="col-val with">{withPS.adoptionPct}%</div>

        <div className="row-label">Year 1 value generated <sup>1</sup></div>
        <div className="col-val without">${without.year1Value.toLocaleString()}</div>
        <div className="col-val with">${withPS.year1Value.toLocaleString()}</div>

        <div className="row-label">Year 1 total investment <sup>2</sup></div>
        <div className="col-val without">${without.year1Investment.toLocaleString()}</div>
        <div className="col-val with">${withPS.year1Investment.toLocaleString()}</div>

        <div className="row-label">Year 1 net return <sup>3</sup></div>
        <div className={`col-val without ${without.year1Net < 0 ? 'negative' : 'positive'}`}>
          {without.year1Net < 0 ? '-' : '+'}${Math.abs(without.year1Net).toLocaleString()}
        </div>
        <div className={`col-val with ${withPS.year1Net < 0 ? 'negative' : 'positive'}`}>
          {withPS.year1Net < 0 ? '-' : '+'}${Math.abs(withPS.year1Net).toLocaleString()}
        </div>

        <div className="row-label">3-year net return <sup>4</sup></div>
        <div className={`col-val without ${without.threeYearNet < 0 ? 'negative' : 'positive'}`}>
          {without.threeYearNet < 0 ? '-' : '+'}${Math.abs(without.threeYearNet).toLocaleString()}
        </div>
        <div className={`col-val with ${withPS.threeYearNet < 0 ? 'negative' : 'positive'}`}>
          {withPS.threeYearNet < 0 ? '-' : '+'}${Math.abs(withPS.threeYearNet).toLocaleString()}
        </div>

        <div className="row-label">Break-even</div>
        <div className="col-val without">{without.breakEven}</div>
        <div className="col-val with">{withPS.breakEven}</div>
      </div>

      <div className="insight">
        Over 3 years, proper implementation generates{' '}
        <strong>${(withPS.threeYearNet - without.threeYearNet).toLocaleString()}</strong>{' '}
        more value than an unguided rollout.
      </div>

      {packageId === 'transformation' && (
        <div className="floor-callout">
          <strong>These figures represent a conservative floor for Agentic Transformation.</strong>{' '}
          The Innovation Lab and Experience Design outcomes expand the addressable scope of automation —
          redesigning workflows from clicks to conversations and enabling the customer to independently
          conceive and launch new agents. Those gains compound beyond what fixed multipliers can model
          and are not reflected in the numbers above.
        </div>
      )}

      <div className="legend">
        <div className="legend-item"><sup>1</sup> Dollar value of employee time recaptured by AI, adjusted for adoption rate, productivity capture, and ramp-up speed.</div>
        <div className="legend-item"><sup>2</sup> Annual AI license cost plus PS package fee (PS is a one-time cost; license recurs annually).</div>
        <div className="legend-item"><sup>3</sup> Value generated minus total investment. Negative in year 1 is normal when PS cost is included.</div>
        <div className="legend-item"><sup>4</sup> Cumulative net return across years 1, 2, and 3. Years 2 and 3 exclude the one-time PS cost, using annual license cost only.</div>
      </div>
    </div>
  )
}

export default ComparisonCard
