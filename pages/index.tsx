import Head from 'next/head'
import Image from 'next/image'
import Banner from "../public/images/banner.jpg"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Jankariktm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <Image
        src={Banner}
      
        />
       
      </main>

     
    </div>
  )
}
