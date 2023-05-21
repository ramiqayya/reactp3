import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './Box'

import boxes from './boxes'

export default function App() {
  const [squares, setSquares] = useState(boxes)

  const squareElements = squares.map(square => (
    <Box key={square.id} on={square.on} />
  ))

  return (
    <main>
      {squareElements}
    </main>
  )
}
