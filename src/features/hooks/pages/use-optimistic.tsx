import { useOptimistic, useState } from 'react'

export const useOptimisticExample = () => {
  const [messages, setMessages] = useState<string[]>(['Bem-vindo ao holonet'])
  const [draft, setDraft] = useState('')

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (currentState, newMessage: string) => [...currentState, `${newMessage} (enviando...)`],
  )

  async function sendMessage() {
    const message = draft.trim()
    if (!message) return

    setDraft('')
    addOptimisticMessage(message)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setMessages((currentState) => [...currentState, message])
  }

  return (
    <section className="content-card">
      <h1>useOptimistic</h1>
      <section className="live-demo">
        <div className="demo-form">
          <input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Mensagem" />
          <button type="button" onClick={sendMessage}>Enviar</button>
        </div>
        <ul className="demo-list">{optimisticMessages.map((message, index) => <li key={`${message}-${index}`}>{message}</li>)}</ul>
      </section>
    </section>
  )
}
