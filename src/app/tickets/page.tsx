'use client'
import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation'
import { GridRowsProp, GridColDef } from '@mui/x-data-grid'
import TableComponent from '@components/TableComponent'
import { useEffect, useState } from 'react'
import TableSkeleton from '@components/skeleton/TableSkeleton'

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
  const [isLoadingLayout, setIsLoadingLayout] = useState<boolean>(true)

  useEffect(() => {
    setIsLoadingLayout(false)
  }, [])

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

      {isLoadingLayout ? (
        <TableSkeleton rows={5} columns={3} />
      ) : (
        <TableComponent rows={rows} columns={columns} />
      )}
    </div>
  )
}

export default TicketsPage
