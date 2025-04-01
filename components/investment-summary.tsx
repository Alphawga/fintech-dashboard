"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function InvestmentSummary() {
  const [showCardNumber, setShowCardNumber] = useState(false)
  const [showBalance, setShowBalance] = useState(true)
  const cardNumber = "4532 7891 2345 4281"
  const balance = "244,281"
  const weeklyGrowth = "5,837.45"
  const dailyGrowth = "563"

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 h-[250px]">
      <CardContent className="p-5 pt-2">
        
        <div className="absolute left-5 top-5">
          <div className="h-7 w-7 rounded-md border-2 border-amber-400/60 bg-amber-400/20 p-1">
            <div className="grid h-full w-full grid-cols-3 gap-0.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="bg-amber-400/60" />
              ))}
            </div>
          </div>
        </div>
        
       
        <div className="absolute right-5 top-5 flex items-center gap-1.5">
          <CreditCard className="h-5 w-5 text-white/80" />
          <span className="text-base font-bold text-white">Fobework</span>
        </div>

        
        <div className="mt-14 flex items-center gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              {showCardNumber ? (
                cardNumber.split(" ").map((group, i) => (
                  <div key={i} className="text-sm font-mono text-white/90">
                    {group}
                  </div>
                ))
              ) : (
                <>
                  <div className="text-sm font-mono text-white/90">••••</div>
                  <div className="text-sm font-mono text-white/90">••••</div>
                  <div className="text-sm font-mono text-white/90">••••</div>
                  <div className="text-sm font-mono text-white/90">4281</div>
                </>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-5 w-5 rounded-full p-0 text-white/60 hover:bg-white/10 hover:text-white"
            onClick={() => setShowCardNumber(!showCardNumber)}
          >
            {showCardNumber ? (
              <EyeOff className="h-3.5 w-3.5" />
            ) : (
              <Eye className="h-3.5 w-3.5" />
            )}
          </Button>
        </div>

        
        <div className="mt-3 space-y-0.5">
          <div className="flex items-center justify-between">
            <div className="text-xs text-white/60">Current Balance</div>
            <Button
              variant="ghost"
              size="sm"
              className="h-5 w-5 rounded-full p-0 text-white/60 hover:bg-white/10 hover:text-white"
              onClick={() => setShowBalance(!showBalance)}
            >
              {showBalance ? (
                <EyeOff className="h-3.5 w-3.5" />
              ) : (
                <Eye className="h-3.5 w-3.5" />
              )}
            </Button>
          </div>
          <div className="text-xl font-bold text-white">
            {showBalance ? `$${balance}` : "••••••"}
          </div>
        </div>

       
        <div className="mt-2 flex items-center justify-between">
          <div>
            <div className="text-xs text-white/60">Weekly Growth</div>
            <div className="text-base font-semibold text-emerald-400">
              {showBalance ? `+$${weeklyGrowth}` : "••••••"}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-white/60">Today</div>
            <div className="text-sm font-semibold text-emerald-400">
              {showBalance ? `+$${dailyGrowth}` : "••••"}
            </div>
          </div>
        </div>

       
        <div className="mt-3">
          <div className="text-xs text-white/60">CARD HOLDER</div>
          <div className="text-sm font-semibold text-white">Bamidele Ajibola</div>
        </div>

       
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
        <div className="absolute -left-16 -top-16 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-28 w-28 rounded-full bg-purple-500/20 blur-3xl" />
      </CardContent>
    </Card>
  )
}

