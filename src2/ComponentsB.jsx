import React, { useContext } from 'react'

import { store } from './Provider';

const ComponentsB = () => {
    let [state,setState]=useContext(store)
  return (
      <div>{state}</div>
  )
}

export default ComponentsB