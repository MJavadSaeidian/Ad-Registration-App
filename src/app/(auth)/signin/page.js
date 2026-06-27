import { authOption } from '@/app/api/auth/[...nextauth]/route'
import SigninPage from '@/template/SigninPage'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'


async function Signin() {
  const session =  await getServerSession(authOption)
if (session) redirect ("/")
  return (
    <div>
      <SigninPage/>
    </div>
  )
}

export default Signin