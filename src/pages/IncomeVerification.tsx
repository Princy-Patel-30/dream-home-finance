import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/shared/StatCard";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { DollarSign } from "lucide-react";

const verifications = [
  { borrower: "Sarah Mitchell", employer: "TechCorp Inc.", income: "$125,000/yr", method: "Payroll Direct", status: "Verified", date: "Mar 14" },
  { borrower: "James Rodriguez", employer: "Self-Employed", income: "$185,000/yr", method: "Tax Returns", status: "In-Review", date: "Mar 13" },
  { borrower: "Emily Chen", employer: "HealthFirst LLC", income: "$95,000/yr", method: "Payroll Direct", status: "Verified", date: "Mar 12" },
  { borrower: "Michael Brown", employer: "City of Seattle", income: "$78,000/yr", method: "VOE Letter", status: "Pending", date: "Mar 11" },
  { borrower: "Lisa Park", employer: "Uber / Freelance", income: "$110,000/yr", method: "Bank Statements", status: "In-Review", date: "Mar 11" },
];

const columns = [
  { key: "borrower", label: "Borrower", render: (v: string) => <span className="font-medium">{v}</span> },
  { key: "employer", label: "Employer" },
  { key: "income", label: "Annual Income", render: (v: string) => <span className="font-semibold text-success">{v}</span> },
  { key: "method", label: "Verification Method" },
  { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v} /> },
  { key: "date", label: "Date" },
];

export default function IncomeVerification() {
  return (
    <div className="space-y-6">
      <PageHeader title="Income Verification" description="Automated income verification via payroll, bank, and tax data" icon={DollarSign} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Verifications" value="456" icon={DollarSign} delay={0} />
        <StatCard title="Auto-Verified" value="72%" change="+8% efficiency" changeType="positive" icon={DollarSign} delay={0.05} />
        <StatCard title="Avg Income" value="$112K" icon={DollarSign} delay={0.1} />
        <StatCard title="Gig Economy" value="18%" change="Rising trend" changeType="neutral" icon={DollarSign} delay={0.15} />
      </div>
      <DataTable columns={columns} data={verifications} />
    </div>
  );
}
