import { TicketPriority, TicketStatus } from '@/enum/ticket.enum'

export type TicketListsDTO = {
  id: number
  title: string
  description: string
  status: TicketStatus
  priority: TicketPriority
  createdAt: string
  updatedAt: string
}
