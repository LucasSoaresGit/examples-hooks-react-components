import { Suspense, use, useMemo, useState } from 'react'

type SwapiPerson = {
  name: string
  height: string
  mass: string
  birth_year: string
  gender: string
}

type SwapiPersonResult =
  | { ok: true; person: SwapiPerson }
  | { ok: false; message: string }

const swapiPeopleCache = new Map<number, Promise<SwapiPersonResult>>()

function getSwapiPersonResource(id: number): Promise<SwapiPersonResult> {
  const cached = swapiPeopleCache.get(id)
  if (cached) return cached

  const resource = fetch(`https://swapi.py4e.com/api/people/${id}/`)
    .then(async (response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      return { ok: true, person: (await response.json()) as SwapiPerson } as SwapiPersonResult
    })
    .catch((error: unknown) => ({
      ok: false,
      message: `Falha ao buscar personagem: ${error instanceof Error ? error.message : 'erro desconhecido'}`,
    } as SwapiPersonResult))

  swapiPeopleCache.set(id, resource)
  return resource
}

function PersonCard({ resource }: { resource: Promise<SwapiPersonResult> }) {
  const result = use(resource)
  if (!result.ok) return <p className="swapi-error">{result.message}</p>

  return (
    <div className="swapi-card">
      <p><strong>Nome:</strong> {result.person.name}</p>
      <p><strong>Altura:</strong> {result.person.height}</p>
      <p><strong>Massa:</strong> {result.person.mass}</p>
      <p><strong>Nascimento:</strong> {result.person.birth_year}</p>
      <p><strong>Genero:</strong> {result.person.gender}</p>
    </div>
  )
}

export const useExample = () => {
  const [characterId, setCharacterId] = useState(1)
  const resource = useMemo(() => getSwapiPersonResource(characterId), [characterId])

  return (
    <section className="content-card">
      <h1>use</h1>
      <p>Exemplo prático com request HTTP real na API pública Star Wars.</p>
      <section className="live-demo">
        <div className="swapi-controls">
          <button type="button" onClick={() => setCharacterId((id) => Math.max(1, id - 1))}>Anterior</button>
          <span>ID: {characterId}</span>
          <button type="button" onClick={() => setCharacterId((id) => Math.min(10, id + 1))}>Próximo</button>
        </div>
        <Suspense fallback={<p>Carregando...</p>}>
          <PersonCard resource={resource} />
        </Suspense>
      </section>
    </section>
  )
}
