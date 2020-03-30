/*
This was a first example.
*/

import React, { useState } from 'react'

export default function Header ({ children }) {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <header>
      <div>
        <h1>{children}</h1>
        <h3>Hits:{counter}</h3>
        <button onClick={increment}>Hit</button>
      </div>
    </header>
  )
}
