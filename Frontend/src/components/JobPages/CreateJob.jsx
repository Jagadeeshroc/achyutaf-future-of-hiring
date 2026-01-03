import { useNavigate } from 'react-router-dom'
import JobForm from './JobForm'


export default function CreateJob() {
  const navigate = useNavigate()

  const handleSuccess = () => {
    navigate('/jobs')
  }

  return (
    <div>
      <JobForm onSuccess={handleSuccess} />
    </div>
  )
}