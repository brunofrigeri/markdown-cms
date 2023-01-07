import React, { useState } from 'react'
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'

export type Button = {
  key: string
  icon?: React.ReactNode
  label?: string
  onPress: () => void
  className?: string
}

interface FloatButtonProps {
  buttons?: Button[]
  onFloatButtonPress?: () => void
}

const FloatButton = ({
  buttons = [],
  onFloatButtonPress = () => {},
}: FloatButtonProps) => {
  const [shouldShowMenu, setShouldShowMenu] = useState<boolean>(false)

  const onItemPress = (callback?: () => void) => {
    callback?.()
    setShouldShowMenu((prevValue) => !prevValue)
  }

  const renderItem = ({ key, label, icon, onPress, className }: Button) => (
    <button
      className={`rounded-full p-2 self-center my-2 bg-blue`}
      key={key}
      onClick={() => onItemPress(onPress)}
    >
      {icon && icon}
      {!icon && label && <p>{label}</p>}
    </button>
  )

  return (
    <div className="flex flex-col items-center justify-center fixed right-5 bottom-5">
      {shouldShowMenu && (
        <>{buttons.map((button) => renderItem({ ...button }))}</>
      )}
      <button
        onClick={() =>
          buttons.length > 0
            ? setShouldShowMenu((prevValue) => !prevValue)
            : onFloatButtonPress()
        }
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

export default FloatButton
