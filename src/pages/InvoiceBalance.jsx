import React from 'react'
import { invoices,columns } from '../utils/data/InvoicesData'
import { DataGrid } from '@mui/x-data-grid'

const InvoiceBalance = () => {
  return (
    <div style={{ height: 500, width: "100%" }}>
          <DataGrid rows={invoices} columns={columns} pageSize={5} checkboxSelection />
        </div>
  )
}

export default InvoiceBalance
