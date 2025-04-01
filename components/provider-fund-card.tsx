"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useEffect, useState } from "react"

interface ProviderFundCardProps {
  name: string
  returnPercent: number
  term: string
}

export function ProviderFundCard({ name, returnPercent, term }: ProviderFundCardProps) {
  const [points, setPoints] = useState("")

  // Generate points on the client side only
  useEffect(() => {
    const generatePoints = () => {
      const points = []
      const numPoints = 8 // Fewer points for a cleaner look
      let prevY = 15 // Start at middle

      for (let i = 0; i < numPoints; i++) {
        const x = (100 / (numPoints - 1)) * i
        // Generate next point with smaller random variation
        const variation = Math.random() * 6 - 3 // Random number between -3 and 3 for smoother line
        const y = Math.max(8, Math.min(22, prevY + variation)) // Keep within bounds 8-22
        points.push(`${x},${y}`)
        prevY = y
      }

      // Ensure the last point reflects the return percentage
      const lastY = returnPercent > 15 ? 10 : returnPercent > 10 ? 15 : 20
      points[points.length - 1] = `100,${lastY}`

      return points.join(" ")
    }

    setPoints(generatePoints())
  }, [returnPercent])

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-2 space-y-0 p-4">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <span className="text-lg font-bold text-white">C</span>
        </div>
        <div className="font-medium">{name}</div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="p-4">
          <div className="text-sm text-muted-foreground">Total Returns</div>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">{returnPercent}%</div>
            <div className="text-sm text-muted-foreground">({term})</div>
          </div>
        </div>
        <div className="h-16 w-full">
          <svg className="h-full w-full" viewBox="0 0 100 30" preserveAspectRatio="none">
            {points && (
              <>
                {/* Area under the line with gradient */}
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(120, 65%, 60%)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="hsl(120, 65%, 60%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline
                  points={points}
                  fill="none"
                  stroke="hsl(120, 65%, 60%)"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Area fill */}
                <polyline
                  points={`${points} 100,30 0,30`}
                  fill="url(#areaGradient)"
                  strokeWidth="0"
                />
              </>
            )}
          </svg>
        </div>
      </CardContent>
    </Card>
  )
}

