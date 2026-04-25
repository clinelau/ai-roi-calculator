import { PS_PACKAGES } from './constants'

function formatWithCommas(value) {
  if (value === '' || value === null || value === undefined) return ''
  const num = Number(String(value).replace(/,/g, ''))
  if (isNaN(num)) return value
  return num.toLocaleString()
}

function stripCommas(value) {
  return value.replace(/,/g, '')
}

function InputCard({ hourlyRate, setHourlyRate, hoursPerWeek, setHoursPerWeek, numEmployees, setNumEmployees, annualLicenseCost, setAnnualLicenseCost, selectedPackage, setSelectedPackage }) {
  return (
    <div className="card">
      <h2>Your Numbers</h2>

      <label>
        Number of employees using AI
        <input
          type="text"
          inputMode="numeric"
          value={formatWithCommas(numEmployees)}
          onChange={(e) => setNumEmployees(stripCommas(e.target.value))}
          placeholder="e.g. 1,000"
        />
      </label>

      <label>
        Average fully loaded hourly rate per employee ($)
        <span className="hint">Include salary, benefits, and overhead — typically 1.25–1.4× base salary</span>
        <input
          type="number"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.value)}
          placeholder="e.g. 75"
        />
      </label>

      <label>
        Hours saved per employee per week (AI estimate)
        <input
          type="number"
          value={hoursPerWeek}
          onChange={(e) => setHoursPerWeek(e.target.value)}
          placeholder="e.g. 5"
        />
      </label>

      <label>
        Annual AI product license cost ($)
        <input
          type="text"
          inputMode="numeric"
          value={formatWithCommas(annualLicenseCost)}
          onChange={(e) => setAnnualLicenseCost(stripCommas(e.target.value))}
          placeholder="e.g. 500,000"
        />
      </label>

      <div className="package-section">
        <p className="package-label">Salesforce Professional Services Package</p>
        <div className="package-grid">
          {PS_PACKAGES.map((pkg) => (
            <button
              key={pkg.id}
              className={`package-btn ${selectedPackage === pkg.id ? 'selected' : ''}`}
              onClick={() => setSelectedPackage(pkg.id)}
              type="button"
            >
              <span className="pkg-name">{pkg.name}</span>
              <span className="pkg-cost">${pkg.cost.toLocaleString()}</span>
              <span className="pkg-tagline">{pkg.tagline}</span>
            </button>
          ))}
        </div>
        {PS_PACKAGES.filter((pkg) => pkg.id === selectedPackage).map((pkg) => (
          <div key={pkg.id} className="pkg-profile">
            {pkg.profile}
          </div>
        ))}
      </div>
    </div>
  )
}

export default InputCard
