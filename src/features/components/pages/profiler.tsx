import { Profiler, useRef, useState } from 'react'

export const ProfilerExample = () => {
  const [count, setCount] = useState(0)
  const lastDurationRef = useRef(0)

  return (
    <section className="content-card">
      <h1>Profiler</h1>
      <section className="live-demo">
        <Profiler
          id="counter-profiler"
          onRender={(_, __, actualDuration) => {
            lastDurationRef.current = actualDuration
          }}
        >
          <p>Count: {count}</p>
        </Profiler>
        <button type="button" onClick={() => setCount((value) => value + 1)}>Re-render</button>
        <p>Última duração capturada: {lastDurationRef.current.toFixed(2)}ms</p>
      </section>
    </section>
  )
}
