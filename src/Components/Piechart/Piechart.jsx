// import { PieChart, Pie, Cell, Tooltip } from "recharts"
// import "./Piechart.css"
// import { getPieData } from "../../utils.js"

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000"]

// const RADIAN = Math.PI / 180
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5
//   const x = cx + radius * Math.cos(-midAngle * RADIAN)
//   const y = cy + radius * Math.sin(-midAngle * RADIAN)

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   )
// }

// function Piechart({ data, title, dataKey }) {
//   let chartData = getPieData(data, dataKey)
//   return (
//     <div className="piechart">
//       <h3 className="piechartTitle">{title}</h3>
//       <PieChart width={500} height={500} aspect={2 / 1}>
//         <Pie
//           data={chartData}
//           cx={250}
//           cy={220}
//           labelLine={false}
//           label={renderCustomizedLabel}
//           outerRadius={170}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </div>
//   )
// }

// export default Piechart


//* Piechart.jsx
import { PieChart, Pie, Cell, Tooltip } from "recharts"
import "./Piechart.css"
import { getPieData } from "../../utils.js"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000"]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

function Piechart({ data, type }) {
  let chartData = []
  let title = ""

  if (type === "most-required") {
    chartData = getPieData(data, "requirement_in_mt_", "desc")
    title = "Top 5 Most Required Fertilizers"
  } else if (type === "least-available") {
    chartData = getPieData(data, "availability_in_mt_", "asc")
    title = "Top 5 Least Available Fertilizers"
  }

  return (
    <div className="piechart">
      <h3 className="piechartTitle">{title}</h3>
      <PieChart width={500} height={400}>
        <Pie
          data={chartData}
          cx={250}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={160}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  )
}

export default Piechart


