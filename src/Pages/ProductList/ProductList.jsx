import "./ProductList.css"
import { data as rawData } from "../../result"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"
import { useMemo } from "react"

function ProductList() {
  const data = useMemo(() => {
    return rawData.map((item, index) => ({
      id: index + 1,
      ...item,
    }))
  }, [rawData])

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      sortable: true,
      floatingFilter: true,
    },
    {
      field: "_year",
      headerName: "Year",
      width: 180,
      sortable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    },
    {
      field: "month",
      headerName: "Month",
      width: 150,
      sortable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    },
    {
      field: "product",
      headerName: "Product",
      width: 180,
      sortable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    },
    {
      field: "state",
      headerName: "State",
      width: 240,
      sortable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    },
    {
      field: "requirement_in_mt_",
      headerName: "Requirement (MT)",
      width: 200,
      sortable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    },
    {
      field: "availability_in_mt_",
      headerName: "Availability (MT)",
      width: 200,
      sortable: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    },
  ]

  return (
    <div className="productList">
      <h2 className="productListTitle">Fertilizer Product Data</h2>
      <div className="productListTable">
        <div className="ag-theme-alpine" style={{ width: "100%", height: "100%" }}>
          <AgGridReact
            rowData={data}
            columnDefs={columns}
            pagination={true}
            paginationPageSize={15}
            animateRows={true}
            columnHoverHighlight={true}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductList
