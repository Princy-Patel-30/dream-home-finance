import { PageHeader } from "@/components/shared/PageHeader";
import { motion } from "framer-motion";
import { Settings, Shield, Database, Globe, Users, Bell, Palette, Key } from "lucide-react";

const settingsSections = [
  { title: "Organization", desc: "Company name, branding, contact info", icon: Globe },
  { title: "Security", desc: "2FA, session management, IP whitelist", icon: Shield },
  { title: "Database", desc: "Backup schedule, data retention policies", icon: Database },
  { title: "Team Management", desc: "Roles, permissions, department config", icon: Users },
  { title: "Notifications", desc: "Email templates, SMS config, alerts", icon: Bell },
  { title: "Branding", desc: "Logo, colors, borrower portal theme", icon: Palette },
  { title: "API Keys", desc: "Manage API keys & webhook endpoints", icon: Key },
  { title: "Compliance Config", desc: "Regulation rules, state requirements", icon: Shield },
];

export default function Admin() {
  return (
    <div className="space-y-6">
      <PageHeader title="Admin Settings" description="System configuration, security & platform management" icon={Settings} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {settingsSections.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="bg-card rounded-xl border border-border p-5 shadow-card hover:border-primary/20 hover:glow-primary transition-all cursor-pointer group"
          >
            <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* System Health */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="bg-card rounded-xl border border-border p-5 shadow-card">
        <h3 className="text-sm font-semibold text-foreground mb-4">System Health</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "API Uptime", value: "99.97%", status: "success" },
            { label: "Avg Response", value: "142ms", status: "success" },
            { label: "Storage Used", value: "67%", status: "warning" },
            { label: "Active Sessions", value: "24", status: "success" },
          ].map(m => (
            <div key={m.label} className="text-center">
              <p className={`text-xl font-bold ${m.status === "success" ? "text-success" : "text-warning"}`}>{m.value}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
