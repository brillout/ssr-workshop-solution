# SSR Workshop: Add Server-Side Rendering to Vite + Vue

Welcome to the SSR workshop! In this exercise, you'll complete the implementation of Server-Side Rendering (SSR) for a Vue.js application using Vite.

## 🎯 Workshop Objectives

By the end of this workshop, you'll understand:
- How to set up SSR entry points for client and server
- How to render Vue components on the server
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
   - Test whether SSR also works in production.

## 🎉 Success Criteria

Your SSR implementation is complete when:
- [ ] The app renders on the server (view source shows content)
- [ ] The app hydrates properly on the client (interactive)
- [ ] Both development and production modes work

## 📚 Additional Resources

- [Vue SSR Guide](https://vuejs.org/guide/scaling-up/ssr.html)
- [Vite SSR Documentation](https://vitejs.dev/guide/ssr.html)
- [Vue Server Renderer API](https://vuejs.org/api/ssr.html)

Good luck! 🚀
