import {
  LayoutDashboard, Users, UserCheck, Landmark, FileText, FolderOpen,
  CreditCard, DollarSign, Shield, BarChart3, Settings, Bell, Plug,
  MessageSquare, CheckCircle, Workflow, TrendingUp, BookOpen, Eye,
  Building, Scale, FileCheck
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navGroups = [
  {
    label: "Overview",
    items: [
      { title: "Dashboard", url: "/", icon: LayoutDashboard },
      { title: "Analytics", url: "/analytics", icon: TrendingUp },
      { title: "Notifications", url: "/notifications", icon: Bell },
    ],
  },
  {
    label: "Loan Operations",
    items: [
      { title: "Applications", url: "/applications", icon: FileText },
      { title: "Loans", url: "/loans", icon: Landmark },
      { title: "Borrowers", url: "/borrowers", icon: UserCheck },
      { title: "Documents", url: "/documents", icon: FolderOpen },
      { title: "Workflows", url: "/workflows", icon: Workflow },
    ],
  },
  {
    label: "Underwriting",
    items: [
      { title: "Credit Reports", url: "/credit", icon: CreditCard },
      { title: "Income Verification", url: "/income-verification", icon: DollarSign },
      { title: "Underwriting", url: "/underwriting", icon: FileCheck },
      { title: "Pricing Engine", url: "/pricing", icon: BarChart3 },
    ],
  },
  {
    label: "Compliance & Comms",
    items: [
      { title: "Compliance", url: "/compliance", icon: Scale },
      { title: "Communications", url: "/communications", icon: MessageSquare },
      { title: "Reporting", url: "/reporting", icon: CheckCircle },
    ],
  },
  {
    label: "Innovative",
    items: [
      { title: "Financial Education", url: "/education", icon: BookOpen },
      { title: "Property Tours", url: "/property-tours", icon: Eye },
    ],
  },
  {
    label: "System",
    items: [
      { title: "Users", url: "/users", icon: Users },
      { title: "Integrations", url: "/integrations", icon: Plug },
      { title: "Third-Party Services", url: "/third-party", icon: Building },
      { title: "Admin", url: "/admin", icon: Settings },
    ],
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent className="py-2">
        {!collapsed && (
          <div className="px-4 py-3 mb-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Landmark className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-foreground">SmartMortgage</h2>
                <p className="text-[10px] text-muted-foreground">Pro Platform</p>
              </div>
            </div>
          </div>
        )}
        {navGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-semibold">
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end={item.url === "/"}
                        className="hover:bg-sidebar-accent/50 transition-colors"
                        activeClassName="bg-sidebar-accent text-primary font-medium"
                      >
                        <item.icon className="mr-2 h-4 w-4 shrink-0" />
                        {!collapsed && <span className="text-sm">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
