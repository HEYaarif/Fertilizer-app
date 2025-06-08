import { useState } from "react"
import "./Bigchart.css"

import {
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  Legend,
} from "recharts"

function Bigchart({ title, data }) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const products = [...new Set(data.map(item => item.product))].sort()
  const states = [...new Set(data.map(item => item.state))].sort()

  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [selectedState, setSelectedState] = useState(states[0])

  function handleProductChange(e) {
    setSelectedProduct(e.target.value)
  }

  function handleStateChange(e) {
    setSelectedState(e.target.value)
  }

  const chartData = months.map(month => {
    const entry = data.find(item =>
      item.product === selectedProduct &&
      item.state === selectedState &&
      item.month === month
    )

    return {
      month,
      requirement: entry ? parseFloat(entry.requirement_in_mt_) : 0,
      availability: entry ? parseFloat(entry.availability_in_mt_) : 0
    }
  })

  return (
    <div className="bigchart">
      <h3 className="bigchartTitle">{title}</h3>

      <div className="bigchartSelect">
        <div className="selectBox">
          <label>Product</label>
          <select onChange={handleProductChange} value={selectedProduct}>
            {products.map(product => (
              <option key={product} value={product}>{product}</option>
            ))}
          </select>
        </div>

        <div className="selectBox">
          <label>State</label>
          <select onChange={handleStateChange} value={selectedState}>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="requirement" fill="#60AC4A" name="Requirement (MT)" />
          <Bar dataKey="availability" fill="#FF6347" name="Availability (MT)" />
        </BarChart>
      </ResponsiveContainer>

      {!chartData.some(item => item.requirement > 0 || item.availability > 0) && (
        <h6 className="errordata">No data available for this product in the selected state.</h6>
      )}
    </div>
  )
}

export default Bigchart
