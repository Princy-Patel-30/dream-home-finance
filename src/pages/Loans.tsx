import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { StatCard } from "@/components/shared/StatCard";
import { Landmark, Plus, Filter } from "lucide-react";

const loans = [
  { id: "LN-4521", borrower: "Sarah Mitchell", property: "123 Oak Lane, Austin TX", amount: "$425,000", rate: "6.25%", status: "In-Progress", stage: "Underwriting", closing: "Apr 15" },
  { id: "LN-4520", borrower: "James Rodriguez", property: "456 Elm St, Denver CO", amount: "$680,000", rate: "6.50%", status: "Approved", stage: "Closing", closing: "Mar 28" },
  { id: "LN-4519", borrower: "Emily Chen", property: "789 Maple Dr, Portland OR", amount: "$310,000", rate: "6.00%", status: "Processing", stage: "Document Review", closing: "Apr 22" },
  { id: "LN-4518", borrower: "Michael Brown", property: "321 Pine Ave, Seattle WA", amount: "$275,000", rate: "5.875%", status: "Pending", stage: "Application", closing: "May 1" },
  { id: "LN-4517", borrower: "Lisa Park", property: "654 Cedar Blvd, San Jose CA", amount: "$520,000", rate: "6.125%", status: "Completed", stage: "Funded", closing: "Mar 10" },
];

const columns = [
  { key: "id", label: "Loan ID", render: (v: string) => <span className="font-mono text-primary">{v}</span> },
  { key: "borrower", label: "Borrower" },
  { key: "property", label: "Property", render: (v: string) => <span className="text-muted-foreground text-xs">{v}</span> },
  { key: "amount", label: "Amount", render: (v: string) => <span className="font-semibold">{v}</span> },
  { key: "rate", label: "Rate" },
  { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v} /> },
  { key: "stage", label: "Stage" },
  { key: "closing", label: "Est. Close" },
];

export default function Loans() {
  return (
    <div className="space-y-6">
      <PageHeader title="Loans" description="Active loan pipeline management" icon={Landmark}
        actions={
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80"><Filter className="h-3.5 w-3.5" /> Filter</button>
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90"><Plus className="h-3.5 w-3.5" /> New Loan</button>
          </div>
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Active Loans" value="135" change="+12 this month" changeType="positive" icon={Landmark} delay={0} />
        <StatCard title="Total Volume" value="$48.2M" change="+18% MoM" changeType="positive" icon={Landmark} delay={0.05} />
        <StatCard title="Avg Loan Size" value="$357K" icon={Landmark} delay={0.1} />
        <StatCard title="Closing This Week" value="8" change="3 pending docs" changeType="neutral" icon={Landmark} delay={0.15} />
      </div>
      <DataTable columns={columns} data={loans} />
    </div>
  );
}
