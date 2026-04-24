function ResultsCard({ weeklySavings, monthlySavings, annualSavings, roi }) {
  return (
    <div className="card results">
      <h2>Your Results</h2>

      <div className="result-row">
        <span>Weekly savings</span>
        <strong>${weeklySavings.toLocaleString()}</strong>
      </div>

      <div className="result-row">
        <span>Monthly savings</span>
        <strong>${Math.round(monthlySavings).toLocaleString()}</strong>
      </div>

      <div className="result-row">
        <span>Annual savings</span>
        <strong>${annualSavings.toLocaleString()}</strong>
      </div>

      {roi !== null && (
        <div className="result-row highlight">
          <span>Monthly ROI</span>
          <strong>{roi}%</strong>
        </div>
      )}
    </div>
  )
}

export default ResultsCard
