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
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet"/> 
      </Head>

      <main>
        <div id="header-background">
          <h1 id="title">Front toolkit</h1>
          <img src="images/Vector_1.svg" id="vector-1"></img>
        </div>
        
      <div className="row">  
        <div className="side-content"></div>  
        <div className="main-content">
          {allToolsData.allToolsData.map(({ id, name, url, description, tags }) => (
            <ToolCard key={id} name={name} description={description} url={url} tags={tags}></ToolCard>
          ))}
        </div>
        <div className="side-content"></div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const allToolsData = getToolsData()
  return {
    props: {
      allToolsData,
    }
  }
}