import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const toolsDirectory = path.join(process.cwd(), 'tools')


export function getToolsData() {
    // Get file names under /tools
    const fileNames = fs.readdirSync(toolsDirectory)
    const allToolsData = fileNames.map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')
  
      // Read markdown file as string
      const fullPath = path.join(toolsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
  
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)
  
      // Return the data
      return {
        id,
        ...matterResult.data
      }
    })
    return allToolsData
}

export function getToolsTags() {
  const toolsData = getToolsData()
  let tags = []
  for(let i = 0; i < toolsData.length; i++) {
    for(let j = 0; j < toolsData[i].tags.length; j++) {
      if(!(toolsData[i].tags[j] in tags)) {
        tags.push(toolsData[i].tags[j])
      }
    }
  }
  return tags
}