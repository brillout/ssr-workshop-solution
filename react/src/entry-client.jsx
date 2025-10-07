import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// TODO: For SSR, replace createRoot().render() with hydrateRoot() — this will hydrate server-rendered HTML.
// Hint: import { hydrateRoot } from 'react-dom/client' — https://react.dev/reference/react-dom/client/hydrateRoot
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
