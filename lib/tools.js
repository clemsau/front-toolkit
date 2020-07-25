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