import { useMemo, useState, useTransition } from 'react'
import { demoNames } from '../../shared/demoData'

export const useTransitionExample = () => {
  const [inputValue, setInputValue] = useState('')
  const [query, setQuery] = useState('')
  const [isPending, startTransition] = useTransition()

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase()
    return demoNames.filter((name) => name.toLowerCase().includes(normalized))
  }, [query])

  function handleChange(nextValue: string) {
    setInputValue(nextValue)
    startTransition(() => setQuery(nextValue))
  }

  return (
    <section className="content-card">
      <h1>useTransition</h1>
      <section className="live-demo">
        <input value={inputValue} onChange={(event) => handleChange(event.target.value)} placeholder="Filtrar nomes" />
        <p>{isPending ? 'Atualizando lista em transição...' : 'Lista pronta.'}</p>
        <ul className="demo-list">{filtered.map((name) => <li key={name}>{name}</li>)}</ul>
      </section>
    </section>
  )
}
