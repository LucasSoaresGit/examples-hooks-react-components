import { useId } from 'react'

export const useIdExample = () => {
  const inputId = useId()

  return (
    <section className="content-card">
      <h1>useId</h1>
      <section className="live-demo">
        <label htmlFor={inputId}>Código Rebelde</label>
        <input id={inputId} placeholder="Digite um valor" />
        <p>ID gerado: {inputId}</p>
      </section>
    </section>
  )
}
