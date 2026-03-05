import { useDeferredValue, useMemo, useState } from 'react'
import { demoNames } from '../../shared/demoData'

export const useDeferredValueExample = () => {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const filtered = useMemo(() => {
    const normalized = deferredQuery.toLowerCase()
    return demoNames.filter((name) => name.toLowerCase().includes(normalized))
  }, [deferredQuery])

  return (
    <section className="content-card">
      <h1>useDeferredValue</h1>
      <section className="live-demo">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar personagem" />
        <p>Query imediata: <strong>{query || 'vazia'}</strong></p>
        <p>Query deferida: <strong>{deferredQuery || 'vazia'}</strong></p>
        <ul className="demo-list">{filtered.map((name) => <li key={name}>{name}</li>)}</ul>
      </section>
    </section>
  )
}
