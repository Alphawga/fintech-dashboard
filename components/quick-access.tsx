"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gift, Upload, BarChart2, Calculator } from "lucide-react"

const quickAccessItems = [
  {
    name: "New Fund Offerings",
    icon: Gift,
    href: "#",
    color: "from-purple-500/20 to-indigo-500/20 border-purple-500/50",
    iconColor: "text-purple-500"
  },
  {
    name: "Import Funds",
    icon: Upload,
    href: "#",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/50",
    iconColor: "text-blue-500"
  },
  {
    name: "Compare Funds",
    icon: BarChart2,
    href: "#",
    color: "from-green-500/20 to-emerald-500/20 border-green-500/50",
    iconColor: "text-green-500"
  },
  {
    name: "SIP Calculator",
    icon: Calculator,
    href: "#",
    color: "from-orange-500/20 to-amber-500/20 border-orange-500/50",
    iconColor: "text-orange-500"
  },
]

function QuickAccessCard({ name, icon: Icon, color, iconColor, href }: {
  name: string
  icon: any
  color: string
  iconColor: string
  href: string
}) {
  return (
    <Card className={`relative overflow-hidden border bg-gradient-to-br ${color} hover:shadow-lg transition-all duration-200`}>
      <CardContent className="flex flex-col items-center justify-center p-6">
        <div className={`mb-4 rounded-full p-3 ${iconColor}`}>
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-center font-medium">{name}</h3>
      </CardContent>
    </Card>
  )
}

export function QuickAccess() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Quick Access</CardTitle>
        <Button variant="link" size="sm" className="text-muted-foreground">
          See more <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {quickAccessItems.map((item) => (
            <QuickAccessCard
              key={item.name}
              name={item.name}
              icon={item.icon}
              color={item.color}
              iconColor={item.iconColor}
              href={item.href}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

