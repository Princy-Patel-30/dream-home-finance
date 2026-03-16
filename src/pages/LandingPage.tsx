import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Landmark, ArrowRight, Shield, Zap, BarChart3, Users, FileCheck,
  CreditCard, BookOpen, Eye, ChevronRight, Star, CheckCircle, Play
} from "lucide-react";

const stats = [
  { label: "Loans Processed", value: "$12B+", icon: Landmark },
  { label: "Active Lenders", value: "2,400+", icon: Users },
  { label: "Avg. Days to Close", value: "18", icon: Zap },
  { label: "Client Satisfaction", value: "98.7%", icon: Star },
];

const features = [
  {
    icon: FileCheck,
    title: "Intelligent Underwriting",
    desc: "AI-powered risk assessment with automated document analysis and real-time compliance checks.",
    gradient: "from-primary to-accent",
  },
  {
    icon: CreditCard,
    title: "Instant Credit Decisioning",
    desc: "Pull tri-merge reports and generate automated credit recommendations in under 60 seconds.",
    gradient: "from-accent to-success",
  },
  {
    icon: BarChart3,
    title: "Dynamic Pricing Engine",
    desc: "Real-time rate optimization across 200+ investors with margin analytics and lock management.",
    gradient: "from-warning to-destructive",
  },
  {
    icon: Shield,
    title: "Built-In Compliance",
    desc: "Automated TRID, HMDA, and fair lending monitoring with audit-ready reporting.",
    gradient: "from-primary to-chart-4",
  },
  {
    icon: BookOpen,
    title: "Gamified Education",
    desc: "Interactive financial literacy modules that boost borrower qualification rates by 40%.",
    gradient: "from-chart-4 to-primary",
  },
  {
    icon: Eye,
    title: "AR/VR Property Tours",
    desc: "Immersive virtual tours with integrated mortgage pre-approval for remote home buying.",
    gradient: "from-success to-accent",
  },
];

const testimonials = [
  {
    name: "Rebecca Torres",
    role: "VP Lending, Pacific Credit Union",
    quote: "SmartMortgage Pro cut our processing time by 62%. The AI underwriting alone paid for itself in month one.",
    avatar: "RT",
  },
  {
    name: "David Kim",
    role: "CEO, Apex Mortgage Group",
    quote: "The gamified education module increased our borrower readiness scores dramatically. Game changer.",
    avatar: "DK",
  },
  {
    name: "Sarah Chen",
    role: "COO, Heritage Community Bank",
    quote: "Finally a platform that handles compliance without making my team want to quit. Brilliant execution.",
    avatar: "SC",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$499",
    period: "/mo",
    desc: "For independent brokers and small shops",
    features: ["Up to 50 loans/mo", "Core LOS features", "Basic compliance", "Email support"],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$1,299",
    period: "/mo",
    desc: "For growing mortgage companies",
    features: ["Unlimited loans", "AI Underwriting", "Pricing engine", "Gamified education", "Priority support"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For banks and large institutions",
    features: ["Everything in Pro", "AR/VR tours", "Custom integrations", "Dedicated CSM", "SLA guarantee"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Landmark className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground tracking-tight">SmartMortgage</span>
            <span className="text-[10px] font-bold bg-primary/20 text-primary px-2 py-0.5 rounded-full">PRO</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
              Sign In
            </Link>
            <Link
              to="/dashboard"
              className="bg-gradient-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-glow"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6">
        {/* Ambient glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/6 blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-medium text-primary">Now with AI-Powered Underwriting</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6"
          >
            The mortgage platform
            <br />
            <span className="text-gradient">built for speed</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Originate, underwrite, and close loans 3× faster. SmartMortgage Pro is the all-in-one LOS
            powering the next generation of community banks, credit unions, and mortgage brokers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/dashboard"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-xl text-base hover:opacity-90 transition-opacity shadow-glow flex items-center gap-2"
            >
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Link>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium px-6 py-3.5 rounded-xl border border-border hover:border-primary/40">
              <Play className="h-4 w-4" /> Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border/50 glass">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Platform Features</p>
            <h2 className="text-3xl md:text-4xl font-bold">Everything you need to dominate mortgage lending</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              18+ integrated modules working in perfect harmony — from application to closing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:glow-primary transition-all duration-300"
              >
                <div className={`h-11 w-11 rounded-lg bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4 opacity-90`}>
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold">Trusted by industry leaders</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold">Simple, transparent pricing</h2>
            <p className="text-muted-foreground mt-4">No hidden fees. Cancel anytime. 14-day free trial on all plans.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`rounded-xl p-6 border ${
                  tier.highlighted
                    ? "border-primary bg-primary/5 glow-primary"
                    : "border-border bg-card"
                } relative`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-[11px] font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-lg font-bold text-foreground">{tier.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 mb-4">{tier.desc}</p>
                <div className="mb-5">
                  <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.period}</span>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-success shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    tier.highlighted
                      ? "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
                      : "border border-border text-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to close loans <span className="text-gradient">3× faster</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join 2,400+ lending professionals who've already made the switch. Set up in minutes, not months.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-xl text-base hover:opacity-90 transition-opacity shadow-glow"
          >
            Start Your Free Trial <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-primary flex items-center justify-center">
              <Landmark className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <span className="text-sm font-bold text-foreground">SmartMortgage Pro</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Maxwell Financial Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
