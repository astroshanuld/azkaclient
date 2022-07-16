/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, Dispatch, useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth'

interface IAuthContext {
  initializing: boolean
  setInitializing: Dispatch<React.SetStateAction<boolean>>
  user: any
  setUser: Dispatch<any>
}

export const AuthContext = createContext<Partial<IAuthContext>>({})

const AuthProvider = ({ children }) => {
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

  const onAuthStateChanged = (user) => {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    auth().onAuthStateChanged(onAuthStateChanged)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        initializing,
        setInitializing,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
