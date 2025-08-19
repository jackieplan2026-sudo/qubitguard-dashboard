import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>QUBITGUARD - Quantum-Grade Discord Security</title>
        <meta name="description" content="QUBITGUARD - Advanced Discord security and moderation bot with quantum-grade protection for your server." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="QUBITGUARD - Quantum-Grade Discord Security" />
        <meta property="og:description" content="Advanced Discord security and moderation bot with quantum-grade protection for your server." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="QUBITGUARD - Quantum-Grade Discord Security" />
        <meta name="twitter:description" content="Advanced Discord security and moderation bot with quantum-grade protection for your server." />
        <meta name="twitter:image" content="/twitter-image.png" />
        
        {/* Theme */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        
        {/* Preload important fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
