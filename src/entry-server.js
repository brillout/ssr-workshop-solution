// TODO: Import the renderToString function from Vue's server renderer
// Hint: import { renderToString } from 'vue/server-renderer'

// TODO: Import the createApp function from './main'

/**
 * @param {string} _url
 */
export async function render(_url) {
  // TODO: Create a fresh app instance for this request
  // Hint: Use the createApp function and destructure to get { app }
  const { app } = null // Replace this line

  // passing SSR context object which will be available via useSSRContext()
  // @vitejs/plugin-vue injects code into a component's setup() that registers
  // itself on ctx.modules. After the render, ctx.modules would contain all the
  // components that have been instantiated during this render call.
  const ctx = {}

  // TODO: Render the app to a string using Vue's server renderer
  // Hint: Use renderToString(app, ctx)
  const html = null // Replace this line

  return { html }
}
