import Link from 'next/link'
import React from 'react'
import { ArrayGroupedBy } from '../helpers/arrayGroupBy'
import { Post } from '../helpers/types'
import Dropdown from './Dropdown'

interface IFileManagerProps {
  currentFile?: Post
  files: ArrayGroupedBy<Post>
  setCurrentFile: (currentFile: Post) => void
}

/**
 * TODO: @brunofrigeri
 * I need to figure it out how to solve the issue where the resizable div are
 * resizing the content, and the sign of currentPost are disappearing from the screen.
 *
 * UPDATE: I'm trying to figure it out, how to have a negative zIndex which would bring
 * the option to avoid overflow, but at the same time be clickable.
 *
 * UPDATE-2: I changed the design to have a different text color on the currentFile, but the
 * ultimate goal is still solve the issue with the circle streching.
 */

const FileManager: React.FC<IFileManagerProps> = ({
  currentFile,
  files = [],
  setCurrentFile,
}) => {
  const renderItem = (option: Post) => (
    <Link
      href={`/editor?slug=${option.slug}`}
      key={option.key}
      onClick={() => setCurrentFile(option)}
    >
      <p
        style={{
          color: option.key === currentFile?.key ? 'skyblue' : 'white',
        }}
      >
        {option.key}
      </p>
    </Link>
  )

  return (
    <div
      id="files"
      style={{
        backgroundColor: '#2b3137',
        flex: '0 1 auto',
        opacity: 0.8,
        padding: 10,
        minWidth: 200,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 10,
          borderBottom: '1px solid white',
        }}
      >
        <p
          style={{
            color: 'white',
          }}
        >
          FILES
        </p>
      </div>
      <div
        style={{
          paddingTop: 20,
        }}
      >
        {files.map((file) => (
          <Dropdown<Post>
            key={file.key}
            title={file.key.toLocaleUpperCase()}
            options={file.data}
            renderItem={renderItem}
          />
        ))}
      </div>
    </div>
  )
}

export default FileManager
