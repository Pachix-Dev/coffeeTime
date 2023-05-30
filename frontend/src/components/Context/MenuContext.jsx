import React, { useState } from 'react'

export const MenuContext = React.createContext({})

export function MenuContextProvider ({ children }) {
  const [show, setShow] = useState(false)
  return (
    <MenuContext.Provider value={{ show, setShow }}>
      {children}
    </MenuContext.Provider>
  )
}
