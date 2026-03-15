import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/shared/StatCard";
import { motion } from "framer-motion";
import { CheckCircle, FileText, Download } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const reportData = [
  { name: "Jan", originated: 42, funded: 38 },
  { name: "Feb", originated: 58, funded: 52 },
  { name: "Mar", originated: 73, funded: 65 },
];

const reports = [
  { name: "Monthly Origination Report", type: "Production", generated: "Mar 15, 2026", format: "PDF" },
  { name: "HMDA LAR Export", type: "Compliance", generated: "Mar 14, 2026", format: "CSV" },
  { name: "Loan Officer Performance", type: "HR/Ops", generated: "Mar 14, 2026", format: "PDF" },
  { name: "Pipeline Aging Report", type: "Operations", generated: "Mar 13, 2026", format: "Excel" },
  { name: "QC Audit Summary Q1", type: "Quality", generated: "Mar 12, 2026", format: "PDF" },
];

export default function Reporting() {
  return (
    <div className="space-y-6">
      <PageHeader title="Reporting" description="Production reports, compliance exports & team analytics" icon={CheckCircle} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Reports Generated" value="142" change="This month" changeType="neutral" icon={FileText} delay={0} />
        <StatCard title="Scheduled" value="8" change="Auto-generated" changeType="positive" icon={CheckCircle} delay={0.05} />
        <StatCard title="Compliance Reports" value="24" icon={CheckCircle} delay={0.1} />
        <StatCard title="Custom Reports" value="15" icon={FileText} delay={0.15} />
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-xl border border-border p-5 shadow-card">
        <h3 className="text-sm font-semibold text-foreground mb-4">Origination vs Funded — Q1 2026</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={reportData}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 11 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: 'hsl(222, 40%, 9%)', border: '1px solid hsl(222, 20%, 16%)', borderRadius: '8px', color: 'hsl(210, 40%, 93%)' }} />
            <Bar dataKey="originated" fill="hsl(199, 89%, 48%)" radius={[4, 4, 0, 0]} barSize={24} />
            <Bar dataKey="funded" fill="hsl(160, 84%, 39%)" radius={[4, 4, 0, 0]} barSize={24} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
        <div className="px-5 py-4 border-b border-border"><h3 className="text-sm font-semibold text-foreground">Available Reports</h3></div>
        <div className="divide-y divide-border/50">
          {reports.map((r, i) => (
            <div key={i} className="px-5 py-3 flex items-center justify-between hover:bg-secondary/20 transition-colors">
              <div>
                <p className="text-sm text-foreground font-medium">{r.name}</p>
                <p className="text-[11px] text-muted-foreground">{r.type} · {r.generated}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">{r.format}</span>
                <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors"><Download className="h-4 w-4 text-primary" /></button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
