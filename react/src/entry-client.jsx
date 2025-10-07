import './index.css'
import { StrictMode } from 'react'
// TODO: Import the correct function for SSR hydration
// Hint: For SSR, use hydrateRoot from 'react-dom/client'
// For SPA, you would use createRoot from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App'

// This works for SPA mode, but for SSR we need hydration
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// TODO: For SSR, replace createRoot().render() with hydrateRoot()
// Hint: hydrateRoot(document.getElementById('root'), <StrictMode><App /></StrictMode>)
// The difference: createRoot().render() creates a new DOM tree (SPA)
// hydrateRoot() attaches to existing server-rendered HTML (SSR)
