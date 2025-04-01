"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ProviderFundCard } from "@/components/provider-fund-card"

export function FundsByProvider() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Funds by Fobework</CardTitle>
        <Button variant="link" size="sm" className="text-muted-foreground">
          See more <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ProviderFundCard name="Fobework Total Market Index Fund" returnPercent={16.42} term="3Y" />
          <ProviderFundCard name="Fobework Value Fund" returnPercent={17.41} term="3Y" />
          <ProviderFundCard name="Fobework EV & New Age Auto Fund" returnPercent={14.38} term="3Y" />
        </div>
      </CardContent>
    </Card>
  )
}

