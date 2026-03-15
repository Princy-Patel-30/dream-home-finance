import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/shared/StatCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { motion } from "framer-motion";
import { FileCheck, CheckCircle, XCircle, AlertTriangle, Clock } from "lucide-react";

const decisions = [
  { loan: "LN-4521", borrower: "Sarah Mitchell", dti: "32%", ltv: "80%", score: "742", risk: "Low", decision: "Approved", conditions: 2, reviewer: "Auto-Engine" },
  { loan: "LN-4520", borrower: "James Rodriguez", dti: "38%", ltv: "75%", score: "695", risk: "Medium", decision: "Approved", conditions: 4, reviewer: "Jane Smith" },
  { loan: "LN-4519", borrower: "Emily Chen", dti: "28%", ltv: "85%", score: "780", risk: "Low", decision: "In-Review", conditions: 0, reviewer: "Auto-Engine" },
  { loan: "LN-4518", borrower: "Michael Brown", dti: "45%", ltv: "95%", score: "620", risk: "High", decision: "Pending", conditions: 0, reviewer: "—" },
  { loan: "LN-4516", borrower: "Anna Torres", dti: "42%", ltv: "90%", score: "635", risk: "High", decision: "Denied", conditions: 0, reviewer: "Bob Jones" },
];

const riskColors: Record<string, string> = { Low: "text-success", Medium: "text-warning", High: "text-destructive" };

export default function Underwriting() {
  return (
    <div className="space-y-6">
      <PageHeader title="Underwriting Engine" description="AI-powered automated underwriting decisions & risk analysis" icon={FileCheck} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Auto-Approved" value="68%" change="+5% vs manual" changeType="positive" icon={CheckCircle} delay={0} />
        <StatCard title="Avg Decision Time" value="4.2 hrs" change="-2 hrs AI boost" changeType="positive" icon={Clock} delay={0.05} />
        <StatCard title="Denial Rate" value="8%" change="Within target" changeType="neutral" icon={XCircle} delay={0.1} />
        <StatCard title="Conditions Avg" value="3.1" icon={AlertTriangle} delay={0.15} />
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h3 className="text-sm font-semibold text-foreground">Underwriting Queue</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                {["Loan", "Borrower", "DTI", "LTV", "Credit", "Risk", "Decision", "Conditions", "Reviewer"].map(h => (
                  <th key={h} className="text-left px-4 py-2.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {decisions.map((d) => (
                <tr key={d.loan} className="border-b border-border/30 last:border-0 hover:bg-secondary/20 transition-colors cursor-pointer">
                  <td className="px-4 py-3 font-mono text-primary text-sm">{d.loan}</td>
                  <td className="px-4 py-3 text-sm">{d.borrower}</td>
                  <td className="px-4 py-3 text-sm font-mono">{d.dti}</td>
                  <td className="px-4 py-3 text-sm font-mono">{d.ltv}</td>
                  <td className="px-4 py-3 text-sm font-mono">{d.score}</td>
                  <td className="px-4 py-3"><span className={`text-sm font-semibold ${riskColors[d.risk]}`}>{d.risk}</span></td>
                  <td className="px-4 py-3"><StatusBadge status={d.decision} /></td>
                  <td className="px-4 py-3 text-sm text-center">{d.conditions}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{d.reviewer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
