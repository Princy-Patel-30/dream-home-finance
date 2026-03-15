import { PageHeader } from "@/components/shared/PageHeader";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { motion } from "framer-motion";
import { Workflow, ArrowRight, CheckCircle, Clock, AlertCircle } from "lucide-react";

const workflows = [
  {
    name: "Standard Conventional Workflow",
    stages: ["Application", "Document Collection", "Credit Pull", "Income Verify", "Underwriting", "Approval", "Closing"],
    current: 4,
    activeLoans: 45,
    avgDays: 28,
  },
  {
    name: "FHA Streamline Refinance",
    stages: ["Application", "Eligibility Check", "Underwriting", "Approval", "Closing"],
    current: 2,
    activeLoans: 12,
    avgDays: 21,
  },
  {
    name: "VA Purchase Workflow",
    stages: ["Application", "COE Verification", "Credit & Income", "VA Appraisal", "Underwriting", "Closing"],
    current: 3,
    activeLoans: 8,
    avgDays: 32,
  },
];

const taskQueue = [
  { task: "Auto-assign processor to APP-7891", trigger: "Application Submitted", status: "Completed", time: "2m ago" },
  { task: "Send document checklist to borrower", trigger: "Application Approved", status: "Completed", time: "15m ago" },
  { task: "Order tri-merge credit report", trigger: "Documents Complete", status: "In-Progress", time: "Now" },
  { task: "Schedule appraisal with AMC", trigger: "Underwriting Conditional", status: "Pending", time: "Queued" },
  { task: "Generate closing disclosure", trigger: "Clear to Close", status: "Pending", time: "Queued" },
];

export default function Workflows() {
  return (
    <div className="space-y-6">
      <PageHeader title="Workflow Automation" description="Automated task assignment, triggers & pipeline stages" icon={Workflow} />

      {/* Workflow Pipelines */}
      {workflows.map((wf, wi) => (
        <motion.div
          key={wf.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: wi * 0.1 }}
          className="bg-card rounded-xl border border-border p-5 shadow-card"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">{wf.name}</h3>
              <p className="text-xs text-muted-foreground">{wf.activeLoans} active loans · {wf.avgDays} avg days</p>
            </div>
          </div>
          <div className="flex items-center gap-1 overflow-x-auto pb-2">
            {wf.stages.map((stage, i) => (
              <div key={stage} className="flex items-center shrink-0">
                <div className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  i < wf.current ? "bg-success/15 border-success/30 text-success" :
                  i === wf.current ? "bg-primary/15 border-primary/30 text-primary glow-primary" :
                  "bg-secondary border-border text-muted-foreground"
                }`}>
                  {i < wf.current && <CheckCircle className="h-3 w-3 inline mr-1" />}
                  {i === wf.current && <Clock className="h-3 w-3 inline mr-1 animate-pulse" />}
                  {stage}
                </div>
                {i < wf.stages.length - 1 && <ArrowRight className="h-3 w-3 text-border mx-1 shrink-0" />}
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Task Queue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h3 className="text-sm font-semibold text-foreground">Automation Task Queue</h3>
        </div>
        <div className="divide-y divide-border/50">
          {taskQueue.map((t, i) => (
            <div key={i} className="px-5 py-3 flex items-center justify-between hover:bg-secondary/20 transition-colors">
              <div className="flex items-center gap-3">
                {t.status === "Completed" ? <CheckCircle className="h-4 w-4 text-success" /> :
                 t.status === "In-Progress" ? <Clock className="h-4 w-4 text-primary animate-pulse" /> :
                 <AlertCircle className="h-4 w-4 text-muted-foreground" />}
                <div>
                  <p className="text-sm text-foreground">{t.task}</p>
                  <p className="text-[11px] text-muted-foreground">Trigger: {t.trigger}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status={t.status} />
                <span className="text-[11px] text-muted-foreground">{t.time}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
