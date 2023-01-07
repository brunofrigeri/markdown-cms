import fs from 'fs'
import { postDirectory } from '.'
import { getFileNames } from './getAllPosts'

export const getAllPostSlugs = () => {
  if (fs.existsSync(postDirectory)) {
    const fileNames = getFileNames()

    if (!fileNames) return []

    const slugs = fileNames.map((fileName) => {
      return {
        params: {
          slug: fileName.replace('.mdx', ''),
        },
      }
    })

    return slugs
  } else {
    return []
  }
}
