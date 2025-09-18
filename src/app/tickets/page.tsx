'use client'
import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation'

const TicketsPage = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-3xl font-semibold">Tickets</span>
        <Button
          variant="outlined"
          onClick={() => router.push('/tickets/create')}
        >
          เพิ่ม ticket
        </Button>
      </div>
    </div>
  )
}

export default TicketsPage
