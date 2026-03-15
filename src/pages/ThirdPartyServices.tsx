import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Building, Plus } from "lucide-react";

const services = [
  { provider: "ABC Appraisal Co.", type: "Appraisal", region: "Texas, Oklahoma", turnaround: "5-7 days", status: "Active", ordersThisMonth: "23" },
  { provider: "FirstTitle National", type: "Title Search", region: "Nationwide", turnaround: "3-5 days", status: "Active", ordersThisMonth: "45" },
  { provider: "SafeGuard Insurance", type: "HOI", region: "West Coast", turnaround: "Instant", status: "Active", ordersThisMonth: "18" },
  { provider: "QuickFlood LLC", type: "Flood Cert", region: "Nationwide", turnaround: "24 hrs", status: "Active", ordersThisMonth: "67" },
  { provider: "PestCheck Pro", type: "Pest Inspection", region: "Southeast", turnaround: "2-3 days", status: "Pending", ordersThisMonth: "5" },
];

const columns = [
  { key: "provider", label: "Provider", render: (v: string) => <span className="font-medium">{v}</span> },
  { key: "type", label: "Service Type" },
  { key: "region", label: "Coverage" },
  { key: "turnaround", label: "Turnaround" },
  { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v} /> },
  { key: "ordersThisMonth", label: "Orders (Month)" },
];

export default function ThirdPartyServices() {
  return (
    <div className="space-y-6">
      <PageHeader title="Third-Party Services" description="Manage appraisals, title, insurance & vendor orders" icon={Building}
        actions={<button className="flex items-center gap-1.5 px-3 py-2 text-sm bg-gradient-primary text-primary-foreground rounded-lg"><Plus className="h-3.5 w-3.5" /> Add Vendor</button>}
      />
      <DataTable columns={columns} data={services} />
    </div>
  );
}
