import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react'

interface Props {
  children: React.ReactNode
}

interface ContextProps {
  darkTheme: boolean
  setDarkTheme: Dispatch<SetStateAction<boolean>>
}

export const ThemeChangeContext = createContext<ContextProps>({
  darkTheme: false,
  setDarkTheme: () => {},
})

export const ThemeChangeContextProvider = ({ children }: Props) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false)

  const ThemeChangeContextValue = useMemo(
    () => ({
      darkTheme,
      setDarkTheme,
    }),
    [darkTheme, setDarkTheme],
  )

  return (
    <ThemeChangeContext.Provider value={ThemeChangeContextValue}>
      {children}
    </ThemeChangeContext.Provider>
  )
}
