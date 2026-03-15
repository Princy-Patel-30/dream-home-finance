import { PageHeader } from "@/components/shared/PageHeader";
import { motion } from "framer-motion";
import { MessageSquare, Send, Phone, Video, Mail } from "lucide-react";

const conversations = [
  { name: "Sarah Mitchell", lastMsg: "Thank you! I'll upload the W-2 by tonight.", time: "10m ago", unread: 0, channel: "Portal" },
  { name: "James Rodriguez", lastMsg: "When can we expect the appraisal results?", time: "25m ago", unread: 2, channel: "SMS" },
  { name: "Emily Chen", lastMsg: "I've signed the disclosure documents.", time: "1h ago", unread: 0, channel: "Email" },
  { name: "Michael Brown", lastMsg: "Can you explain the PMI requirements?", time: "2h ago", unread: 1, channel: "Portal" },
  { name: "Lisa Park", lastMsg: "The closing date works for us!", time: "3h ago", unread: 0, channel: "SMS" },
];

const channelIcons: Record<string, any> = { Portal: MessageSquare, SMS: Phone, Email: Mail, Video: Video };

export default function Communications() {
  return (
    <div className="space-y-6">
      <PageHeader title="Communications Hub" description="Centralized messaging across portal, SMS, email & video" icon={MessageSquare} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[calc(100vh-220px)]">
        {/* Conversation List */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-xl border border-border shadow-card overflow-hidden flex flex-col">
          <div className="p-3 border-b border-border">
            <input type="text" placeholder="Search conversations..." className="w-full bg-secondary rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none" />
          </div>
          <div className="flex-1 overflow-auto">
            {conversations.map((c, i) => {
              const Icon = channelIcons[c.channel] || MessageSquare;
              return (
                <div key={i} className={`p-3 border-b border-border/30 hover:bg-secondary/30 cursor-pointer transition-colors ${i === 0 ? "bg-secondary/20" : ""}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-primary-foreground">{c.name.split(" ").map(n => n[0]).join("")}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground">{c.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{c.lastMsg}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[10px] text-muted-foreground">{c.time}</p>
                      {c.unread > 0 && (
                        <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground mt-1">{c.unread}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-1 ml-10">
                    <Icon className="h-3 w-3 text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground">{c.channel}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Chat Area */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="lg:col-span-2 bg-card rounded-xl border border-border shadow-card flex flex-col overflow-hidden">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">SM</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Sarah Mitchell</p>
                <p className="text-[10px] text-success">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors"><Phone className="h-4 w-4 text-muted-foreground" /></button>
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors"><Video className="h-4 w-4 text-muted-foreground" /></button>
            </div>
          </div>
          <div className="flex-1 p-4 space-y-4 overflow-auto">
            <div className="flex justify-start"><div className="bg-secondary rounded-xl rounded-bl-sm px-4 py-2 max-w-[70%]"><p className="text-sm text-foreground">Hi John, I wanted to check on the status of my application. Do you need anything else from me?</p><p className="text-[10px] text-muted-foreground mt-1">10:23 AM</p></div></div>
            <div className="flex justify-end"><div className="bg-primary/15 border border-primary/20 rounded-xl rounded-br-sm px-4 py-2 max-w-[70%]"><p className="text-sm text-foreground">Hi Sarah! Your application is in underwriting review. We just need your most recent W-2 form to complete the file.</p><p className="text-[10px] text-muted-foreground mt-1">10:25 AM</p></div></div>
            <div className="flex justify-start"><div className="bg-secondary rounded-xl rounded-bl-sm px-4 py-2 max-w-[70%]"><p className="text-sm text-foreground">Thank you! I'll upload the W-2 by tonight.</p><p className="text-[10px] text-muted-foreground mt-1">10:30 AM</p></div></div>
          </div>
          <div className="p-3 border-t border-border">
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Type a message..." className="flex-1 bg-secondary rounded-lg px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none" />
              <button className="h-9 w-9 rounded-lg bg-gradient-primary flex items-center justify-center hover:opacity-90 transition-opacity">
                <Send className="h-4 w-4 text-primary-foreground" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
