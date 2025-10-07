import './style.css'
import { createApp } from './main'

const { app } = createApp()

// This works for SPA mode, but for SSR we need to consider hydration
app.mount('#app')

// TODO: For SSR, you might want to use app.mount('#app') for hydration
// The current setup works for SPA, but SSR requires the server to pre-render
// the HTML and the client to "hydrate" it (attach event listeners, etc.)
