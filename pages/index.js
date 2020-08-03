import Head from 'next/head'
import Link from 'next/link'

import ToolCard from '../components/ToolCard'

import { getToolsData } from '../lib/tools'


export default function Home( allToolsData ) {
  return (
    <div className="container">
      <Head>
        <title>Front toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="header-background">
          <img src="images/Vector_1.svg" id="vector-1"></img>
        </div>
        
      <ul>
        {allToolsData.allToolsData.map(({ id, name, url, description, tags }) => (
          <ToolCard name={name} description={description} url={url} tags={tags}></ToolCard>
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