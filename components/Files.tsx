import React from 'react'
import { Post } from '../helpers/types'
import File from './File'

interface FilesProps {
  type: Post['type']
  files: Post[]
}

const Files = ({ type, files = [] }: FilesProps) => {
  const isDraft = type === 'draft'

  return (
    <div className="my-4">
      <div className="flex flex-row items-center mb-4">
        <h2 className="text-2xl mr-2">{isDraft ? 'My drafts' : 'My posts'}</h2>
        {!isDraft && (
          <p className="text-xs bg-standardPurple-400 text-white font-semibold p-1">
            LIVE
          </p>
        )}
      </div>

      <div className="grid max-sm:grid-cols-2 grid-cols-3 gap-4">
        {files.map((file) => (
          <File key={file.key} file={file} />
        ))}
      </div>
    </div>
  )
}

export default Files
