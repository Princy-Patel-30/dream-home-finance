const statusStyles: Record<string, string> = {
  active: "bg-success/15 text-success border-success/30",
  approved: "bg-success/15 text-success border-success/30",
  completed: "bg-success/15 text-success border-success/30",
  passed: "bg-success/15 text-success border-success/30",
  pending: "bg-warning/15 text-warning border-warning/30",
  "in-review": "bg-info/15 text-info border-info/30",
  "in-progress": "bg-info/15 text-info border-info/30",
  processing: "bg-info/15 text-info border-info/30",
  denied: "bg-destructive/15 text-destructive border-destructive/30",
  rejected: "bg-destructive/15 text-destructive border-destructive/30",
  failed: "bg-destructive/15 text-destructive border-destructive/30",
  overdue: "bg-destructive/15 text-destructive border-destructive/30",
  draft: "bg-muted text-muted-foreground border-border",
};

export function StatusBadge({ status }: { status: string }) {
  const style = statusStyles[status.toLowerCase()] || statusStyles.draft;
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${style}`}>
      {status}
    </span>
  );
}
