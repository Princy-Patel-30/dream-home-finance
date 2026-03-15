import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Users, Plus } from "lucide-react";

const users = [
  { name: "John Maxwell", email: "john@smartmortgage.com", role: "Senior Loan Officer", status: "Active", lastLogin: "Mar 15, 2026", loans: "28" },
  { name: "Jane Smith", email: "jane@smartmortgage.com", role: "Loan Officer", status: "Active", lastLogin: "Mar 15, 2026", loans: "24" },
  { name: "Bob Jones", email: "bob@smartmortgage.com", role: "Underwriter", status: "Active", lastLogin: "Mar 14, 2026", loans: "19" },
  { name: "Sarah Lee", email: "sarah@smartmortgage.com", role: "Processor", status: "Active", lastLogin: "Mar 15, 2026", loans: "15" },
  { name: "Mike Davis", email: "mike@smartmortgage.com", role: "Closer", status: "Active", lastLogin: "Mar 13, 2026", loans: "12" },
  { name: "Amy Wilson", email: "amy@smartmortgage.com", role: "Admin", status: "Active", lastLogin: "Mar 15, 2026", loans: "—" },
];

const columns = [
  { key: "name", label: "Name", render: (v: string) => <span className="font-medium">{v}</span> },
  { key: "email", label: "Email", render: (v: string) => <span className="text-muted-foreground">{v}</span> },
  { key: "role", label: "Role" },
  { key: "status", label: "Status", render: (v: string) => <StatusBadge status={v} /> },
  { key: "lastLogin", label: "Last Login" },
  { key: "loans", label: "Active Loans" },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Users" description="Manage team members, roles & permissions" icon={Users}
        actions={<button className="flex items-center gap-1.5 px-3 py-2 text-sm bg-gradient-primary text-primary-foreground rounded-lg"><Plus className="h-3.5 w-3.5" /> Add User</button>}
      />
      <DataTable columns={columns} data={users} />
    </div>
  );
}
