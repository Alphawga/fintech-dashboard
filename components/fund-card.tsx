"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface FundCardProps {
  name: string
  icon: string
  iconBg: string
  returnPercent: number
  chartColor: string
  investors: string
  risk: string
  term: string
}

export function FundCard({ name, icon, iconBg, returnPercent, chartColor, investors, risk, term }: FundCardProps) {
  const [points, setPoints] = useState("")

  // Generate points on the client side only
  useEffect(() => {
    const generatePoints = () => {
      const points = []
      const numPoints = 10
      let prevY = 15 // Start at middle

      for (let i = 0; i < numPoints; i++) {
        const x = (100 / (numPoints - 1)) * i
        // Generate next point with smaller random variation
        const variation = Math.random() * 8 - 4 // Random number between -4 and 4
        const y = Math.max(5, Math.min(25, prevY + variation)) // Keep within bounds 5-25
        points.push(`${x},${y}`)
        prevY = y
      }

      // Ensure the last point reflects the return percentage
      const lastY = returnPercent > 30 ? 8 : returnPercent > 20 ? 12 : 15
      points[points.length - 1] = `100,${lastY}`

      return points.join(" ")
    }

    setPoints(generatePoints())
  }, [returnPercent]) // Only regenerate when returnPercent changes

  const getChartColor = () => {
    switch (chartColor) {
      case "chart-red":
        return "hsl(0, 65%, 60%)"
      case "chart-green":
        return "hsl(120, 65%, 60%)"
      case "chart-blue":
        return "hsl(217.2, 91.2%, 59.8%)"
      case "chart-purple":
        return "hsl(270, 65%, 60%)"
      case "chart-indigo":
        return "hsl(243, 75%, 59%)"
      case "chart-yellow":
        return "hsl(45, 93%, 47%)"
      default:
        return "hsl(217.2, 91.2%, 59.8%)"
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-2 space-y-0 p-4">
        <div className={cn("flex h-8 w-8 items-center justify-center rounded", iconBg)}>
          <span className="text-lg">{icon}</span>
        </div>
        <div className="font-medium">{name}</div>
        <div className="ml-auto font-semibold">{returnPercent}%</div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-20 w-full">
          <svg className="h-full w-full" viewBox="0 0 100 30" preserveAspectRatio="none">
            {points && (
              <polyline
                points={points}
                fill="none"
                stroke={getChartColor()}
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            )}
          </svg>
        </div>
        <div className="grid grid-cols-3 border-t border-border p-4 text-center text-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Investors</span>
            <span>{investors}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">Risk</span>
            <span>{risk}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">Term</span>
            <span>{term}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

