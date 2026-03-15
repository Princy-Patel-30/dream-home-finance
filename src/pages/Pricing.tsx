import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/shared/StatCard";
import { motion } from "framer-motion";
import { BarChart3, TrendingDown, TrendingUp, DollarSign } from "lucide-react";

const rateSheets = [
  { product: "30-Year Fixed Conv.", rate: "6.250%", apr: "6.412%", points: "0.5", lockDays: "45", margin: "+2.15%", trend: "down" },
  { product: "15-Year Fixed Conv.", rate: "5.625%", apr: "5.802%", points: "0.25", lockDays: "45", margin: "+1.95%", trend: "down" },
  { product: "30-Year Fixed FHA", rate: "6.000%", apr: "6.985%", points: "0", lockDays: "60", margin: "+1.85%", trend: "up" },
  { product: "30-Year Fixed VA", rate: "5.875%", apr: "6.102%", points: "0", lockDays: "60", margin: "+1.75%", trend: "stable" },
  { product: "7/1 ARM Conv.", rate: "5.500%", apr: "6.215%", points: "0", lockDays: "30", margin: "+2.25%", trend: "down" },
  { product: "30-Year Fixed Jumbo", rate: "6.500%", apr: "6.615%", points: "0.75", lockDays: "45", margin: "+2.45%", trend: "up" },
];

export default function Pricing() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pricing Engine" description="Real-time rate sheets, margin management & lock desk" icon={BarChart3} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Base Rate (30yr)" value="6.250%" change="↓ 12.5bp today" changeType="positive" icon={TrendingDown} delay={0} />
        <StatCard title="Avg Margin" value="+2.07%" icon={DollarSign} delay={0.05} />
        <StatCard title="Locks Today" value="18" change="$7.2M volume" changeType="positive" icon={BarChart3} delay={0.1} />
        <StatCard title="Lock Expiring" value="5" change="Next 48 hrs" changeType="neutral" icon={BarChart3} delay={0.15} />
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Rate Sheet — March 15, 2026</h3>
          <span className="text-[10px] text-muted-foreground font-mono">Last updated: 09:15 AM EST</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                {["Product", "Rate", "APR", "Points", "Lock Period", "Margin", "Trend"].map(h => (
                  <th key={h} className="text-left px-5 py-2.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rateSheets.map((r) => (
                <tr key={r.product} className="border-b border-border/30 last:border-0 hover:bg-secondary/20 transition-colors">
                  <td className="px-5 py-3 text-sm font-medium text-foreground">{r.product}</td>
                  <td className="px-5 py-3 text-sm font-mono font-bold text-primary">{r.rate}</td>
                  <td className="px-5 py-3 text-sm font-mono text-muted-foreground">{r.apr}</td>
                  <td className="px-5 py-3 text-sm">{r.points}</td>
                  <td className="px-5 py-3 text-sm">{r.lockDays} days</td>
                  <td className="px-5 py-3 text-sm font-mono text-success">{r.margin}</td>
                  <td className="px-5 py-3">
                    {r.trend === "down" ? <TrendingDown className="h-4 w-4 text-success" /> :
                     r.trend === "up" ? <TrendingUp className="h-4 w-4 text-destructive" /> :
                     <span className="text-muted-foreground text-xs">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
