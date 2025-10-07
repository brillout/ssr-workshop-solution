# SSR Workshop: Add Server-Side Rendering to Vite + React

Welcome to the React SSR workshop! In this exercise, you'll complete the implementation of Server-Side Rendering (SSR) for a React application using Vite.

## 🎯 Workshop Objectives

By the end of this workshop, you'll understand:
- How to set up SSR entry points for client and server in React
- How to render React components on the server using `renderToString`
- How to hydrate the client-side React application
- The difference between `createRoot` (SPA) and `hydrateRoot` (SSR)
- How to configure build scripts for React SSR

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

### Task 1: Implement Server Entry (`src/entry-server.jsx`)
- Import the React server renderer
- Use `renderToString` to render the React app to HTML

### Task 2: Fix Client Entry (`src/entry-client.jsx`)
- Import `hydrateRoot` for SSR hydration
- Replace `createRoot().render()` with `hydrateRoot()`

### Task 3: Set Up HTML Template (`index.html`)
- Add placeholders for server-rendered content
- Ensure the client entry script is included

### Task 4: Complete Server Logic (`server.js`)
- Load the server entry module correctly
- Call the render function
- Replace HTML placeholders with rendered content

### Task 5: Configure Build Script (`package.json`)
- Add the correct SSR build command

## 🔍 Key Concepts

### SSR vs SPA in React
- **SPA (Single Page Application)**: Uses `createRoot().render()` to create a new DOM tree
- **SSR (Server-Side Rendering)**: Uses `hydrateRoot()` to attach to existing server-rendered HTML

### React Server Rendering
- **`renderToString()`**: Renders React components to HTML string on the server
- **`hydrateRoot()`**: Attaches event listeners to server-rendered HTML on the client

### Hydration Process
The process where the client-side React takes over the server-rendered HTML, making it interactive by attaching event listeners and state.

## 🧪 Testing Your Implementation

1. **Compare SPA vs SSR**:
   
   **SPA Mode (works out of the box)**:
   ```bash
   npm run dev:spa
   ```
   - View source: You'll see an empty `<div id="root"></div>`
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
   - Test interactivity - buttons should work (hydration successful)

## 💡 Hints

<details>
<summary>Click for hints if you get stuck</summary>

### Entry-server.jsx Hints
- Import `renderToString` from `'react-dom/server'`
- Use `renderToString(<StrictMode><App /></StrictMode>)` to get HTML
- Return an object with `{ html }`

### Entry-client.jsx Hints
- Import `hydrateRoot` from `'react-dom/client'`
- Replace `createRoot(element).render(jsx)` with `hydrateRoot(element, jsx)`
- The element is `document.getElementById('root')`

### Server.js Hints
- Use `vite.ssrLoadModule('/src/entry-server.jsx')` in development
- Use `import('./dist/server/entry-server.js')` in production
- Replace `<!--app-html-->` with `rendered.html`

### Build Script Hint
- Use: `vite build --ssr src/entry-server.jsx --outDir dist/server`

</details>

## 🎉 Success Criteria

Your React SSR implementation is complete when:
- [ ] The app renders on the server (view source shows content)
- [ ] The app hydrates properly on the client (interactive)
- [ ] Both development and production modes work
- [ ] Build scripts execute without errors
- [ ] Counter button works (proving hydration is successful)

## 📚 Additional Resources

- [React Server Components](https://react.dev/reference/react-dom/server)
- [Vite SSR Documentation](https://vitejs.dev/guide/ssr.html)
- [React Hydration Guide](https://react.dev/reference/react-dom/client/hydrateRoot)

Good luck! 🚀
