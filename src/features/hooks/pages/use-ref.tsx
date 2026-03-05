import { useRef, useState } from 'react'

export const useRefExample = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const renderCountRef = useRef(0)
  const [, forceRender] = useState(0)

  renderCountRef.current += 1

  return (
    <section className="content-card">
      <h1>useRef</h1>
      <section className="live-demo">
        <input ref={inputRef} placeholder="Clique no botão para focar" />
        <div className="swapi-controls">
          <button type="button" onClick={() => inputRef.current?.focus()}>Focar input</button>
          <button type="button" onClick={() => forceRender((v) => v + 1)}>Forçar re-render</button>
        </div>
        <p>Render count salvo em ref: {renderCountRef.current}</p>
      </section>
    </section>
  )
}
