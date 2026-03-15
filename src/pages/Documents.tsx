import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/shared/StatCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { motion } from "framer-motion";
import { FolderOpen, Upload, FileText, FileCheck, AlertTriangle, Eye } from "lucide-react";

const documents = [
  { name: "W-2 Form 2025", borrower: "Sarah Mitchell", type: "Income", status: "Verified", uploaded: "Mar 14", size: "245 KB" },
  { name: "Bank Statement - Jan 2026", borrower: "James Rodriguez", type: "Assets", status: "In-Review", uploaded: "Mar 13", size: "1.2 MB" },
  { name: "Pay Stubs Q1 2026", borrower: "Emily Chen", type: "Income", status: "Verified", uploaded: "Mar 12", size: "890 KB" },
  { name: "Property Appraisal", borrower: "Sarah Mitchell", type: "Property", status: "Pending", uploaded: "Mar 14", size: "3.4 MB" },
  { name: "Title Search Report", borrower: "Lisa Park", type: "Title", status: "Verified", uploaded: "Mar 11", size: "567 KB" },
  { name: "Tax Return 2024", borrower: "Michael Brown", type: "Tax", status: "Failed", uploaded: "Mar 10", size: "1.8 MB" },
  { name: "Driver's License", borrower: "David Kim", type: "ID", status: "Verified", uploaded: "Mar 9", size: "320 KB" },
  { name: "HOI Policy", borrower: "Emily Chen", type: "Insurance", status: "Pending", uploaded: "Mar 12", size: "780 KB" },
];

const typeColors: Record<string, string> = {
  Income: "text-primary", Assets: "text-success", Property: "text-warning",
  Title: "text-info", Tax: "text-accent", ID: "text-muted-foreground", Insurance: "text-warning",
};

export default function Documents() {
  return (
    <div className="space-y-6">
      <PageHeader title="Document Management" description="Secure document collection, OCR verification & management" icon={FolderOpen}
        actions={
          <button className="flex items-center gap-1.5 px-3 py-2 text-sm bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90">
            <Upload className="h-3.5 w-3.5" /> Upload Documents
          </button>
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Documents" value="3,847" change="+124 this week" changeType="positive" icon={FolderOpen} delay={0} />
        <StatCard title="Pending Review" value="67" change="12 urgent" changeType="neutral" icon={AlertTriangle} delay={0.05} />
        <StatCard title="Auto-Verified" value="89%" change="+2% accuracy" changeType="positive" icon={FileCheck} delay={0.1} />
        <StatCard title="OCR Processed" value="2,145" icon={FileText} delay={0.15} />
      </div>

      {/* Upload Zone */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
      >
        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">Drag & drop files here or <span className="text-primary">browse</span></p>
        <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG up to 25MB. AI-powered OCR will auto-categorize & verify</p>
      </motion.div>

      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {documents.map((doc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className="bg-card rounded-lg border border-border p-4 hover:border-primary/30 hover:glow-primary transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <FileText className={`h-8 w-8 ${typeColors[doc.type] || "text-muted-foreground"}`} />
              <Eye className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-sm font-medium text-foreground truncate">{doc.name}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{doc.borrower}</p>
            <div className="flex items-center justify-between mt-3">
              <StatusBadge status={doc.status} />
              <span className="text-[10px] text-muted-foreground">{doc.size}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
