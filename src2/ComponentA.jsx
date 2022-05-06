import React, { useContext } from 'react'

import { store } from './Provider';

const ComponentA = () => {
    let [state,setStore]= useContext(store)
  return (
      <div>{state}
        </div>
  )
}

export default ComponentA