import Head from 'next/head'
import Link from 'next/link'

import ToolCard from '../components/ToolCard'
import TagCheckbox from '../components/TagCheckbox'

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
        <div className="side-content"></div>  
        <div className="main-content">
          <div>A curated list of front end and web design tools  </div>
          <div className="btn btn-pink">Select all</div>
          <div className="btn btn-pink">Unselect all</div>
          <div>
            {allToolsData.allTags.map(( tag ) => 
              <TagCheckbox tag={tag}></TagCheckbox>
            )}
          </div>
          <div>
            {allToolsData.allToolsData.map(({ id, name, url, description, tags }) => (
              <ToolCard name={name} description={description} url={url} tags={tags}></ToolCard>
            ))}
          </div>
        </div>
        <div className="side-content"></div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const allToolsData = getToolsData()
  const allTags = getToolsTags()
  return {
    props: {
      allToolsData,
      allTags
    }
  }
}