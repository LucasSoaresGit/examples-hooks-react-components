import { useMemo, useState } from 'react'

export const useMemoExample = () => {
  const [quantity, setQuantity] = useState(1)
  const total = useMemo(() => quantity * 37, [quantity])

  return (
    <section className="content-card">
      <h1>useMemo</h1>
      <section className="live-demo">
        <input type="range" min={1} max={10} value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} />
        <p>Quantidade: {quantity}</p>
        <p>Total memoizado: {total} créditos</p>
      </section>
    </section>
  )
}
