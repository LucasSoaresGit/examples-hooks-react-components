import { useActionState } from 'react'

async function saveProfileAction(_: { message: string }, formData: FormData) {
  const name = String(formData.get('name') ?? '').trim()
  await new Promise((resolve) => setTimeout(resolve, 700))
  return { message: name ? `Perfil salvo para ${name}.` : 'Digite um nome para enviar.' }
}

export const useActionStateExample = () => {
  const [state, formAction, pending] = useActionState(saveProfileAction, { message: 'Nenhum envio ainda.' })

  return (
    <section className="content-card">
      <h1>useActionState</h1>
      <section className="live-demo">
        <form action={formAction} className="demo-form">
          <input name="name" placeholder="Nome Jedi" />
          <button type="submit" disabled={pending}>{pending ? 'Enviando...' : 'Enviar'}</button>
        </form>
        <p>{state.message}</p>
      </section>
    </section>
  )
}
