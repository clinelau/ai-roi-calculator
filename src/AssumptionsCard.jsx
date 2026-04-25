import { WITHOUT_PS, PACKAGE_ASSUMPTIONS, SOURCES } from './constants'

function AssumptionsCard() {
  return (
    <div className="card assumptions">
      <h2>Assumptions & Sources</h2>
      <p className="assumptions-intro">
        Every number in this calculator is grounded in published research.
        Adjust inputs to match your organization.
      </p>

      <table className="assumptions-table">
        <thead>
          <tr>
            <th>Assumption</th>
            <th>Without PS</th>
            <th>Foundation</th>
            <th>Acceleration</th>
            <th>Transformation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Effective adoption rate</td>
            <td>{WITHOUT_PS.adoptionRate * 100}%</td>
            <td>{PACKAGE_ASSUMPTIONS.foundation.adoptionRate * 100}%</td>
            <td>{PACKAGE_ASSUMPTIONS.acceleration.adoptionRate * 100}%</td>
            <td>{PACKAGE_ASSUMPTIONS.transformation.adoptionRate * 100}%</td>
          </tr>
          <tr>
            <td>Productivity capture rate</td>
            <td>{WITHOUT_PS.productivityCapture * 100}%</td>
            <td>{PACKAGE_ASSUMPTIONS.foundation.productivityCapture * 100}%</td>
            <td>{PACKAGE_ASSUMPTIONS.acceleration.productivityCapture * 100}%</td>
            <td>{PACKAGE_ASSUMPTIONS.transformation.productivityCapture * 100}%</td>
          </tr>
          <tr>
            <td>Year 1 ramp factor</td>
            <td>{WITHOUT_PS.year1RampFactor * 100}%</td>
            <td>{PACKAGE_ASSUMPTIONS.foundation.year1RampFactor * 100}%</td>
            <td>{PACKAGE_ASSUMPTIONS.acceleration.year1RampFactor * 100}%</td>
            <td>{PACKAGE_ASSUMPTIONS.transformation.year1RampFactor * 100}%</td>
          </tr>
        </tbody>
      </table>

      <div className="sources-list">
        <p className="sources-title">Sources</p>
        {SOURCES.map((s) => (
          <div key={s.id} className="source-item">
            <span className="source-claim">{s.claim}</span>
            <span className="source-citation">{s.citation}</span>
          </div>
        ))}
      </div>

      <div className="calc-definitions">
        <p className="sources-title">How the Numbers Are Calculated</p>

        <div className="calc-item">
          <span className="calc-label"><sup>1</sup> Year 1 value generated</span>
          <span className="calc-formula">Employees × Adoption rate × Hours saved/week × 52 weeks × Hourly rate × Productivity capture × Year 1 ramp factor</span>
        </div>

        <div className="calc-item">
          <span className="calc-label"><sup>2</sup> Year 1 total investment</span>
          <span className="calc-formula">Annual AI license cost + PS package cost (one-time)</span>
        </div>

        <div className="calc-item">
          <span className="calc-label"><sup>3</sup> Year 1 net return</span>
          <span className="calc-formula">Year 1 value generated − Year 1 total investment</span>
        </div>

        <div className="calc-item">
          <span className="calc-label"><sup>4</sup> 3-year net return</span>
          <span className="calc-formula">Year 1 net return + (Year 2 value − License cost) + (Year 3 value − License cost). PS cost is excluded from years 2 and 3 as it is a one-time fee.</span>
        </div>

        <div className="calc-item">
          <span className="calc-label">Break-even</span>
          <span className="calc-formula">Total year 1 investment ÷ Monthly value generated. Reflects the month at which cumulative value recovered exceeds total investment.</span>
        </div>
      </div>
    </div>
  )
}

export default AssumptionsCard
