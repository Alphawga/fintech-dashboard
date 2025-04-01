"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, LineChart, PiggyBank, Building2, Building, Store } from "lucide-react"

const collections = [
  {
    name: "High Return",
    icon: TrendingUp,
    href: "#",
    color: "from-red-500/20 to-orange-500/20 border-red-500/50",
    iconColor: "text-red-500"
  },
  {
    name: "High Growth",
    icon: LineChart,
    href: "#",
    color: "from-green-500/20 to-emerald-500/20 border-green-500/50",
    iconColor: "text-green-500"
  },
  {
    name: "Tax Saving",
    icon: PiggyBank,
    href: "#",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/50",
    iconColor: "text-blue-500"
  },
  {
    name: "Large Cap",
    icon: Building2,
    href: "#",
    color: "from-purple-500/20 to-violet-500/20 border-purple-500/50",
    iconColor: "text-purple-500"
  },
  {
    name: "Mid Cap",
    icon: Building,
    href: "#",
    color: "from-yellow-500/20 to-amber-500/20 border-yellow-500/50",
    iconColor: "text-yellow-500"
  },
  {
    name: "Small Cap",
    icon: Store,
    href: "#",
    color: "from-pink-500/20 to-rose-500/20 border-pink-500/50",
    iconColor: "text-pink-500"
  },
]

function CollectionCard({ name, icon: Icon, color, iconColor, href }: {
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

export function Collections() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Collections</CardTitle>
        <Button variant="link" size="sm" className="text-muted-foreground">
          See more <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.name}
              name={collection.name}
              icon={collection.icon}
              color={collection.color}
              iconColor={collection.iconColor}
              href={collection.href}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

