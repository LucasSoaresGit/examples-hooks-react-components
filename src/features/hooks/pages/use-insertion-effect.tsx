import { useInsertionEffect, useState } from 'react'

export const useInsertionEffectExample = () => {
  const [color, setColor] = useState('#0f766e')

  useInsertionEffect(() => {
    const styleTag = document.createElement('style')
    styleTag.textContent = `.insertion-text { color: ${color}; font-weight: 700; }`
    document.head.appendChild(styleTag)
    return () => styleTag.remove()
  }, [color])

  return (
    <section className="content-card">
      <h1>useInsertionEffect</h1>
      <section className="live-demo">
        <p className="insertion-text">Texto com estilo injetado antes da mutação do DOM.</p>
        <input type="color" value={color} onChange={(event) => setColor(event.target.value)} />
      </section>
    </section>
  )
}
