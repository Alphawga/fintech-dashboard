"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { PopularFunds } from "@/components/popular-funds"
import { InvestmentSummary } from "@/components/investment-summary"
import { Collections } from "@/components/collections"
import { FundsByProvider } from "@/components/funds-by-provider"
import { QuickAccess } from "@/components/quick-access"
import { Watchlists } from "@/components/watchlists"
import { useMobile } from "@/hooks/use-mobile"

export function Dashboard() {
  const isMobile = useMobile()

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="mx-auto max-w-7xl space-y-3 p-3 md:space-y-6 md:p-6">
        
        <div className="grid gap-3 md:grid-cols-3 md:gap-6">
          
          <div className="order-1 md:order-2">
            <InvestmentSummary />
          </div>
          
         
          <div className="order-2 md:order-1 md:col-span-2">
            <PopularFunds />
          </div>
        </div>

       
        <div className="hidden md:block">
          <Collections />
        </div>

        
        <div className="overflow-hidden">
          <FundsByProvider />
        </div>

        <div className="hidden md:block">
          <QuickAccess />
        </div>

       
        <div className=" md:block">
          <Watchlists />
        </div>
      </div>
    </main>
  )
}

