import React, { ReactNode } from 'react'
import { SidebarProvider, SidebarTrigger } from './ui/sidebar'
import { AppSidebar } from './AppSidebar'

const Sidebar = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <main>
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
        </>
    )
}

export default Sidebar
