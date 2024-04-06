import React from 'react'

const meeting = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      Meeting Room: #{params.id}
    </div>
  )
}

export default meeting
