import { memo, useCallback, useState } from 'react'

const StableChild = memo(function StableChild({ onAdd }: { onAdd: () => void }) {
  return <button type="button" onClick={onAdd}>Incrementar com callback memoizado</button>
})

export const useCallbackExample = () => {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const onAdd = useCallback(() => setCount((c) => c + 1), [])

  return (
    <section className="content-card">
      <h1>useCallback</h1>
      <section className="live-demo">
        <p>Total: {count}</p>
        <StableChild onAdd={onAdd} />
        <button type="button" onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>Trocar tema ({theme})</button>
      </section>
    </section>
  )
}
