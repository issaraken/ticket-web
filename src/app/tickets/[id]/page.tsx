'use client'
import { useRouter } from 'next/navigation'
import { use, useEffect, useState } from 'react'

type Props = {
  params: Promise<{ id: string }>
}

const TicketUpdatePage = ({ params }: Props) => {
  const { id } = use(params)
  const router = useRouter()
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true)
  const [isUpdateMode, setIsUpdateMode] = useState<boolean>(false)

  useEffect(() => {
    if (id === 'add') {
      setIsLoadingData(false)
      return
    }

    setIsUpdateMode(true)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return <div>TicketUpdatePage</div>
}

export default TicketUpdatePage
