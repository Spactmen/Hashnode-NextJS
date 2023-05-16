import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useUserData from '../store/userDataStore'

export default function Home() {
  const userData = useUserData((state) =>({userData : state.userData})) 
  console.log(userData)
  return (
    <div className={styles.head}>
      {/* <Head>
        <title></title>
      </Head> */}
      <p className="text-green-50 text-lg font-bold desktop:text-red-300">Hello</p>
    </div>

    
  )
}
