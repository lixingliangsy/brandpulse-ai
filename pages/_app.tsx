import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'
import ChatWidget from '../components/ChatWidget'
import { SUPPORT } from '../lib/support.config'

const UMAMI_ID = process.env.NEXT_PUBLIC_UMAMI_ID
const UMAMI_URL = (process.env.NEXT_PUBLIC_UMAMI_URL || 'https://analytics.umami.is').replace(/\/$/, '')

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {UMAMI_ID && (
        <Script
          async
          src={`${UMAMI_URL}/script.js`}
          data-website-id={UMAMI_ID}
          strategy="afterInteractive"
        />
      )}
            <><Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BrandPulse" />
        <meta property="og:description" content="Enter your brand and a few competitors; see how often leading LLMs mention you across key queries. For growth and marketing leads tracking AI-search visibility (GEO) as buyers shift from Google to LLM answers." />
        <meta property="og:url" content="https://brandpulse-ai.lxsaihub.com/" />
        <meta property="og:image" content="https://brandpulse-ai.lxsaihub.com/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BrandPulse" />
        <meta name="twitter:description" content="Enter your brand and a few competitors; see how often leading LLMs mention you across key queries. For growth and marketing leads tracking AI-search visibility (GEO) as buyers shift from Google to LLM answers." />
        <meta name="twitter:image" content="https://brandpulse-ai.lxsaihub.com/og.png" />
                                        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"SoftwareApplication","name":"BrandPulse","url":"https://brandpulse-ai.lxsaihub.com/","description":"Enter your brand and a few competitors; see how often leading LLMs mention you across key queries. For growth and marketing leads tracking AI-search visibility (GEO) as buyers shift from Google to LLM answers.","applicationCategory":"BusinessApplication","operatingSystem":"Web","offers":{"@type":"Offer","priceCurrency":"USD","price":"0","availability":"https://schema.org/OnlineOnly"}}' }} />
      </Head>
      <Component {...pageProps} />
      <ChatWidget productName={SUPPORT.productName} brandColor={SUPPORT.brandColor} sessionKeyPrefix={SUPPORT.productSlug} /></>
    </>
  )
}
