import { Activity, useState } from 'react'

function ActivityPanel() {
  const [notes, setNotes] = useState('')
  const [count, setCount] = useState(0)

  return (
    <div className="swapi-card">
      <p>Este conteúdo está dentro de um boundary <code>Activity</code>.</p>
      <div className="swapi-controls">
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          Incrementar contador
        </button>
        <span>Count: {count}</span>
      </div>
      <textarea
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
        placeholder="Digite algo e depois esconda/mostre a Activity..."
        rows={4}
        style={{ width: '100%', borderRadius: '8px', padding: '0.6rem', border: '1px solid #94a3b8' }}
      />
    </div>
  )
}

export const ActivityExample = () => {
  const [mode, setMode] = useState<'visible' | 'hidden'>('visible')

  return (
    <section className="content-card">
      <h1>Activity</h1>
      <p>Exemplo real de <code>{'<Activity />'}</code> usando React canary.</p>
      <section className="live-demo">
        <div className="swapi-controls">
          <button type="button" onClick={() => setMode('visible')}>
            Modo visible
          </button>
          <button type="button" onClick={() => setMode('hidden')}>
            Modo hidden
          </button>
          <span>Mode atual: {mode}</span>
        </div>

        <Activity mode={mode} name="activity-demo-boundary">
          <ActivityPanel />
        </Activity>
      </section>
    </section>
  )
}
