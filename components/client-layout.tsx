"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { useMobile } from "@/hooks/use-mobile"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      {!isMobile ? (
        <Sidebar />
      ) : (
        <MobileNav open={sidebarOpen} onOpenChange={setSidebarOpen} />
      )}
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
} 