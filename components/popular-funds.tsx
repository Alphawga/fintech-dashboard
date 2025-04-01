"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { FundCard } from "@/components/fund-card"
import { useMobile } from "@/hooks/use-mobile"

const allFunds = [
  {
    name: "Blackrock Fund",
    icon: "🔺",
    iconBg: "bg-red-900/20",
    returnPercent: 36.4,
    chartColor: "chart-red",
    investors: "33.5k",
    risk: "High Risk",
    term: "5Y",
  },
  {
    name: "Schwab Index",
    icon: "🔷",
    iconBg: "bg-blue-900/20",
    returnPercent: 36.4,
    chartColor: "chart-blue",
    investors: "13.7k",
    risk: "High Risk",
    term: "5Y",
  },
  {
    name: "Fidelity Total",
    icon: "🟢",
    iconBg: "bg-green-900/20",
    returnPercent: 36.4,
    chartColor: "chart-green",
    investors: "48.4k",
    risk: "High Risk",
    term: "3Y",
  },
]

const yourInvestments = [
  {
    name: "Vanguard 500 Index Fund",
    icon: "📈",
    iconBg: "bg-purple-900/20",
    returnPercent: 26.62,
    chartColor: "chart-purple",
    investors: "152.3k",
    risk: "Moderate Risk",
    term: "10Y",
  },
  {
    name: "Fidelity Contrafund",
    icon: "💎",
    iconBg: "bg-indigo-900/20",
    returnPercent: 24.23,
    chartColor: "chart-indigo",
    investors: "89.1k",
    risk: "Moderate Risk",
    term: "7Y",
  },
  {
    name: "Growth Fund of America",
    icon: "🌟",
    iconBg: "bg-yellow-900/20",
    returnPercent: 21.73,
    chartColor: "chart-yellow",
    investors: "126.8k",
    risk: "Moderate Risk",
    term: "8Y",
  },
]

export function PopularFunds() {
  const isMobile = useMobile()

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-col space-y-3 pb-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-xl">Popular Funds</CardTitle>
          <Tabs defaultValue="all" className="w-full sm:w-[300px] lg:w-[360px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="all" className="text-sm">All mutual funds</TabsTrigger>
              <TabsTrigger value="your" className="text-sm">Your Investments</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="all" className="w-full">
          <TabsContent value="all" className="mt-0">
            <div className="space-y-3 p-3 sm:p-4">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {allFunds.map((fund) => (
                  <FundCard
                    key={fund.name}
                    name={fund.name}
                    icon={fund.icon}
                    iconBg={fund.iconBg}
                    returnPercent={fund.returnPercent}
                    chartColor={fund.chartColor}
                    investors={fund.investors}
                    risk={fund.risk}
                    term={fund.term}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="your" className="mt-0">
            <div className="space-y-3 p-3 sm:p-4">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {yourInvestments.map((fund) => (
                  <FundCard
                    key={fund.name}
                    name={fund.name}
                    icon={fund.icon}
                    iconBg={fund.iconBg}
                    returnPercent={fund.returnPercent}
                    chartColor={fund.chartColor}
                    investors={fund.investors}
                    risk={fund.risk}
                    term={fund.term}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

