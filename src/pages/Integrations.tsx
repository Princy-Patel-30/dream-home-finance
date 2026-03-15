import { PageHeader } from "@/components/shared/PageHeader";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { motion } from "framer-motion";
import { Plug, CheckCircle, AlertCircle, Settings } from "lucide-react";

const integrations = [
  { name: "Fannie Mae DU", category: "AUS", status: "Active", lastSync: "Real-time", desc: "Desktop Underwriter automated underwriting" },
  { name: "Freddie Mac LP", category: "AUS", status: "Active", lastSync: "Real-time", desc: "Loan Product Advisor integration" },
  { name: "Equifax", category: "Credit", status: "Active", lastSync: "On-demand", desc: "Tri-merge credit report pulling" },
  { name: "Plaid", category: "Banking", status: "Active", lastSync: "Real-time", desc: "Bank account & asset verification" },
  { name: "DocuSign", category: "E-Sign", status: "Active", lastSync: "On-demand", desc: "Electronic signature workflows" },
  { name: "Zillow", category: "Property", status: "Active", lastSync: "Daily", desc: "Property valuation data" },
  { name: "CoreLogic", category: "Title", status: "Pending", lastSync: "—", desc: "Title & flood determination" },
  { name: "Stripe", category: "Payments", status: "Active", lastSync: "Real-time", desc: "Fee collection & payment processing" },
  { name: "SendGrid", category: "Email", status: "Active", lastSync: "Real-time", desc: "Transactional & marketing emails" },
  { name: "Twilio", category: "SMS", status: "Active", lastSync: "Real-time", desc: "SMS notifications & 2FA" },
];

export default function Integrations() {
  return (
    <div className="space-y-6">
      <PageHeader title="Integration Hub" description="Pre-built connectors to LOS, CRM, credit bureaus & services" icon={Plug} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {integrations.map((int, i) => (
          <motion.div
            key={int.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className="bg-card rounded-xl border border-border p-4 shadow-card hover:border-primary/20 transition-all group"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-sm font-semibold text-foreground">{int.name}</h3>
                <span className="text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded mt-1 inline-block">{int.category}</span>
              </div>
              <StatusBadge status={int.status} />
            </div>
            <p className="text-xs text-muted-foreground mb-3">{int.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">Sync: {int.lastSync}</span>
              <button className="p-1 rounded hover:bg-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                <Settings className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
