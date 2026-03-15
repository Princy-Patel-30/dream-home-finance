import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/shared/StatCard";
import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Clock, Target } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";

const conversionData = [
  { month: "Jul", leads: 120, apps: 85, funded: 42 },
  { month: "Aug", leads: 145, apps: 98, funded: 58 },
  { month: "Sep", leads: 130, apps: 92, funded: 51 },
  { month: "Oct", leads: 168, apps: 125, funded: 73 },
  { month: "Nov", leads: 155, apps: 110, funded: 62 },
  { month: "Dec", leads: 190, apps: 142, funded: 89 },
  { month: "Jan", leads: 210, apps: 158, funded: 95 },
  { month: "Feb", leads: 225, apps: 170, funded: 108 },
];

const channelData = [
  { name: "Website", value: 35, color: "hsl(199, 89%, 48%)" },
  { name: "Referral", value: 28, color: "hsl(160, 84%, 39%)" },
  { name: "Realtor", value: 22, color: "hsl(38, 92%, 50%)" },
  { name: "Social", value: 15, color: "hsl(280, 65%, 55%)" },
];

const officerPerformance = [
  { name: "John M.", loans: 28, volume: 9.8 },
  { name: "Jane S.", loans: 24, volume: 8.5 },
  { name: "Bob J.", loans: 19, volume: 6.2 },
  { name: "Sarah L.", loans: 15, volume: 5.1 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <PageHeader title="Analytics & Insights" description="Real-time performance metrics, conversion funnels & team analytics" icon={TrendingUp} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Conversion Rate" value="47.5%" change="+3.2% MoM" changeType="positive" icon={Target} delay={0} />
        <StatCard title="Cost Per Loan" value="$1,284" change="-$120 vs avg" changeType="positive" icon={DollarSign} delay={0.05} />
        <StatCard title="Avg Days to Close" value="28" change="-3 vs target" changeType="positive" icon={Clock} delay={0.1} />
        <StatCard title="NPS Score" value="72" change="+8 pts" changeType="positive" icon={Users} delay={0.15} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2 bg-card rounded-xl border border-border p-5 shadow-card">
          <h3 className="text-sm font-semibold text-foreground mb-4">Conversion Funnel Trends</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={conversionData}>
              <defs>
                <linearGradient id="leadsGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.2} /><stop offset="95%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} /></linearGradient>
                <linearGradient id="fundsGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0.2} /><stop offset="95%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0} /></linearGradient>
              </defs>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 11 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 11 }} />
              <Tooltip contentStyle={{ background: 'hsl(222, 40%, 9%)', border: '1px solid hsl(222, 20%, 16%)', borderRadius: '8px', color: 'hsl(210, 40%, 93%)' }} />
              <Area type="monotone" dataKey="leads" stroke="hsl(199, 89%, 48%)" fill="url(#leadsGrad)" strokeWidth={2} />
              <Area type="monotone" dataKey="funded" stroke="hsl(160, 84%, 39%)" fill="url(#fundsGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-card rounded-xl border border-border p-5 shadow-card">
          <h3 className="text-sm font-semibold text-foreground mb-4">Lead Channels</h3>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart><Pie data={channelData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" strokeWidth={0}>{channelData.map((e, i) => <Cell key={i} fill={e.color} />)}</Pie></PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {channelData.map(c => (
              <div key={c.name} className="flex items-center gap-1.5"><div className="h-2 w-2 rounded-full" style={{ background: c.color }} /><span className="text-[11px] text-muted-foreground">{c.name} ({c.value}%)</span></div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card rounded-xl border border-border p-5 shadow-card">
        <h3 className="text-sm font-semibold text-foreground mb-4">Loan Officer Leaderboard</h3>
        <div className="space-y-3">
          {officerPerformance.map((o, i) => (
            <div key={o.name} className="flex items-center gap-4">
              <span className="text-sm font-mono text-muted-foreground w-4">{i + 1}</span>
              <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-primary-foreground">{o.name.split(" ").map(n => n[0]).join("")}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{o.name}</span>
                  <span className="text-sm font-mono text-primary">{o.loans} loans · ${o.volume}M</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full mt-1">
                  <div className="h-full bg-gradient-primary rounded-full" style={{ width: `${(o.loans / 28) * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
