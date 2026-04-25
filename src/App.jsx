import { useState } from 'react'
import InputCard from './InputCard'
import ComparisonCard from './ComparisonCard'
import AssumptionsCard from './AssumptionsCard'
import AstroConnector from './AstroConnector'
import { PS_PACKAGES, WITHOUT_PS, PACKAGE_ASSUMPTIONS } from './constants'
import './App.css'

function calcScenario(hourlyRate, hoursPerWeek, numEmployees, annualLicenseCost, psCost, assumptions) {
  const annualHours = hoursPerWeek * 52
  const effectiveUsers = numEmployees * assumptions.adoptionRate
  const grossAnnualValue = effectiveUsers * annualHours * hourlyRate * assumptions.productivityCapture

  const year1Value = Math.round(grossAnnualValue * assumptions.year1RampFactor)
  const year2Value = Math.round(grossAnnualValue)
  const year3Value = Math.round(grossAnnualValue)

  const year1Investment = Math.round(annualLicenseCost + psCost)
  const ongoingInvestment = Math.round(annualLicenseCost)

  const year1Net = year1Value - year1Investment
  const threeYearNet = year1Net + (year2Value - ongoingInvestment) + (year3Value - ongoingInvestment)

  // Break-even uses ramped Year 1 monthly value, then full value for Year 2+.
  // Using un-ramped grossAnnualValue would overstate how fast value accrues in Year 1.
  let breakEvenMonths = null
  const monthlyYear1Value = year1Value / 12
  const monthlyFullValue = grossAnnualValue / 12
  if (monthlyYear1Value > 0) {
    if (year1Value >= year1Investment) {
      breakEvenMonths = Math.ceil(year1Investment / monthlyYear1Value)
    } else if (monthlyFullValue > 0) {
      const remainingAfterYear1 = year1Investment - year1Value
      breakEvenMonths = 12 + Math.ceil(remainingAfterYear1 / monthlyFullValue)
    }
  }
  const breakEven = breakEvenMonths
    ? breakEvenMonths <= 36
      ? `Month ${breakEvenMonths}`
      : 'Beyond 3 years'
    : 'N/A'

  return {
    adoptionPct: Math.round(assumptions.adoptionRate * 100),
    year1Value,
    year1Investment,
    year1Net,
    threeYearNet,
    breakEven,
  }
}

function App() {
  const [numEmployees, setNumEmployees] = useState('')
  const [hourlyRate, setHourlyRate] = useState('')
  const [hoursPerWeek, setHoursPerWeek] = useState('')
  const [annualLicenseCost, setAnnualLicenseCost] = useState('')
  const [selectedPackage, setSelectedPackage] = useState('foundation')

  const pkg = PS_PACKAGES.find((p) => p.id === selectedPackage)
  const psCost = pkg ? pkg.cost : 0

  const hasInputs = numEmployees > 0 && hourlyRate > 0 && hoursPerWeek > 0 && annualLicenseCost > 0

  const withoutResults = hasInputs
    ? calcScenario(Number(hourlyRate), Number(hoursPerWeek), Number(numEmployees), Number(annualLicenseCost), 0, WITHOUT_PS)
    : null

  const withResults = hasInputs
    ? calcScenario(Number(hourlyRate), Number(hoursPerWeek), Number(numEmployees), Number(annualLicenseCost), psCost, PACKAGE_ASSUMPTIONS[selectedPackage])
    : null

  return (
    <div className="container">
      <div className="disclaimer">
        <strong>Demo only.</strong> This tool is not an official Salesforce product, is not supported by Salesforce, and does not represent actual pricing, performance guarantees, or ROI commitments. All figures are illustrative estimates for discussion purposes only.
      </div>

      <div className="hero-header">
        <h1>Agentic Enterprise Services ROI Calculator</h1>
        <p className="subtitle">
          See how Salesforce Professional Services protects and accelerates your AI investment
        </p>
      </div>

      <div className="two-col">
        <div className="col-left">
          <InputCard
            numEmployees={numEmployees}
            setNumEmployees={setNumEmployees}
            hourlyRate={hourlyRate}
            setHourlyRate={setHourlyRate}
            hoursPerWeek={hoursPerWeek}
            setHoursPerWeek={setHoursPerWeek}
            annualLicenseCost={annualLicenseCost}
            setAnnualLicenseCost={setAnnualLicenseCost}
            selectedPackage={selectedPackage}
            setSelectedPackage={setSelectedPackage}
          />
        </div>

        <AstroConnector />

        <div className="col-right">
          {hasInputs ? (
            <ComparisonCard
              without={withoutResults}
              withPS={withResults}
              packageName={pkg.name}
              packageId={selectedPackage}
            />
          ) : (
            <div className="empty-state">
              <p>Fill in your numbers on the left to see your ROI comparison.</p>
            </div>
          )}
        </div>
      </div>

      <AssumptionsCard />
    </div>
  )
}

export default App
