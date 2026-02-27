import React from 'react'
import { AppRoutes } from './routes'
import './style.scss'
import { AuthProvider } from './Features/auth/auth.context.jsX'

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
