import { PageHeader } from "@/components/shared/PageHeader";
import { motion } from "framer-motion";
import { Bell, Check, AlertTriangle, FileText, MessageSquare, CreditCard, DollarSign } from "lucide-react";

const notifications = [
  { type: "urgent", icon: AlertTriangle, title: "Compliance flag on LN-4518", desc: "State licensing check failed for Washington. Requires manual review.", time: "5m ago", read: false },
  { type: "document", icon: FileText, title: "W-2 uploaded by Sarah Mitchell", desc: "Auto-verification in progress. OCR confidence: 98%", time: "12m ago", read: false },
  { type: "message", icon: MessageSquare, title: "New message from James Rodriguez", desc: "Asking about appraisal timeline for LN-4520.", time: "25m ago", read: false },
  { type: "credit", icon: CreditCard, title: "Credit report expiring", desc: "Michael Brown's tri-merge expires in 3 days. Consider re-pull.", time: "1h ago", read: true },
  { type: "income", icon: DollarSign, title: "Income verified for Emily Chen", desc: "PayScale Direct verification complete. Annual: $95,000", time: "2h ago", read: true },
  { type: "approval", icon: Check, title: "LN-4520 approved by underwriting", desc: "James Rodriguez — Jumbo $680,000. 4 conditions prior to closing.", time: "3h ago", read: true },
  { type: "document", icon: FileText, title: "Appraisal received for LN-4521", desc: "Property value: $530,000. LTV: 80.2%. Within guidelines.", time: "4h ago", read: true },
];

const typeColors: Record<string, string> = {
  urgent: "text-destructive bg-destructive/10",
  document: "text-primary bg-primary/10",
  message: "text-info bg-info/10",
  credit: "text-warning bg-warning/10",
  income: "text-success bg-success/10",
  approval: "text-success bg-success/10",
};

export default function Notifications() {
  return (
    <div className="space-y-6">
      <PageHeader title="Notifications" description="Real-time alerts, system events & action items" icon={Bell}
        actions={<button className="text-xs text-primary hover:underline">Mark all as read</button>}
      />
      <div className="space-y-2">
        {notifications.map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`bg-card rounded-xl border p-4 shadow-card hover:border-primary/20 transition-all cursor-pointer ${
              n.read ? "border-border opacity-70" : "border-primary/30 glow-primary"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 ${typeColors[n.type]}`}>
                <n.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">{n.title}</p>
                  <span className="text-[10px] text-muted-foreground shrink-0 ml-2">{n.time}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{n.desc}</p>
              </div>
              {!n.read && <div className="h-2 w-2 rounded-full bg-primary shrink-0 mt-1.5" />}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
