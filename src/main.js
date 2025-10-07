import { createApp as createVueApp } from 'vue'
// TODO: Import createSSRApp for SSR compatibility
// Hint: import { createSSRApp } from 'vue'

import App from './App.vue'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  // TODO: For SSR, replace createVueApp with createSSRApp
  // This will make the app compatible with server-side rendering
  const app = createVueApp(App)
  return { app }
}
