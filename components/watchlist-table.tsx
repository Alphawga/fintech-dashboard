"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const watchlistData = [
  {
    name: "Canada Old Pension Fund",
    returns: "+30.45%",
  },
  {
    name: "Vanguard 500 Index Fund",
    returns: "+26.62%",
  },
  {
    name: "Fidelity Contrafund",
    returns: "+24.23%",
  },
  {
    name: "Growth Fund of America",
    returns: "+21.73%",
  },
  {
    name: "Dodge & Cox Stock Fund",
    returns: "+17.87%",
  },
  {
    name: "Schwab Market Index Fund",
    returns: "+15.38%",
  },
  {
    name: "Fidelity Total Bond Fund",
    returns: "+15.38%",
  },
  {
    name: "BlackRock Global Allocation Fund",
    returns: "+15.38%",
  },
]

export function WatchlistTable() {
  return (
    <div className="overflow-hidden rounded-md border border-border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80%]">Fund Name</TableHead>
            <TableHead className="text-right">5Y RETURNS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {watchlistData.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="text-right text-success-foreground">{item.returns}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

