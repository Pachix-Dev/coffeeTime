import { useLocation, useNavigate } from 'react-router-dom'
import { FormDrink } from '../../components/Admin/FormDrink'
import { useEffect } from 'react'

export function UpdateDrink () {
  const { state } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (state === null) {
      navigate('/admin/listDrinks')
    }
  }, [])

  return (
    <FormDrink state={state} />
  )
}
