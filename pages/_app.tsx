import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout"
import Script from 'next/script'
import * as gtag from '../lib/gtag'
import { useEffect } from 'react'
import { useRouter } from 'next/router'




function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
 
    <Layout>
       <Component {...pageProps} />

    </Layout></>
    
    
 
  )
}

export default MyApp
