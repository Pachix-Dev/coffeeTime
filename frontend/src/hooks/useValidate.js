import { useEffect, useState } from 'react'

export function useValidate () {
  const [error, setError] = useState(null)

  if (error !== null) {
    console.log('hola')
    setTimeout(() => {
      setError(null)
    }, 2000)
  }

  return { error, setError }
}