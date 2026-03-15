import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/shared/StatCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { motion } from "framer-motion";
import { Scale, Shield, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const checks = [
  { regulation: "TRID — Loan Estimate Timing", loan: "LN-4521", status: "Passed", date: "Mar 14", risk: "Low" },
  { regulation: "HMDA Data Reporting", loan: "LN-4520", status: "Passed", date: "Mar 14", risk: "Low" },
  { regulation: "Fair Lending — ECOA", loan: "LN-4519", status: "In-Review", date: "Mar 13", risk: "Medium" },
  { regulation: "RESPA Section 8", loan: "LN-4518", status: "Passed", date: "Mar 12", risk: "Low" },
  { regulation: "State Licensing — WA", loan: "LN-4518", status: "Failed", date: "Mar 12", risk: "High" },
  { regulation: "QM/ATR Rule Check", loan: "LN-4516", status: "Passed", date: "Mar 11", risk: "Low" },
  { regulation: "Flood Zone Determination", loan: "LN-4521", status: "Passed", date: "Mar 14", risk: "Low" },
];

export default function Compliance() {
  return (
    <div className="space-y-6">
      <PageHeader title="Compliance Management" description="Automated regulatory compliance checks & audit trails" icon={Scale} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Checks Run" value="2,847" icon={Shield} delay={0} />
        <StatCard title="Pass Rate" value="96.2%" change="+0.5% vs target" changeType="positive" icon={CheckCircle} delay={0.05} />
        <StatCard title="Flags" value="12" change="3 critical" changeType="negative" icon={AlertTriangle} delay={0.1} />
        <StatCard title="Audit Score" value="A+" icon={Scale} delay={0.15} />
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h3 className="text-sm font-semibold text-foreground">Compliance Check Log</h3>
        </div>
        <div className="divide-y divide-border/50">
          {checks.map((c, i) => (
            <div key={i} className="px-5 py-3 flex items-center justify-between hover:bg-secondary/20 transition-colors">
              <div className="flex items-center gap-3">
                {c.status === "Passed" ? <CheckCircle className="h-4 w-4 text-success" /> :
                 c.status === "Failed" ? <XCircle className="h-4 w-4 text-destructive" /> :
                 <AlertTriangle className="h-4 w-4 text-warning" />}
                <div>
                  <p className="text-sm text-foreground">{c.regulation}</p>
                  <p className="text-[11px] text-muted-foreground">Loan: {c.loan} · {c.date}</p>
                </div>
              </div>
              <StatusBadge status={c.status} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
