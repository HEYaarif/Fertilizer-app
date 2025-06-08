import { data } from "../../result.js"
import "./Featured.css"
import Chart from "../Chart/Chart"
import Bigchart from "../Bigchart"
import Piechart from "../Piechart"
import FertilizerTable from "../Table/FertilizerTable"
import Dashboard from "../Dashboard/Dashboard.jsx"

function Featured() {
  return (
    <div className="featured">
      <Dashboard data={data} />
      <div className="featuredpiechart">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Piechart data={data} type="most-required" />
      <Piechart data={data} type="least-available" />
    </div>
      </div>

      <Bigchart
        data={data}
        title="Product Availability and Requirements"
        grid
      />

      <div className="featuredTableWrapper">
        <FertilizerTable data={data} />
      </div>

      <div className="featuredItem">
        <div className="widgetsm">
          <Chart
            data={data}
            title="State wise product"
            grid
            parent="state"
            child="product"
            defaultValue={data[0]}
          />
        </div>

        <div className="widgetsm">
          <Chart
            data={data}
            title="Year wise product"
            grid
            parent="_year"
            child="product"
            defaultValue={data[0]}
          />
        </div>

        <div className="widgetsm">
          <Chart
            data={data}
            title="Month wise product"
            grid
            parent="month"
            child="product"
            defaultValue={data[0]}
          />
        </div>
      </div>
    </div>
  )
}


export default Featured
