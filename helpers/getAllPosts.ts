import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { Post } from './types'
import { postDirectory } from './index'
import { arrayGroupBy, ArrayGroupedBy } from './arrayGroupBy'

export const getFileNames = (): string[] | undefined => {
  if (fs.existsSync(postDirectory)) {
    const fileNames: string[] = fs.readdirSync(postDirectory)

    return fileNames
  }
}

export const getAllPosts = (): Post[] => {
  if (fs.existsSync(postDirectory)) {
    const fileNames = getFileNames()

    if (!fileNames) return []
    if (fileNames.length === 0) return []

    const filteredData = fileNames.map((filename) => {
      const slug = filename

      const fullPath = path.join(postDirectory, filename)

      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents) // here we have the `data` field as well.
      const post = {
        content,
        date: data.date,
        slug: slug.replace('.mdx', ''),
        key: slug,
        type: Boolean(data?.draft) ? 'draft' : 'post',
        title: data.title,
      } satisfies Post

      return post
    })

    return filteredData.sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) {
        return 1
      } else {
        return -1
      }
    })
  } else return []
}
