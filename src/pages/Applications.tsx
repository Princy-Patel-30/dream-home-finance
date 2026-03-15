import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/shared/StatCard";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { FileText, Plus, Filter } from "lucide-react";

const applications = [
  { id: "APP-7891", borrower: "Sarah Mitchell", loanType: "Conventional", amount: "$425,000", status: "In-Review", submitted: "Mar 14, 2026", officer: "John Maxwell" },
  { id: "APP-7890", borrower: "James Rodriguez", loanType: "Jumbo", amount: "$680,000", status: "Approved", submitted: "Mar 13, 2026", officer: "Jane Smith" },
  { id: "APP-7889", borrower: "Emily Chen", loanType: "FHA", amount: "$310,000", status: "Processing", submitted: "Mar 12, 2026", officer: "John Maxwell" },
  { id: "APP-7888", borrower: "Michael Brown", loanType: "VA", amount: "$275,000", status: "Pending", submitted: "Mar 11, 2026", officer: "Bob Jones" },
  { id: "APP-7887", borrower: "Lisa Park", loanType: "Conventional", amount: "$520,000", status: "Completed", submitted: "Mar 10, 2026", officer: "Jane Smith" },
  { id: "APP-7886", borrower: "David Kim", loanType: "FHA", amount: "$240,000", status: "Denied", submitted: "Mar 9, 2026", officer: "John Maxwell" },
];

const columns = [
  { key: "id", label: "App ID", render: (v: string) => <span className="font-mono text-primary">{v}</span> },
  { key: "borrower", label: "Borrower" },
  { key: "loanType", label: "Loan Type" },
  { key: "amount", label: "Amount", render: (v: string) => <span className="font-semibold">{v}</span> },
  { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v} /> },
  { key: "submitted", label: "Submitted" },
  { key: "officer", label: "Loan Officer" },
];

export default function Applications() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Applications"
        description="Manage and track loan applications"
        icon={FileText}
        actions={
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
              <Filter className="h-3.5 w-3.5" /> Filter
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
              <Plus className="h-3.5 w-3.5" /> New Application
            </button>
          </div>
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Applications" value="247" change="+18 this week" changeType="positive" icon={FileText} delay={0} />
        <StatCard title="In Review" value="32" change="5 urgent" changeType="neutral" icon={FileText} delay={0.05} />
        <StatCard title="Approval Rate" value="82%" change="+3% vs last month" changeType="positive" icon={FileText} delay={0.1} />
        <StatCard title="Avg Processing" value="4.2 days" change="-0.5 days" changeType="positive" icon={FileText} delay={0.15} />
      </div>
      <DataTable columns={columns} data={applications} />
    </div>
  );
}
