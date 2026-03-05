import { useEffect, useState } from 'react'

export const useEffectExample = () => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((value) => value + 1), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="content-card">
      <h1>useEffect</h1>
      <section className="live-demo">
        <p>Contador atualizado por side effect: {seconds}s</p>
      </section>
    </section>
  )
}
