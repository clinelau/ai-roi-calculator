function ComparisonCard({ without, withPS, packageName, packageId }) {
  return (
    <div className="card comparison">
      <div className="comparison-header">
        <h2>With vs. Without Professional Services</h2>
        <span className="comparison-pkg">{packageName}</span>
      </div>

      <div className="comparison-table">
        <div className="ct-head">
          <div className="ct-label-col"></div>
          <div className="ct-val-col without-col">Without PS</div>
          <div className="ct-val-col with-col">With PS</div>
        </div>

        <div className="ct-group">
          <div className="ct-group-label">Assumptions</div>
          <div className="ct-row">
            <div className="ct-label">Effective adoption rate</div>
            <div className="ct-val without-col">{without.adoptionPct}%</div>
            <div className="ct-val with-col">{withPS.adoptionPct}%</div>
          </div>
        </div>

        <div className="ct-group">
          <div className="ct-group-label">Year 1</div>
          <div className="ct-row">
            <div className="ct-label">
              Total investment
              <span className="ct-sublabel">License + PS fee (PS is one-time)</span>
            </div>
            <div className="ct-val without-col">${without.year1Investment.toLocaleString()}</div>
            <div className="ct-val with-col">${withPS.year1Investment.toLocaleString()}</div>
          </div>
          <div className="ct-row">
            <div className="ct-label">
              Value generated
              <span className="ct-sublabel">Time recaptured × adoption × productivity capture × ramp</span>
            </div>
            <div className="ct-val without-col">${without.year1Value.toLocaleString()}</div>
            <div className="ct-val with-col">${withPS.year1Value.toLocaleString()}</div>
          </div>
          <div className="ct-row ct-row-net">
            <div className="ct-label">Net return</div>
            <div className={`ct-val without-col ${without.year1Net < 0 ? 'negative' : 'positive'}`}>
              {without.year1Net < 0 ? '−' : '+'}${Math.abs(without.year1Net).toLocaleString()}
            </div>
            <div className={`ct-val with-col ${withPS.year1Net < 0 ? 'negative' : 'positive'}`}>
              {withPS.year1Net < 0 ? '−' : '+'}${Math.abs(withPS.year1Net).toLocaleString()}
            </div>
          </div>
        </div>

        <div className="ct-group">
          <div className="ct-group-label">3-Year Summary</div>
          <div className="ct-row ct-row-net">
            <div className="ct-label">
              Cumulative net return
              <span className="ct-sublabel">Years 2–3 use license cost only; PS fee is year 1 only</span>
            </div>
            <div className={`ct-val without-col ${without.threeYearNet < 0 ? 'negative' : 'positive'}`}>
              {without.threeYearNet < 0 ? '−' : '+'}${Math.abs(without.threeYearNet).toLocaleString()}
            </div>
            <div className={`ct-val with-col ${withPS.threeYearNet < 0 ? 'negative' : 'positive'}`}>
              {withPS.threeYearNet < 0 ? '−' : '+'}${Math.abs(withPS.threeYearNet).toLocaleString()}
            </div>
          </div>
          <div className="ct-row">
            <div className="ct-label">Break-even</div>
            <div className="ct-val without-col">{without.breakEven}</div>
            <div className="ct-val with-col">{withPS.breakEven}</div>
          </div>
        </div>
      </div>

      <div className="insight">
        Over 3 years, PS-guided implementation generates{' '}
        <strong>${(withPS.threeYearNet - without.threeYearNet).toLocaleString()}</strong>{' '}
        more value than an unguided rollout.
      </div>

      {packageId === 'foundation' && (
        <div className="nudge-callout">
          <strong>Is workforce adoption a concern?</strong>{' '}
          Organizations with resistant or AI-apprehensive employee groups see the biggest lift from structured Change Management — included in Agentic Acceleration. Without it, adoption depends on organic uptake, which is the single largest variable in these projections.
        </div>
      )}

      {packageId === 'transformation' && (
        <div className="floor-callout">
          <strong>These figures represent a conservative floor for Agentic Transformation.</strong>{' '}
          The Innovation Lab and Experience Design outcomes expand the addressable scope of automation —
          redesigning workflows from clicks to conversations and enabling the customer to independently
          conceive and launch new agents. Those gains compound beyond what fixed multipliers can model
          and are not reflected in the numbers above.
        </div>
      )}
    </div>
  )
}

export default ComparisonCard
