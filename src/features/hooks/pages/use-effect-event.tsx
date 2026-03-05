import { useEffect, useEffectEvent, useState } from 'react'

export const useEffectEventExample = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [ticks, setTicks] = useState(0)

  const onTick = useEffectEvent(() => {
    setTicks((value) => value + 1)
  })

  useEffect(() => {
    const timer = window.setInterval(() => onTick(), 1000)
    return () => window.clearInterval(timer)
  }, [onTick])

  return (
    <section className="content-card">
      <h1>useEffectEvent</h1>
      <section className="live-demo">
        <p>Ticks sem re-inscrever efeito por tema: {ticks}</p>
        <button type="button" onClick={() => setTheme((value) => (value === 'light' ? 'dark' : 'light'))}>Trocar tema ({theme})</button>
      </section>
    </section>
  )
}
