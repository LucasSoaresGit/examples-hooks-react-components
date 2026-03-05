import { useReducer } from 'react'

type CounterAction = { type: 'inc' } | { type: 'dec' }

function reducer(state: { count: number }, action: CounterAction) {
  if (action.type === 'inc') return { count: state.count + 1 }
  return { count: state.count - 1 }
}

export const useReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <section className="content-card">
      <h1>useReducer</h1>
      <section className="live-demo">
        <p>Count: {state.count}</p>
        <div className="swapi-controls">
          <button type="button" onClick={() => dispatch({ type: 'dec' })}>-1</button>
          <button type="button" onClick={() => dispatch({ type: 'inc' })}>+1</button>
        </div>
      </section>
    </section>
  )
}
