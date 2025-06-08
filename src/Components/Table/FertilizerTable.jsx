import React, { useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import "./FertilizerTable.css"

const FertilizerTable = ({ data }) => {
  const [searchText, setSearchText] = useState("")

  const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "product", headerName: "Product", width: 150 },
  { field: "state", headerName: "State", width: 200 },
  { field: "month", headerName: "Month", width: 120 },
  { field: "_year", headerName: "Year", width: 140 },
  { field: "requirement_in_mt_", headerName: "Requirement (MT)", width: 180 },
  { field: "availability_in_mt_", headerName: "Availability (MT)", width: 180 },
]


const filteredRows = (data || [])
  .filter((item) => {
    const product = item?.product?.toLowerCase() || ""
    const state = item?.state?.toLowerCase() || ""
    return product.includes(searchText.toLowerCase()) || state.includes(searchText.toLowerCase())
  })
  .map((item, index) => ({
    id: index + 1,
    ...item,
  }))

  {filteredRows.length > 0 ? (
  <DataGrid
    rows={filteredRows}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    disableSelectionOnClick
    autoHeight
  />
) : (
  <p style={{ textAlign: "center", padding: "20px", color: "gray" }}>
    No matching records found.
  </p>
)}


  return (
    <div className="tableContainer">
      <h3 className="tableTitle">Fertilizer Data</h3>
      <input
        type="text"
        placeholder="Search Fertilizer or State"
        className="tableSearch"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
        />
      </div>
    </div>
  )
}

export default FertilizerTable
