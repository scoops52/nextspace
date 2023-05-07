import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import ProfileForm from './ProfileForm';
import { redirect } from 'next/navigation';
import SignOutButton from '@/components/buttons';
import { authOptions } from "../api/auth/[...nextauth]/route"


const Dashboard = async() => {
    const session = await getServerSession(authOptions);

    if (!session) {
        // redirect('/api/auth/signin')
        return <div>Please sign in</div>
    }

    const currentUserEmail = session?.user?.email!;
        const user = await prisma.user.findUnique({
            where: {
                email: currentUserEmail,
            }
        })

  return (
    <>
        <h1>Dashboard</h1>
        <ProfileForm user={user} />
    </>
  )
}

export default Dashboard