import { createContext, useState } from 'react'

export const MenuContext = createContext({})

export function MenuProvider ({ children }) {
  const [show, setShow] = useState(false)
  return (
    <MenuContext.Provider value={{ show, setShow }}>
      {children}
    </MenuContext.Provider>
  )
}
