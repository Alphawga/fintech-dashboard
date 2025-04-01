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
    <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <CardContent className="p-6">
        
        <div className="absolute left-6 top-6">
          <div className="h-8 w-8 rounded-md border-2 border-amber-400/60 bg-amber-400/20 p-1">
            <div className="grid h-full w-full grid-cols-3 gap-0.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="bg-amber-400/60" />
              ))}
            </div>
          </div>
        </div>
        
       
        <div className="absolute right-6 top-6 flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-white/80" />
          <span className="text-lg font-bold text-white">Fobework</span>
        </div>

        
        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-4">
              {showCardNumber ? (
                cardNumber.split(" ").map((group, i) => (
                  <div key={i} className="text-base font-mono text-white/90">
                    {group}
                  </div>
                ))
              ) : (
                <>
                  <div className="text-base font-mono text-white/90">••••</div>
                  <div className="text-base font-mono text-white/90">••••</div>
                  <div className="text-base font-mono text-white/90">••••</div>
                  <div className="text-base font-mono text-white/90">4281</div>
                </>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 rounded-full p-0 text-white/60 hover:bg-white/10 hover:text-white"
            onClick={() => setShowCardNumber(!showCardNumber)}
          >
            {showCardNumber ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
        </div>

        
        <div className="mt-4 space-y-1">
          <div className="flex items-center justify-between">
            <div className="text-sm text-white/60">Current Balance</div>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 rounded-full p-0 text-white/60 hover:bg-white/10 hover:text-white"
              onClick={() => setShowBalance(!showBalance)}
            >
              {showBalance ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="text-2xl font-bold text-white">
            {showBalance ? `$${balance}` : "••••••"}
          </div>
        </div>

       
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-sm text-white/60">Weekly Growth</div>
            <div className="text-lg font-semibold text-emerald-400">
              {showBalance ? `+$${weeklyGrowth}` : "••••••"}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-white/60">Today</div>
            <div className="text-base font-semibold text-emerald-400">
              {showBalance ? `+$${dailyGrowth}` : "••••"}
            </div>
          </div>
        </div>

       
        <div className="mt-4">
          <div className="text-sm text-white/60">CARD HOLDER</div>
          <div className="text-base font-semibold text-white">Bamidele Ajibola</div>
        </div>

       
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
        <div className="absolute -left-20 -top-20 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />
      </CardContent>
    </Card>
  )
}

