import { StrictMode, useEffect, useState } from 'react'

function StrictModeProbe() {
  const [effectRuns, setEffectRuns] = useState(0)

  useEffect(() => {
    setEffectRuns((value) => value + 1)
  }, [])

  return <p>Execuções do efeito de montagem: {effectRuns}</p>
}

export const StrictModeExample = () => {
  return (
    <section className="content-card">
      <h1>StrictMode</h1>
      <section className="live-demo">
        <p>Em desenvolvimento, StrictMode pode executar efeitos duas vezes para detectar problemas.</p>
        <StrictMode>
          <StrictModeProbe />
        </StrictMode>
      </section>
    </section>
  )
}
