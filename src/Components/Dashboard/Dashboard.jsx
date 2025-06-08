import React from "react"
import "./Dashboard.css"

function Dashboard({ data }) {
  const totalFertilizers = data.length

  const calculateTotal = (key) => {
    return data.reduce((acc, item) => acc + parseFloat(item[key]), 0).toFixed(2)
  }

  const getTopFertilizers = (key, asc = false) => {
    const totals = {}

    data.forEach(({ product, [key]: value }) => {
      if (!totals[product]) totals[product] = 0
      totals[product] += parseFloat(value)
    })

    const sorted = Object.entries(totals)
      .sort((a, b) => (asc ? a[1] - b[1] : b[1] - a[1]))
      .slice(0, 5)

    return sorted
  }

  const topRequired = getTopFertilizers("requirement_in_mt_")
  const leastAvailable = getTopFertilizers("availability_in_mt_", true)
  const totalRequirement = calculateTotal("requirement_in_mt_")
  const totalAvailability = calculateTotal("availability_in_mt_")

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">
        🌿 <span>Fertilizer Dashboard</span>
      </h2>
      <div className="dashboard-cards">
        <div className="card green">
          <h3>Total Fertilizers</h3>
          <p>{totalFertilizers}</p>
        </div>

        <div className="card blue">
          <h3>Top 5 Required</h3>
          {topRequired.map(([product, value]) => (
            <p key={product}>
              {product} ({value.toFixed(2)})
            </p>
          ))}
        </div>

        <div className="card red">
          <h3>Least 5 Available</h3>
          {leastAvailable.map(([product, value]) => (
            <p key={product}>
              {product} ({value.toFixed(2)})
            </p>
          ))}
        </div>

        <div className="card orange">
          <h3>Total Summary</h3>
          <p>Requirement:<br />{totalRequirement}</p>
          <p>Available:<br />{totalAvailability}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
