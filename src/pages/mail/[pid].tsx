import { useRouter } from 'next/router'

const Mail = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Mail: {pid}</p>
}

export default Mail