import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface QuickAccessCardProps {
  name: string
  icon: LucideIcon
  href: string
}

export function QuickAccessCard({ name, icon: Icon, href }: QuickAccessCardProps) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden transition-all hover:bg-secondary">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <div className="mb-3 rounded-full bg-secondary p-3">
            <Icon className="h-6 w-6" />
          </div>
          <div className="text-center text-sm font-medium">{name}</div>
        </CardContent>
      </Card>
    </Link>
  )
}

