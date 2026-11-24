import { useParams } from 'react-router-dom'

function PackageDetails() {
  const { id } = useParams()

  return <h1>Package Details: {id}</h1>
}

export default PackageDetails
