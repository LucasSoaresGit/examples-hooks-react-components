import { useState } from 'react'

export const useStateExample = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <section className="content-card">
      <h1>useState</h1>
      <section className="live-demo">
        <button type="button" onClick={() => setEnabled((value) => !value)}>{enabled ? 'Desligar' : 'Ligar'}</button>
        <p>Estado atual: {enabled ? 'Ativo' : 'Inativo'}</p>
      </section>
    </section>
  )
}
