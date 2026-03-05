import { createContext, useContext, useState } from 'react'

const ThemeDemoContext = createContext<'light' | 'dark'>('light')

function ThemeConsumerCard() {
  const theme = useContext(ThemeDemoContext)
  return <p>Tema atual do contexto: {theme}</p>
}

export const useContextExample = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <section className="content-card">
      <h1>useContext</h1>
      <section className="live-demo">
        <ThemeDemoContext.Provider value={theme}>
          <ThemeConsumerCard />
        </ThemeDemoContext.Provider>
        <button type="button" onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>Trocar tema</button>
      </section>
    </section>
  )
}
