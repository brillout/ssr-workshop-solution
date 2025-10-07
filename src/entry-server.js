import { createApp } from './main'

/**
 * @param {string} _url
 */
export async function render(_url) {
  const { app } = createApp()

  // passing SSR context object which will be available via useSSRContext()
  // @vitejs/plugin-vue injects code into a component's setup() that registers
  // itself on ctx.modules. After the render, ctx.modules would contain all the
  // components that have been instantiated during this render call.
  const ctx = {}

  // TODO: Render the app to a string using Vue
  // Hint: Use renderToString() — https://vuejs.org/guide/scaling-up/ssr.html
  const html = null // Replace this line

  return { html }
}
