
import { getServerSession } from 'next-auth';
import { redirect } from 'next/dist/server/api-utils';
import styles from './page.module.css'

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    console.log('no session')
  } else {
    console.log('in server session')
  }

  return (
    <main className={styles.main}>
      <div>You are signed in</div>
    </main>
  )
}
