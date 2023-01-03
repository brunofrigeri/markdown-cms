import Link from 'next/link'
import React, { useState } from 'react'
import { useFile } from '../contexts/useFile'

type File = {
  slug: string
  content: string
}

interface IFileManagerProps {
  files: File[]
}

const FileManager: React.FC<IFileManagerProps> = ({ files = [] }) => {
  return (
    <div
      id="files"
      style={{
        backgroundColor: '#2b3137',
        flex: '0 1 auto',
        opacity: 0.6,
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
        <button
          style={{ cursor: 'pointer', padding: 5 }}
          onClick={(event) => console.log(event)}
        >
          +
        </button>
      </div>
      <div style={{ paddingTop: 20 }}>
        {files.map((file) => (
          <Link href="" key={file.slug}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: 'skyblue',
                  marginRight: 10,
                }}
              />
              <p style={{ color: 'white' }}>{file.slug}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FileManager
