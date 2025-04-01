import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface CollectionCardProps {
  name: string
  icon: string
  href: string
}

export function CollectionCard({ name, icon, href }: CollectionCardProps) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden transition-all hover:bg-secondary">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <div className="mb-3 h-16 w-16">
            <Image src={icon || "/placeholder.svg"} alt={name} width={64} height={64} className="h-full w-full" />
          </div>
          <div className="text-center text-sm font-medium">{name}</div>
        </CardContent>
      </Card>
    </Link>
  )
}

