"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { WatchlistTable } from "@/components/watchlist-table"

export function Watchlists() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">All Watchlists</CardTitle>
        <Button variant="link" size="sm" className="text-muted-foreground">
          View all <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <WatchlistTable />
      </CardContent>
    </Card>
  )
}

