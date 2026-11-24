import { useParams } from 'react-router-dom'

function Confirmation() {
  const { ref } = useParams()

  return <h1>Booking Confirmation: {ref}</h1>
}

export default Confirmation
