import { Button } from '@components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const TicketsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">Tickets</CardTitle>
          <CardAction>
            <Button variant="default" className="cursor-pointer">
              เพิ่ม ticket
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent></CardContent>
      </Card>
    </div>
  )
}

export default TicketsPage
