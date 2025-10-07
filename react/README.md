# SSR Workshop: Add Server-Side Rendering to Vite + React

Welcome to the React SSR workshop! In this exercise, you'll complete the implementation of Server-Side Rendering (SSR) for a React application using Vite.

## 🎯 Workshop Objectives

By the end of this workshop, you'll understand:
- How to set up SSR entry points for client and server in React
- How to render React components on the server
- How to hydrate the client-side application

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
   - Test whether SSR also works in production.

## 🎉 Success Criteria

Your React SSR implementation is complete when:
- [ ] The app renders on the server (view source shows content)
- [ ] The app hydrates properly on the client (interactive)
- [ ] Both development and production modes work

## 📚 Additional Resources

- [React Server Components](https://react.dev/reference/react-dom/server)
- [Vite SSR Documentation](https://vitejs.dev/guide/ssr.html)
- [React Hydration Guide](https://react.dev/reference/react-dom/client/hydrateRoot)

Good luck! 🚀
