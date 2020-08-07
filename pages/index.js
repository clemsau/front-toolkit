import Head from 'next/head'
import Link from 'next/link'

import ToolCard from '../components/ToolCard'

import { getToolsData, getToolsTags } from '../lib/tools'


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
        <div className="side-content xs-padded-container"></div>  
        <div className="main-content xs-padded-container">
          {console.log(tags)}
          {allToolsData.allToolsData.map(({ id, name, url, description, tags }) => (
            <ToolCard key={id} name={name} description={description} url={url} tags={tags}></ToolCard>
          ))}
        </div>
        <div className="side-content xs-padded-container"></div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const allToolsData = getToolsData()
  const tags = getToolsTags()
  return {
    props: {
      allToolsData,
      tags
    }
  }
}