import Link from 'next/link'
import React from 'react'
import { Post } from '../helpers/types'
import Button from './Button'

interface FileProps {
  file: Post
  hasChanges?: boolean
  onPublish?(): void
}

const File = ({ file, hasChanges = false }: FileProps) => {
  const isDraft = file.type === 'draft'

  return (
    <div
      className="relative flex flex-col justify-between border rounded-md bg-gray p-4"
      key={file.key}
    >
      <div>
        <h3 className="text-black mb-4">{file.title}</h3>
        <p className="text-black">{file.date}</p>
      </div>
      <div className="flex flex-col pt-5">
        <Link href={`/editor/${file.slug}`}>
          <Button className="w-full" bgColor="yellow">
            Edit content
          </Button>
        </Link>
        {(hasChanges || isDraft) && (
          <Button
            onClick={() => console.log('publish')}
            bgColor="standardGreen-600"
          >
            Publish
          </Button>
        )}
      </div>
    </div>
  )
}

export default File
