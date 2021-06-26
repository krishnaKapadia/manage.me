import React, { FC, useMemo, useState } from 'react'
// create context
export const SidebarContext = React.createContext<any>({})

export const SidebarProvider: FC = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen)
  }
  function closeSidebar() {
    setIsSidebarOpen(false)
  }
  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
    }),
    [isSidebarOpen],
  )
  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}
