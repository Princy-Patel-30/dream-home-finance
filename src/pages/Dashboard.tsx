import { motion } from "framer-motion";
import { StatCard } from "@/components/shared/StatCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import {
  LayoutDashboard, FileText, DollarSign, Users, TrendingUp,
  Clock, CheckCircle, AlertTriangle, ArrowUpRight, ArrowDownRight
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from "recharts";

const pipelineData = [
  { stage: "Application", count: 45, fill: "hsl(199, 89%, 48%)" },
  { stage: "Processing", count: 32, fill: "hsl(180, 70%, 45%)" },
  { stage: "Underwriting", count: 28, fill: "hsl(160, 84%, 39%)" },
  { stage: "Approval", count: 18, fill: "hsl(38, 92%, 50%)" },
  { stage: "Closing", count: 12, fill: "hsl(280, 65%, 55%)" },
];

const volumeData = [
  { month: "Jul", volume: 42 }, { month: "Aug", volume: 58 },
  { month: "Sep", volume: 51 }, { month: "Oct", volume: 73 },
  { month: "Nov", volume: 62 }, { month: "Dec", volume: 89 },
  { month: "Jan", volume: 95 }, { month: "Feb", volume: 108 },
  { month: "Mar", volume: 135 },
];

const loanTypeData = [
  { name: "Conventional", value: 45, color: "hsl(199, 89%, 48%)" },
  { name: "FHA", value: 25, color: "hsl(160, 84%, 39%)" },
  { name: "VA", value: 18, color: "hsl(38, 92%, 50%)" },
  { name: "Jumbo", value: 12, color: "hsl(280, 65%, 55%)" },
];

const recentLoans = [
  { id: "LN-2026-4521", borrower: "Sarah Mitchell", amount: "$425,000", type: "Conventional", status: "In-Review", date: "Mar 14" },
  { id: "LN-2026-4520", borrower: "James Rodriguez", amount: "$680,000", type: "Jumbo", status: "Approved", date: "Mar 14" },
  { id: "LN-2026-4519", borrower: "Emily Chen", amount: "$310,000", type: "FHA", status: "Processing", date: "Mar 13" },
  { id: "LN-2026-4518", borrower: "Michael Brown", amount: "$275,000", type: "VA", status: "Pending", date: "Mar 13" },
  { id: "LN-2026-4517", borrower: "Lisa Park", amount: "$520,000", type: "Conventional", status: "Completed", date: "Mar 12" },
];

const tasks = [
  { task: "Review appraisal for LN-4521", priority: "High", due: "Today" },
  { task: "Collect W-2 from James Rodriguez", priority: "Medium", due: "Tomorrow" },
  { task: "Submit compliance docs for LN-4518", priority: "High", due: "Today" },
  { task: "Schedule closing for LN-4517", priority: "Low", due: "Mar 16" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-foreground">
          Good morning, <span className="text-gradient">John</span>
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          You have <span className="text-primary font-semibold">12 loans</span> requiring attention today
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Active Loans" value="135" change="+12% from last month" changeType="positive" icon={FileText} delay={0} />
        <StatCard title="Total Volume" value="$48.2M" change="+18% from last month" changeType="positive" icon={DollarSign} delay={0.05} />
        <StatCard title="Avg. Days to Close" value="28" change="-3 days vs target" changeType="positive" icon={Clock} delay={0.1} />
        <StatCard title="Pull-Through Rate" value="76%" change="+4% from last quarter" changeType="positive" icon={TrendingUp} delay={0.15} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Volume Trend */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-card rounded-xl border border-border p-5 shadow-card"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Loan Volume Trend</h3>
              <p className="text-xs text-muted-foreground">Monthly origination volume</p>
            </div>
            <div className="flex items-center gap-1 text-success text-xs font-medium">
              <ArrowUpRight className="h-3 w-3" /> 25% growth
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={volumeData}>
              <defs>
                <linearGradient id="volumeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 11 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 11 }} />
              <Tooltip
                contentStyle={{ background: 'hsl(222, 40%, 9%)', border: '1px solid hsl(222, 20%, 16%)', borderRadius: '8px', color: 'hsl(210, 40%, 93%)' }}
              />
              <Area type="monotone" dataKey="volume" stroke="hsl(199, 89%, 48%)" fill="url(#volumeGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Loan Type Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-card rounded-xl border border-border p-5 shadow-card"
        >
          <h3 className="text-sm font-semibold text-foreground mb-4">Loan Mix</h3>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={loanTypeData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" strokeWidth={0}>
                {loanTypeData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {loanTypeData.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full" style={{ background: item.color }} />
                <span className="text-[11px] text-muted-foreground">{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Pipeline + Tasks Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-card rounded-xl border border-border p-5 shadow-card"
        >
          <h3 className="text-sm font-semibold text-foreground mb-4">Loan Pipeline</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={pipelineData} layout="vertical">
              <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 11 }} />
              <YAxis type="category" dataKey="stage" axisLine={false} tickLine={false} tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 11 }} width={90} />
              <Tooltip contentStyle={{ background: 'hsl(222, 40%, 9%)', border: '1px solid hsl(222, 20%, 16%)', borderRadius: '8px', color: 'hsl(210, 40%, 93%)' }} />
              <Bar dataKey="count" radius={[0, 6, 6, 0]} barSize={20}>
                {pipelineData.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Tasks */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="bg-card rounded-xl border border-border p-5 shadow-card"
        >
          <h3 className="text-sm font-semibold text-foreground mb-3">Priority Tasks</h3>
          <div className="space-y-3">
            {tasks.map((t, i) => (
              <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                <div className={`h-2 w-2 rounded-full mt-1.5 shrink-0 ${
                  t.priority === "High" ? "bg-destructive" : t.priority === "Medium" ? "bg-warning" : "bg-success"
                }`} />
                <div className="min-w-0">
                  <p className="text-sm text-foreground truncate">{t.task}</p>
                  <p className="text-[11px] text-muted-foreground">Due: {t.due}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Loans Table */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-card rounded-xl border border-border shadow-card overflow-hidden"
      >
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Recent Loan Activity</h3>
          <button className="text-xs text-primary hover:underline">View All →</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                {["Loan ID", "Borrower", "Amount", "Type", "Status", "Date"].map(h => (
                  <th key={h} className="text-left px-5 py-2.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentLoans.map((loan) => (
                <tr key={loan.id} className="border-b border-border/30 last:border-0 hover:bg-secondary/20 transition-colors cursor-pointer">
                  <td className="px-5 py-3 text-sm font-mono text-primary">{loan.id}</td>
                  <td className="px-5 py-3 text-sm text-foreground">{loan.borrower}</td>
                  <td className="px-5 py-3 text-sm font-semibold text-foreground">{loan.amount}</td>
                  <td className="px-5 py-3 text-sm text-muted-foreground">{loan.type}</td>
                  <td className="px-5 py-3"><StatusBadge status={loan.status} /></td>
                  <td className="px-5 py-3 text-sm text-muted-foreground">{loan.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
