'use client'
import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'

const rows: GridRowsProp = [
  { id: 1, name: 'Data Grid', description: 'the Community version' },
  { id: 2, name: 'Data Grid Pro', description: 'the Pro version' },
  { id: 3, name: 'Data Grid Premium', description: 'the Premium version' },
]

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Product Name', width: 200 },
  { field: 'description', headerName: 'Description', width: 300 },
]

const TicketsPage = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-3xl font-semibold">Tickets</span>
        <Button
          variant="contained"
          onClick={() => router.push('/tickets/create')}
        >
          เพิ่ม ticket
        </Button>
      </div>

      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  )
}

export default TicketsPage
