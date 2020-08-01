import Head from 'next/head'
import Link from 'next/link'

import ToolCard, { siteTitle } from '../components/ToolCard'

import { getToolsData } from '../lib/tools'


export default function Home( allToolsData ) {
  return (
    <div className="container">
      <Head>
        <title>Front toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <ul>
        {allToolsData.allToolsData.map(({ id, name, url, description, tags }) => (
          <li key={id}>
            <a href={url} blank="true">{name}</a>
            <br/>
          </li>
        ))}
      </ul>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const allToolsData = getToolsData()
  return {
    props: {
      allToolsData
    }
  }
}