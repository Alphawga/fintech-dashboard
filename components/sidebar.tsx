"use client"

import Link from "next/link"
import { BarChart3, Compass, Heart, LineChart, PieChart, TrendingUp, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navigation = [
  { name: "Explore", href: "/", icon: Compass, current: true },
  { name: "Stocks", href: "/stocks", icon: TrendingUp, current: false },
  { name: "F&O", href: "/fno", icon: LineChart, current: false },
  { name: "Mutual Funds", href: "/mutual-funds", icon: PieChart, current: false },
  { name: "Watchlist", href: "/watchlist", icon: Heart, current: false },
  { name: "Investments", href: "/investments", icon: BarChart3, current: false },
  { name: "Markets", href: "/markets", icon: TrendingUp, current: false },
  { name: "Tools", href: "/tools", icon: Wrench, current: false },
]

export function Sidebar() {
  return (
    <div className="hidden w-64 flex-shrink-0 border-r border-border bg-background md:flex md:flex-col">
      <div className="flex h-16 items-center border-b border-border px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <span className="text-lg font-bold text-white">F</span>
          </div>
          <span className="text-xl font-bold">Fobework</span>
        </Link>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 space-y-1 px-4 py-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                item.current
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium",
              )}
            >
              <item.icon
                className={cn(
                  item.current ? "text-foreground" : "text-muted-foreground group-hover:text-foreground",
                  "mr-3 h-5 w-5 flex-shrink-0",
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="border-t border-border p-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

