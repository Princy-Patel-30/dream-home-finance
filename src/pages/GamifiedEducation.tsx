import { PageHeader } from "@/components/shared/PageHeader";
import { motion } from "framer-motion";
import { BookOpen, Trophy, Star, Zap, Lock, CheckCircle, ArrowRight } from "lucide-react";

const modules = [
  {
    title: "Credit Score Mastery",
    desc: "Learn how credit scores work and strategies to improve yours before applying.",
    level: "Beginner",
    xp: 500,
    lessons: 8,
    completed: 8,
    badge: "🏆",
    unlocked: true,
  },
  {
    title: "Down Payment Strategies",
    desc: "Explore programs, savings tips, and assistance options for your down payment.",
    level: "Beginner",
    xp: 750,
    lessons: 10,
    completed: 7,
    badge: "💰",
    unlocked: true,
  },
  {
    title: "Understanding DTI Ratios",
    desc: "Master debt-to-income calculations and how they impact your approval.",
    level: "Intermediate",
    xp: 1000,
    lessons: 6,
    completed: 3,
    badge: "📊",
    unlocked: true,
  },
  {
    title: "Mortgage Product Explorer",
    desc: "Interactive comparison of Conventional, FHA, VA, USDA, and Jumbo loans.",
    level: "Intermediate",
    xp: 1200,
    lessons: 12,
    completed: 0,
    badge: "🏠",
    unlocked: true,
  },
  {
    title: "Rate Lock Strategy Game",
    desc: "Simulate rate lock decisions in real market conditions. Beat the market!",
    level: "Advanced",
    xp: 2000,
    lessons: 5,
    completed: 0,
    badge: "📈",
    unlocked: false,
  },
  {
    title: "Home Buying Simulator",
    desc: "Full simulation from pre-approval to closing. Make financial decisions and see outcomes.",
    level: "Advanced",
    xp: 3000,
    lessons: 15,
    completed: 0,
    badge: "🎮",
    unlocked: false,
  },
];

const achievements = [
  { name: "First Steps", desc: "Complete your first module", earned: true, icon: "🌟" },
  { name: "Credit Guru", desc: "Score 100% on credit quiz", earned: true, icon: "🧠" },
  { name: "Savings Champion", desc: "Complete all savings challenges", earned: false, icon: "💎" },
  { name: "Mortgage Master", desc: "Complete all modules", earned: false, icon: "👑" },
];

const levelColors: Record<string, string> = {
  Beginner: "text-success bg-success/10 border-success/20",
  Intermediate: "text-warning bg-warning/10 border-warning/20",
  Advanced: "text-primary bg-primary/10 border-primary/20",
};

export default function GamifiedEducation() {
  const totalXP = 1250;
  const level = 3;
  const nextLevelXP = 2000;

  return (
    <div className="space-y-6">
      <PageHeader title="Financial Education" description="Gamified learning modules to boost borrower qualification" icon={BookOpen} />

      {/* Player Stats */}
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl border border-border p-5 shadow-card bg-gradient-card"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-elevated">
              <Trophy className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-foreground">Level {level}</h2>
                <span className="text-xs text-primary font-mono">{totalXP} XP</span>
              </div>
              <p className="text-sm text-muted-foreground">Financial Apprentice</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-2 w-48 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(totalXP / nextLevelXP) * 100}%` }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-full bg-gradient-primary rounded-full"
                  />
                </div>
                <span className="text-[10px] text-muted-foreground font-mono">{totalXP}/{nextLevelXP} XP</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-center px-4">
              <p className="text-xl font-bold text-foreground">18</p>
              <p className="text-[10px] text-muted-foreground">Lessons Done</p>
            </div>
            <div className="text-center px-4 border-l border-border">
              <p className="text-xl font-bold text-foreground">🔥 5</p>
              <p className="text-[10px] text-muted-foreground">Day Streak</p>
            </div>
            <div className="text-center px-4 border-l border-border">
              <p className="text-xl font-bold text-foreground">2</p>
              <p className="text-[10px] text-muted-foreground">Badges</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modules Grid */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Learning Modules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`bg-card rounded-xl border p-5 shadow-card transition-all cursor-pointer group ${
                m.unlocked ? "border-border hover:border-primary/30 hover:glow-primary" : "border-border/50 opacity-60"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{m.badge}</span>
                {!m.unlocked && <Lock className="h-4 w-4 text-muted-foreground" />}
                {m.completed === m.lessons && <CheckCircle className="h-4 w-4 text-success" />}
              </div>
              <h4 className="text-sm font-semibold text-foreground">{m.title}</h4>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{m.desc}</p>
              <div className="flex items-center gap-2 mt-3">
                <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${levelColors[m.level]}`}>{m.level}</span>
                <span className="text-[10px] text-muted-foreground flex items-center gap-0.5"><Zap className="h-3 w-3" />{m.xp} XP</span>
              </div>
              {m.unlocked && (
                <div className="mt-3">
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
                    <span>{m.completed}/{m.lessons} lessons</span>
                    <span>{Math.round((m.completed / m.lessons) * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary rounded-full" style={{ width: `${(m.completed / m.lessons) * 100}%` }} />
                  </div>
                </div>
              )}
              {m.unlocked && m.completed < m.lessons && (
                <button className="mt-3 w-full flex items-center justify-center gap-1 text-xs text-primary font-medium hover:underline">
                  {m.completed > 0 ? "Continue" : "Start"} <ArrowRight className="h-3 w-3" />
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className={`bg-card rounded-xl border p-4 text-center shadow-card ${
                a.earned ? "border-primary/20 glow-primary" : "border-border opacity-50"
              }`}
            >
              <span className="text-3xl">{a.icon}</span>
              <p className="text-xs font-medium text-foreground mt-2">{a.name}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{a.desc}</p>
              {a.earned && <span className="text-[10px] text-success font-medium mt-1 block">✓ Earned</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
