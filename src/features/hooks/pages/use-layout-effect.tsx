import { useLayoutEffect, useRef, useState } from 'react'

export const useLayoutEffectExample = () => {
  const boxRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    setWidth(boxRef.current?.offsetWidth ?? 0)
  }, [])

  return (
    <section className="content-card">
      <h1>useLayoutEffect</h1>
      <section className="live-demo">
        <div ref={boxRef} className="measure-box">Caixa de medição</div>
        <p>Largura medida antes da pintura: {width}px</p>
      </section>
    </section>
  )
}
