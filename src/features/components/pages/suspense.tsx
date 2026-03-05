import { Suspense, use, useMemo, useState } from 'react'

function buildSuspenseMessageResource() {
  return new Promise<string>((resolve) => {
    window.setTimeout(() => {
      resolve('Mensagem carregada de forma assíncrona com Suspense.')
    }, 1100)
  })
}

function SuspenseMessage({ resource }: { resource: Promise<string> }) {
  const message = use(resource)
  return <p>{message}</p>
}

export const SuspenseExample = () => {
  const [nonce, setNonce] = useState(0)
  const resource = useMemo(() => buildSuspenseMessageResource(), [nonce])

  return (
    <section className="content-card">
      <h1>Suspense</h1>
      <section className="live-demo">
        <button type="button" onClick={() => setNonce((value) => value + 1)}>Recarregar conteúdo assíncrono</button>
        <Suspense fallback={<p>Carregando fallback do Suspense...</p>}>
          <SuspenseMessage resource={resource} />
        </Suspense>
      </section>
    </section>
  )
}
