import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import { appRoutes, componentRoutes, hookRoutes } from './routes/appRoutes'
import './App.css'

type CatalogItem = {
  name: string
  path: string
}

function HomePage() {
  return (
    <section className="content-card">
      <h1>React Reference</h1>
      <p>Use a sidebar para navegar por todos os hooks e componentes nativos do React.</p>
      <p>Escolha um item para abrir sua rota dedicada.</p>
    </section>
  )
}

function SidebarSection({
  title,
  items,
}: {
  title: string
  items: CatalogItem[]
}) {
  return (
    <section className="sidebar-section">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path} className={({ isActive }) => (isActive ? 'active' : '')}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  )
}

function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <NavLink to="/" className="brand">
          React App
        </NavLink>
        <SidebarSection title="Hooks" items={hookRoutes} />
        <SidebarSection title="Components" items={componentRoutes} />
      </aside>

      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {appRoutes.map((route) => {
            const RouteComponent = route.component
            return <Route key={route.path} path={route.path} element={<RouteComponent />} />
          })}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
