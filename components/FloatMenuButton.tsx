import React, { useState } from 'react'
import { FaChevronRight, FaSave, FaChevronDown } from 'react-icons/fa'

const FloatMenuButton = () => {
  const [shouldShowMenu, setShouldShowMenu] = useState<boolean>(false)

  return (
    <div className="flex flex-col items-center justify-center fixed right-5 bottom-5">
      {shouldShowMenu && (
        <>
          <button
            onClick={() => setShouldShowMenu((prevValue) => !prevValue)}
            className="bg-blue rounded-full p-2 self-center my-2"
          >
            <FaSave size={15} color="white" />
          </button>
        </>
      )}
      <button
        onClick={() => setShouldShowMenu((prevValue) => !prevValue)}
        className="bg-red rounded-full p-4"
      >
        {!shouldShowMenu ? (
          <FaChevronRight size={20} color="white" />
        ) : (
          <FaChevronDown size={20} color="white" />
        )}
      </button>
    </div>
  )
}

export default FloatMenuButton
