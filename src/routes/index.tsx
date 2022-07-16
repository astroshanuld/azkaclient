import React from 'react'
import AuthProvider from 'routes/AuthProvider'
import Routes from 'routes/Routes'

const Provider = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
)

export default Provider
