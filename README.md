# SSR Workshop: Add Server-Side Rendering to Vite + Vue

Welcome to the SSR workshop! In this exercise, you'll complete the implementation of Server-Side Rendering (SSR) for a Vue.js application using Vite.

## 🎯 Workshop Objectives

By the end of this workshop, you'll understand:
- How to set up SSR entry points for client and server
- How to render Vue components on the server
- How to hydrate the client-side application
- How to configure build scripts for SSR

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. **The app currently works as a SPA (Single Page Application)**:
   ```bash
   npm run dev:spa
   ```
   Visit http://localhost:5173

3. **Your goal**: Make it work with SSR by completing the TODOs:
   ```bash
   npm run dev
   ```

4. Look for `TODO` comments throughout the codebase - these are your tasks!

## 📝 Tasks Overview

### Task 1: Configure the App Factory (`src/main.js`)
- Import the correct Vue function for SSR
- Create an SSR-compatible app instance

### Task 2: Implement Server Entry (`src/entry-server.js`)
- Import the server renderer
- Import the app factory
- Create app instance for each request
- Render the app to HTML string

### Task 3: Complete Client Entry (`src/entry-client.js`)
- Mount the app for client-side hydration

### Task 4: Set Up HTML Template (`index.html`)
- Add placeholders for server-rendered content
- Include the client entry script

### Task 5: Fix Server Logic (`server.js`)
- Load the server entry module correctly
- Call the render function
- Replace HTML placeholders with rendered content

### Task 6: Configure Build Script (`package.json`)
- Add the correct SSR build command

## 🔍 Key Concepts

### SSR vs CSR
- **CSR (Client-Side Rendering)**: App renders in the browser
- **SSR (Server-Side Rendering)**: App renders on the server, then hydrates on the client

### Entry Points
- **Client Entry**: Hydrates the pre-rendered HTML
- **Server Entry**: Renders the app to HTML string

### Hydration
The process where the client-side JavaScript takes over the server-rendered HTML, making it interactive.

## 🧪 Testing Your Implementation

1. **Compare SPA vs SSR**:

   **SPA Mode (works out of the box)**:
   ```bash
   npm run dev:spa
   ```
   - View source: You'll see an empty `<div id="app"></div>`
   - Disable JavaScript: Page will be blank

   **SSR Mode (your goal)**:
   ```bash
   npm run dev
   ```
   - View source: You should see rendered HTML content inside the div
   - Disable JavaScript: Page should still display content

2. **Production build**:
   ```bash
   npm run build
   npm run preview
   ```

3. **Verify SSR is working**:
   - View page source - you should see rendered HTML content
   - Disable JavaScript - the page should still display content
   - Check Network tab - initial HTML should contain your app content

## 💡 Hints

<details>
<summary>Click for hints if you get stuck</summary>

### Main.js Hints
- Use `createSSRApp` instead of `createApp`
- The function should return `{ app }`

### Entry-server.js Hints
- Import `renderToString` from `'vue/server-renderer'`
- Call `renderToString(app, ctx)` to get HTML
- Return an object with `{ html }`

### Server.js Hints
- Use `vite.ssrLoadModule('/src/entry-server.js')` in development
- Use `import('./dist/server/entry-server.js')` in production
- Replace `<!--app-html-->` with `rendered.html`

### Build Script Hint
- Use: `vite build --ssr src/entry-server.js --outDir dist/server`

</details>

## 🎉 Success Criteria

Your SSR implementation is complete when:
- [ ] The app renders on the server (view source shows content)
- [ ] The app hydrates properly on the client (interactive)
- [ ] Both development and production modes work
- [ ] Build scripts execute without errors

## 📚 Additional Resources

- [Vue SSR Guide](https://vuejs.org/guide/scaling-up/ssr.html)
- [Vite SSR Documentation](https://vitejs.dev/guide/ssr.html)
- [Vue Server Renderer API](https://vuejs.org/api/ssr.html)

Good luck! 🚀
