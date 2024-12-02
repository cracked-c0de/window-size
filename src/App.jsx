import { useEffect, useState } from 'react'

function App() {
  const [widthContent, widthSet] = useState(window.innerWidth)
  const [heightContent, heightSet] = useState(window.innerHeight)

  const handleResize = () => {
    widthSet(window.innerWidth)
    heightSet(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return(
    <section className='content'>
      <h1>Width: {widthContent}px</h1>
      <h1>Height: {heightContent}px</h1>
    </section>
  )
}

export default App
