"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Watchlist",
    href: "/watchlist",
  },
  {
    title: "Transactions",
    href: "/transactions",
  },
  {
    title: "Settings",
    href: "/settings",
  },
]

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[280px] transform border-r bg-background transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b px-4">
          <span className="text-lg font-bold">Fobework</span>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
                </div>

        {/* Menu Items */}
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <nav className="flex flex-col gap-1 p-4">
            {menuItems.map((item) => (
                    <Link
                key={item.href}
                      href={item.href}
                      className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                        )}
                onClick={onClose}
              >
                {item.title}
                    </Link>
                  ))}
                </nav>
        </ScrollArea>

        {/* Footer */}
        <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-muted" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">Bamidele Ajibola</span>
              <span className="text-xs text-muted-foreground">View Profile</span>
            </div>
              </div>
        </div>
      </div>
    </>
  )
}

