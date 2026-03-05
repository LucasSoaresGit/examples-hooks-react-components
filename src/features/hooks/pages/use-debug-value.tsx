import { useDebugValue, useEffect, useState } from 'react'

function useFakeConnection() {
  const [online, setOnline] = useState(true)
  useEffect(() => {
    const id = window.setInterval(() => setOnline((value) => !value), 2500)
    return () => window.clearInterval(id)
  }, [])
  useDebugValue(online ? 'Online' : 'Offline')
  return online
}

export const useDebugValueExample = () => {
  const online = useFakeConnection()

  return (
    <section className="content-card">
      <h1>useDebugValue</h1>
      <section className="live-demo">
        <p>Status simulado: {online ? 'Online' : 'Offline'}</p>
        <p>Abra React DevTools para ver o label do custom hook.</p>
      </section>
    </section>
  )
}
