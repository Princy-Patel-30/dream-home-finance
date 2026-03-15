import { PageHeader } from "@/components/shared/PageHeader";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { motion } from "framer-motion";
import { Eye, Play, MapPin, Home, DollarSign, CheckCircle, Clock, Maximize2 } from "lucide-react";

const properties = [
  {
    address: "123 Oak Lane, Austin, TX 78701",
    price: "$529,000",
    beds: 4,
    baths: 3,
    sqft: "2,450",
    status: "Pre-Approved",
    tourType: "3D Virtual",
    image: "🏡",
    preApprovalAmount: "$550,000",
    estimatedPayment: "$3,245/mo",
    matchScore: 95,
  },
  {
    address: "456 Elm Street, Denver, CO 80202",
    price: "$685,000",
    beds: 5,
    baths: 4,
    sqft: "3,200",
    status: "In-Review",
    tourType: "AR Walkthrough",
    image: "🏠",
    preApprovalAmount: "$700,000",
    estimatedPayment: "$4,125/mo",
    matchScore: 88,
  },
  {
    address: "789 Maple Drive, Portland, OR 97201",
    price: "$415,000",
    beds: 3,
    baths: 2,
    sqft: "1,850",
    status: "Pre-Approved",
    tourType: "360° Video",
    image: "🏘️",
    preApprovalAmount: "$450,000",
    estimatedPayment: "$2,580/mo",
    matchScore: 92,
  },
  {
    address: "321 Pine Avenue, Seattle, WA 98101",
    price: "$780,000",
    beds: 4,
    baths: 3,
    sqft: "2,800",
    status: "Pending",
    tourType: "VR Experience",
    image: "🏢",
    preApprovalAmount: "$800,000",
    estimatedPayment: "$4,650/mo",
    matchScore: 78,
  },
];

const tourTypes: Record<string, string> = {
  "3D Virtual": "bg-primary/10 text-primary border-primary/20",
  "AR Walkthrough": "bg-success/10 text-success border-success/20",
  "360° Video": "bg-warning/10 text-warning border-warning/20",
  "VR Experience": "bg-info/10 text-info border-info/20",
};

export default function PropertyTours() {
  return (
    <div className="space-y-6">
      <PageHeader title="AR/VR Property Tours" description="Immersive property tours with integrated mortgage pre-approval" icon={Eye} />

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { icon: Eye, title: "3D Virtual Tours", desc: "Explore properties in full 3D from any device" },
          { icon: Maximize2, title: "AR Overlay", desc: "See mortgage details overlaid on real rooms" },
          { icon: DollarSign, title: "Instant Pre-Approval", desc: "Get pre-approved while touring properties" },
          { icon: CheckCircle, title: "Smart Matching", desc: "AI matches properties to your financial profile" },
        ].map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-xl border border-border p-4 shadow-card"
          >
            <f.icon className="h-5 w-5 text-primary mb-2" />
            <h4 className="text-xs font-semibold text-foreground">{f.title}</h4>
            <p className="text-[11px] text-muted-foreground mt-0.5">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {properties.map((p, i) => (
          <motion.div
            key={p.address}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className="bg-card rounded-xl border border-border shadow-card overflow-hidden hover:border-primary/20 hover:glow-primary transition-all group"
          >
            {/* Tour Preview */}
            <div className="relative h-48 bg-gradient-card flex items-center justify-center">
              <span className="text-6xl">{p.image}</span>
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute top-3 right-3">
                <span className={`text-[10px] px-2 py-1 rounded-full border font-medium ${tourTypes[p.tourType]}`}>
                  {p.tourType}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-foreground">{p.price}</p>
                  <p className="text-[11px] text-muted-foreground">{p.estimatedPayment}</p>
                </div>
                <button className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-elevated hover:scale-105 transition-transform">
                  <Play className="h-4 w-4 text-primary-foreground ml-0.5" />
                </button>
              </div>
              {/* Match Score */}
              <div className="absolute top-3 left-3">
                <div className={`h-10 w-10 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                  p.matchScore >= 90 ? "border-success text-success" : p.matchScore >= 80 ? "border-warning text-warning" : "border-muted-foreground text-muted-foreground"
                }`}>
                  {p.matchScore}%
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-primary" />
                    <p className="text-sm font-medium text-foreground">{p.address}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span>{p.beds} bed</span>
                    <span>{p.baths} bath</span>
                    <span>{p.sqft} sqft</span>
                  </div>
                </div>
                <StatusBadge status={p.status} />
              </div>

              {/* Mortgage Quick View */}
              <div className="mt-3 p-3 bg-secondary/50 rounded-lg">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Pre-Approval</span>
                  <span className="font-semibold text-success">{p.preApprovalAmount}</span>
                </div>
                <div className="flex items-center justify-between text-xs mt-1">
                  <span className="text-muted-foreground">Est. Monthly</span>
                  <span className="font-mono text-foreground">{p.estimatedPayment}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90">
                  <Eye className="h-3 w-3" /> Start Tour
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80">
                  <DollarSign className="h-3 w-3" /> Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
