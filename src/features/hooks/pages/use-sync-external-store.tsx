import { useSyncExternalStore } from 'react'

function subscribeOnlineStatus(callback: () => void) {
  window.addEventListener('online', callback)
  window.addEventListener('offline', callback)
  return () => {
    window.removeEventListener('online', callback)
    window.removeEventListener('offline', callback)
  }
}

function getOnlineSnapshot() {
  return window.navigator.onLine
}

function getServerOnlineSnapshot() {
  return true
}

export const useSyncExternalStoreExample = () => {
  const isOnline = useSyncExternalStore(subscribeOnlineStatus, getOnlineSnapshot, getServerOnlineSnapshot)

  return (
    <section className="content-card">
      <h1>useSyncExternalStore</h1>
      <section className="live-demo">
        <p>Status da conexão do navegador: {isOnline ? 'Online' : 'Offline'}</p>
      </section>
    </section>
  )
}
