import { forwardRef, useImperativeHandle, useRef } from 'react'

type FocusHandle = { focusInput: () => void }

const FocusInput = forwardRef<FocusHandle>(function FocusInput(_, ref) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  useImperativeHandle(ref, () => ({ focusInput: () => inputRef.current?.focus() }))
  return <input ref={inputRef} placeholder="Campo controlado por ref" />
})

export const useImperativeHandleExample = () => {
  const childRef = useRef<FocusHandle | null>(null)

  return (
    <section className="content-card">
      <h1>useImperativeHandle</h1>
      <section className="live-demo">
        <FocusInput ref={childRef} />
        <button type="button" onClick={() => childRef.current?.focusInput()}>Focar input via handle</button>
      </section>
    </section>
  )
}
