import { Fragment } from 'react'

export const FragmentExample = () => {
  const squads = [
    { id: 1, title: 'Esquadrão Rogue', description: 'Pilotos da Aliança Rebelde.' },
    { id: 2, title: 'Jedi Council', description: 'Mestres e aprendizes da Força.' },
  ]

  return (
    <section className="content-card">
      <h1>Fragment</h1>
      <section className="live-demo">
        {squads.map((squad) => (
          <Fragment key={squad.id}>
            <h3>{squad.title}</h3>
            <p>{squad.description}</p>
          </Fragment>
        ))}
        <p>Os blocos acima foram agrupados sem wrappers extras no DOM.</p>
      </section>
    </section>
  )
}
