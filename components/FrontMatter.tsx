import React, { useCallback, useEffect, useState } from 'react'
import { Post } from '../helpers/types'
import { FaTimes } from 'react-icons/fa'
import Modal from './Modal'
import Input from './Input'

interface FrontMatterProps {
  file: Post
  isVisible?: boolean
  setIsVisible: (isVisible: boolean) => void
  hasChanges?: boolean
  setHasChanges: (hasChanges: boolean) => void
}

type FrontMatterObj = Pick<Post, 'title' | 'date' | 'description'>

const FrontMatter = ({
  file,
  isVisible,
  setIsVisible,
  hasChanges,
  setHasChanges,
}: FrontMatterProps) => {
  const [frontMatter, setFrontMatter] = useState<FrontMatterObj>({
    title: file.title,
    description: file.description,
    date: file.date,
  })
  const isDraft = file.type === 'draft'

  const onFrontMatterChange = (key: keyof FrontMatterObj, value: string) => {
    setFrontMatter((prevValue) => ({ ...prevValue, [key]: value }))
  }

  const checkFrontMatterChanges = useCallback(() => {
    const fileFrontMatter = {
      title: file.title,
      description: file.description,
      date: file.date,
    }

    const frontMatterNotChanged = Object.keys(fileFrontMatter).every(
      (key) =>
        fileFrontMatter[key as keyof FrontMatterObj] ===
        frontMatter[key as keyof FrontMatterObj]
    )

    setHasChanges(!frontMatterNotChanged)
  }, [file.title, file.description, file.date, setHasChanges, frontMatter])

  useEffect(() => {
    if (isVisible) checkFrontMatterChanges()
  }, [checkFrontMatterChanges, isVisible])

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
      <div className="relative flex flex-col bg-white p-5 w-1/2 h-3/4 md:h-1/2">
        <div className="flex flex-row justify-center items-center">
          <p className="self-center font-bold text-lg">Front Matter</p>
          <button
            className="absolute right-0 top-0 p-5"
            onClick={() => setIsVisible(false)}
          >
            <FaTimes color="black" />
          </button>
        </div>
        <form className="flex flex-col items-start py-5">
          <Input
            value={frontMatter.title}
            setValue={(value) => onFrontMatterChange('title', value)}
            type="text"
            placeholder="Here's your title..."
          />
          <Input
            value={frontMatter.description}
            setValue={(value) => onFrontMatterChange('description', value)}
            type="text"
            placeholder="Here's your description..."
          />
          <Input
            value={frontMatter.date}
            setValue={(value) => onFrontMatterChange('date', value)}
            type="date"
            placeholder="02/11/2022"
          />
        </form>

        <div className="flex-1 flex md:flex-row flex-col md:justify-between md:items-end justify-end items-center">
          {!isDraft && (
            <button className="w-full md:w-fit bg-gray-300 p-2 md:mb-0 my-2 font-medium rounded-sm">
              Save as Draft
            </button>
          )}
          <div className="w-full md:w-fit flex md:flex-row flex-col md:items-center justify-center">
            {hasChanges && (
              <button className="w-full md:w-fit bg-blue p-2 md:mr-4 md:mb-0 mb-2 text-white font-medium rounded-sm">
                Save
              </button>
            )}
            <button className="w-full md:w-fit bg-standardGreen-600 p-2 text-white font-medium rounded-sm">
              Publish
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default FrontMatter
