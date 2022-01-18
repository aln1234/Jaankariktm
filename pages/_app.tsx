import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout"
import Script from 'next/script'


{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-DYWT468JBV"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DYWT468JBV');
</script> */}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Script
    strategy='lazyOnload'
    src={"https://www.googletagmanager.com/gtag/js?id=G-DYWT468JBV"}
    />
      <Script
    strategy='lazyOnload'
   
    >
      {
      ` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-DYWT468JBV');"
        `
      }

    </Script>
    <Layout>
       <Component {...pageProps} />

    </Layout></>
    
    
 
  )
}

export default MyApp
