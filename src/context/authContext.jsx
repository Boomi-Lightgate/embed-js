import { createContext, useReducer, useEffect, useCallback } from 'react'

export const AuthContext = createContext()
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null
  })

  useEffect(() => {
    const lgData = JSON.parse(localStorage.getItem('lgData'))
    if (lgData) {
      dispatch({ type: 'LOGIN', payload: lgData })
    }
  }, [])

  const getUser = useCallback(() => {
    return state.user
  }, [state.user])

  return (
    <AuthContext.Provider value={{ ...state, dispatch, getUser }}>
      {children}
    </AuthContext.Provider>
  )
}
