import { useParams } from 'react-router-dom'

function Booking() {
  const { id } = useParams()

  return <h1>Booking Package: {id}</h1>
}

export default Booking
