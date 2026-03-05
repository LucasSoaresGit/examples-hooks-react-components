import type { ComponentType } from 'react'
import { ActivityExample } from '../features/components/pages/activity'
import { FragmentExample } from '../features/components/pages/fragment'
import { ProfilerExample } from '../features/components/pages/profiler'
import { StrictModeExample } from '../features/components/pages/strict-mode'
import { SuspenseExample } from '../features/components/pages/suspense'
import { useActionStateExample } from '../features/hooks/pages/use-action-state'
import { useCallbackExample } from '../features/hooks/pages/use-callback'
import { useContextExample } from '../features/hooks/pages/use-context'
import { useDebugValueExample } from '../features/hooks/pages/use-debug-value'
import { useDeferredValueExample } from '../features/hooks/pages/use-deferred-value'
import { useEffectEventExample } from '../features/hooks/pages/use-effect-event'
import { useEffectExample } from '../features/hooks/pages/use-effect'
import { useIdExample } from '../features/hooks/pages/use-id'
import { useImperativeHandleExample } from '../features/hooks/pages/use-imperative-handle'
import { useInsertionEffectExample } from '../features/hooks/pages/use-insertion-effect'
import { useLayoutEffectExample } from '../features/hooks/pages/use-layout-effect'
import { useMemoExample } from '../features/hooks/pages/use-memo'
import { useOptimisticExample } from '../features/hooks/pages/use-optimistic'
import { useReducerExample } from '../features/hooks/pages/use-reducer'
import { useRefExample } from '../features/hooks/pages/use-ref'
import { useStateExample } from '../features/hooks/pages/use-state'
import { useSyncExternalStoreExample } from '../features/hooks/pages/use-sync-external-store'
import { useTransitionExample } from '../features/hooks/pages/use-transition'
import { useExample } from '../features/hooks/pages/use'

export type AppRoute = {
  name: string
  path: string
  section: 'Hooks' | 'Components'
  component: ComponentType
}

export const hookRoutes: AppRoute[] = [
  { name: 'use', path: '/hooks/use', section: 'Hooks', component: useExample },
  { name: 'useActionState', path: '/hooks/use-action-state', section: 'Hooks', component: useActionStateExample },
  { name: 'useCallback', path: '/hooks/use-callback', section: 'Hooks', component: useCallbackExample },
  { name: 'useContext', path: '/hooks/use-context', section: 'Hooks', component: useContextExample },
  { name: 'useDebugValue', path: '/hooks/use-debug-value', section: 'Hooks', component: useDebugValueExample },
  { name: 'useDeferredValue', path: '/hooks/use-deferred-value', section: 'Hooks', component: useDeferredValueExample },
  { name: 'useEffect', path: '/hooks/use-effect', section: 'Hooks', component: useEffectExample },
  { name: 'useEffectEvent', path: '/hooks/use-effect-event', section: 'Hooks', component: useEffectEventExample },
  { name: 'useId', path: '/hooks/use-id', section: 'Hooks', component: useIdExample },
  { name: 'useImperativeHandle', path: '/hooks/use-imperative-handle', section: 'Hooks', component: useImperativeHandleExample },
  { name: 'useInsertionEffect', path: '/hooks/use-insertion-effect', section: 'Hooks', component: useInsertionEffectExample },
  { name: 'useLayoutEffect', path: '/hooks/use-layout-effect', section: 'Hooks', component: useLayoutEffectExample },
  { name: 'useMemo', path: '/hooks/use-memo', section: 'Hooks', component: useMemoExample },
  { name: 'useOptimistic', path: '/hooks/use-optimistic', section: 'Hooks', component: useOptimisticExample },
  { name: 'useReducer', path: '/hooks/use-reducer', section: 'Hooks', component: useReducerExample },
  { name: 'useRef', path: '/hooks/use-ref', section: 'Hooks', component: useRefExample },
  { name: 'useState', path: '/hooks/use-state', section: 'Hooks', component: useStateExample },
  { name: 'useSyncExternalStore', path: '/hooks/use-sync-external-store', section: 'Hooks', component: useSyncExternalStoreExample },
  { name: 'useTransition', path: '/hooks/use-transition', section: 'Hooks', component: useTransitionExample },
]

export const componentRoutes: AppRoute[] = [
  { name: 'Activity', path: '/components/activity', section: 'Components', component: ActivityExample },
  { name: 'Fragment', path: '/components/fragment', section: 'Components', component: FragmentExample },
  { name: 'Profiler', path: '/components/profiler', section: 'Components', component: ProfilerExample },
  { name: 'StrictMode', path: '/components/strict-mode', section: 'Components', component: StrictModeExample },
  { name: 'Suspense', path: '/components/suspense', section: 'Components', component: SuspenseExample },
]

export const appRoutes: AppRoute[] = [...hookRoutes, ...componentRoutes]
