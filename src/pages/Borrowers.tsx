import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { StatCard } from "@/components/shared/StatCard";
import { UserCheck, Plus } from "lucide-react";

const borrowers = [
  { id: "BRW-001", name: "Sarah Mitchell", email: "sarah.m@email.com", phone: "(512) 555-0123", creditScore: "742", status: "Active", loans: "2", preApproved: "Yes" },
  { id: "BRW-002", name: "James Rodriguez", email: "james.r@email.com", phone: "(720) 555-0456", creditScore: "695", status: "Active", loans: "1", preApproved: "Yes" },
  { id: "BRW-003", name: "Emily Chen", email: "emily.c@email.com", phone: "(503) 555-0789", creditScore: "780", status: "Active", loans: "1", preApproved: "Yes" },
  { id: "BRW-004", name: "Michael Brown", email: "michael.b@email.com", phone: "(206) 555-0321", creditScore: "620", status: "Pending", loans: "1", preApproved: "No" },
  { id: "BRW-005", name: "Lisa Park", email: "lisa.p@email.com", phone: "(408) 555-0654", creditScore: "710", status: "Active", loans: "3", preApproved: "Yes" },
  { id: "BRW-006", name: "David Kim", email: "david.k@email.com", phone: "(213) 555-0987", creditScore: "658", status: "Pending", loans: "0", preApproved: "No" },
];

const columns = [
  { key: "id", label: "ID", render: (v: string) => <span className="font-mono text-primary text-xs">{v}</span> },
  { key: "name", label: "Name", render: (v: string) => <span className="font-medium">{v}</span> },
  { key: "email", label: "Email", render: (v: string) => <span className="text-muted-foreground">{v}</span> },
  { key: "creditScore", label: "Credit Score", render: (v: string) => {
    const score = parseInt(v);
    return <span className={`font-mono font-semibold ${score >= 720 ? "text-success" : score >= 660 ? "text-warning" : "text-destructive"}`}>{v}</span>;
  }},
  { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v} /> },
  { key: "loans", label: "Active Loans" },
  { key: "preApproved", label: "Pre-Approved", render: (v: string) => <span className={v === "Yes" ? "text-success font-medium" : "text-muted-foreground"}>{v}</span> },
];

export default function Borrowers() {
  return (
    <div className="space-y-6">
      <PageHeader title="Borrowers" description="Manage borrower profiles and relationships" icon={UserCheck}
        actions={<button className="flex items-center gap-1.5 px-3 py-2 text-sm bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90"><Plus className="h-3.5 w-3.5" /> Add Borrower</button>}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Borrowers" value="1,284" change="+45 this month" changeType="positive" icon={UserCheck} delay={0} />
        <StatCard title="Pre-Approved" value="312" icon={UserCheck} delay={0.05} />
        <StatCard title="Avg Credit Score" value="718" change="+5 pts avg" changeType="positive" icon={UserCheck} delay={0.1} />
        <StatCard title="Repeat Clients" value="23%" icon={UserCheck} delay={0.15} />
      </div>
      <DataTable columns={columns} data={borrowers} />
    </div>
  );
}
