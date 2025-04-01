"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, HelpCircle, Menu, Search, Settings, Upload } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "./theme-toggle"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const isMobile = useMobile()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <>

      <header className="flex h-14 md:h-16 shrink-0 items-center gap-2 border-b border-border bg-background px-3 md:gap-4 md:px-6  ">

        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileNavOpen(true)} 
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        )}


<div className="hidden md:flex">
          <Button className="gap-2" variant="outline">
            <Upload className="h-4 w-4" />
            Deposit
          </Button>
        </div>

<div className="flex ml-auto items-center">

        <div className="relative flex-1 md:flex-none">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search funds..." 
            className="w-full bg-background pl-8 md:w-64" 
          />
        </div>

   
        <div className="flex items-center gap-2 md:gap-4">
          {/* Notifications - Hidden on mobile */}
          <Button variant="ghost" size="icon" className="hidden text-muted-foreground md:flex">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>

          {/* Settings - Hidden on mobile */}
          <Button variant="ghost" size="icon" className="hidden text-muted-foreground md:flex">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>

          {/* Help - Hidden on mobile */}
          <Button variant="ghost" size="icon" className="hidden text-muted-foreground md:flex">
            <HelpCircle className="h-5 w-5" />
            <span className="sr-only">Help</span>
          </Button>

          {/* Avatar - Smaller on mobile */}
          <Avatar className="h-7 w-7 border border-border md:h-8 md:w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>BA</AvatarFallback>
          </Avatar>
        </div>
</div>
      </header>

 
      <MobileNav 
        isOpen={isMobileNavOpen} 
        onClose={() => setIsMobileNavOpen(false)} 
      />
    </>
  )
}

