import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { render } from 'react-dom'

import App from './App'
import { UserProvider } from './context/user-context/user.context'

import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
  </React.StrictMode>
)