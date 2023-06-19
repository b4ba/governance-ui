import VerifyWallet from '@verify-wallet/components'
import { Application } from '@verify-wallet/constants'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const parsedLocationHash = new URLSearchParams(
    window.location.search.substring(1)
  )

  const raw = router.asPath.split('/')

  const project = raw[raw.length - 1]

  console.log(project)

  console.log(parsedLocationHash.get('code'))

  return (
    <VerifyWallet
      application={Application.ECOSYSTEM}
      discordCode={parsedLocationHash.get('code')}
      project={project}
    />
  )
}
