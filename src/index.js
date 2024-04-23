import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { UserProvider } from './context/user-context/user.context'
import App from './App'

import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </UserProvider>
  </React.StrictMode>
)