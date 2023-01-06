import React, { useState } from 'react'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'

interface DropdownProps<T> {
  title: string
  options: T[]
  renderItem: (option: T) => JSX.Element
}

/**
 * TODO: @brunofrigeri
 * Add hover effects to the Dropdown key and options
 */

const Dropdown = <T extends { key: string }>({
  title,
  options = [],
  renderItem,
}: DropdownProps<T>) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  return (
    <>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <button
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
          }}
          onClick={() => setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed)}
        >
          {isCollapsed ? <FaChevronDown /> : <FaChevronRight />}
          <p style={{ color: 'white', marginLeft: 5 }}>{title}</p>
        </button>
        {isCollapsed && (
          <div
            style={{
              margin: '10px 20px',
            }}
          >
            {options.map((option) => renderItem(option))}
          </div>
        )}
      </div>
    </>
  )
}

export default Dropdown
