import { Card } from "@/components/ui/card"

export default function MarketsPage() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <Card className="flex h-[400px] items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Market Analysis Coming Soon</h2>
          <p className="mt-2 text-muted-foreground">
            Comprehensive market data and analysis tools are under development.
          </p>
        </div>
      </Card>
    </div>
  )
} 