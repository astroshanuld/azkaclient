import React, { createContext, Dispatch, useState } from 'react'

interface IAuthContext {
  isAuthPassed: boolean
  setIsAuthPassed: Dispatch<React.SetStateAction<boolean>>
  uid: string
  setUid: Dispatch<React.SetStateAction<string>>
}

export const AuthContext = createContext<Partial<IAuthContext>>({})

const AuthProvider = ({ children }) => {
  const [isAuthPassed, setIsAuthPassed] = useState<boolean>(false)
  const [uid, setUid] = useState<string>('')

  return (
    <AuthContext.Provider
      value={{
        isAuthPassed,
        setIsAuthPassed,
        uid,
        setUid,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
