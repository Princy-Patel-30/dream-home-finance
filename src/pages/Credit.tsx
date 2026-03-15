import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/shared/StatCard";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { CreditCard, RefreshCw } from "lucide-react";

const creditReports = [
  { borrower: "Sarah Mitchell", bureau: "Equifax / Experian / TransUnion", score: "742 / 738 / 745", status: "Completed", pulled: "Mar 14, 2026", expires: "Apr 14, 2026" },
  { borrower: "James Rodriguez", bureau: "Equifax / Experian / TransUnion", score: "695 / 702 / 689", status: "Completed", pulled: "Mar 13, 2026", expires: "Apr 13, 2026" },
  { borrower: "Emily Chen", bureau: "Equifax / Experian / TransUnion", score: "780 / 775 / 782", status: "Completed", pulled: "Mar 12, 2026", expires: "Apr 12, 2026" },
  { borrower: "Michael Brown", bureau: "Equifax / Experian / TransUnion", score: "620 / 615 / 628", status: "Pending", pulled: "—", expires: "—" },
  { borrower: "David Kim", bureau: "Equifax / Experian / TransUnion", score: "658 / 661 / 654", status: "Completed", pulled: "Mar 9, 2026", expires: "Apr 9, 2026" },
];

const columns = [
  { key: "borrower", label: "Borrower", render: (v: string) => <span className="font-medium">{v}</span> },
  { key: "score", label: "Tri-Merge Score", render: (v: string) => <span className="font-mono text-sm">{v}</span> },
  { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v} /> },
  { key: "pulled", label: "Date Pulled" },
  { key: "expires", label: "Expires" },
];

export default function Credit() {
  return (
    <div className="space-y-6">
      <PageHeader title="Credit Reports" description="Automated tri-merge credit report pulling & analysis" icon={CreditCard}
        actions={<button className="flex items-center gap-1.5 px-3 py-2 text-sm bg-gradient-primary text-primary-foreground rounded-lg"><RefreshCw className="h-3.5 w-3.5" /> Pull New Report</button>}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Reports Pulled" value="892" change="+34 this week" changeType="positive" icon={CreditCard} delay={0} />
        <StatCard title="Avg Score" value="718" change="+5 pts trend" changeType="positive" icon={CreditCard} delay={0.05} />
        <StatCard title="Below 660" value="12%" change="Risk flag" changeType="negative" icon={CreditCard} delay={0.1} />
        <StatCard title="Expiring Soon" value="23" change="Within 7 days" changeType="neutral" icon={CreditCard} delay={0.15} />
      </div>
      <DataTable columns={columns} data={creditReports} />
    </div>
  );
}
