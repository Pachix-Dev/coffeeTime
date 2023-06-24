import ToastContext from '../context/ToastProvider'
import { useContext } from 'react'

export function useToastContext () {
  const { setToastSettings } = useContext(ToastContext)
  return ({ setToastSettings })
}
