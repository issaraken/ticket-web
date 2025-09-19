import { TicketPriority, TicketStatus } from '@/enum/ticket.enum'

export const TicketStatusOptions = [
  ...Object.values(TicketStatus).map((status) => ({
    value: status,
    label: status,
  })),
]

export const TicketPriorityOptions = [
  ...Object.values(TicketPriority).map((status) => ({
    value: status,
    label: status,
  })),
]
