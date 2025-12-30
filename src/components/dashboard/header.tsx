// @ts-nocheck
import { Bell, Menu, Search, School } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserNav } from '@/components/dashboard/user-nav';
import { type UserRole } from '@/lib/types';
import { SidebarNav } from './sidebar-nav';

export function DashboardHeader({
  userName,
  userRole,
  userEmail
}: {
  userName: string;
  userRole: UserRole;
  userEmail: string;
}) {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-card px-4 md:px-6 sticky top-0 z-30">
       <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col p-0">
          <div className="flex h-16 items-center border-b px-6">
            <div className="flex items-center gap-2 font-semibold">
              <School className="h-6 w-6 text-primary" />
              <span className="font-headline text-xl">School Management</span>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
             <SidebarNav role={userRole} />
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <ThemeToggle />
       <Button variant="ghost" size="icon" className="relative">
        <Bell className="h-5 w-5" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
        </span>
        <span className="sr-only">Notifications</span>
      </Button>
      <UserNav userName={userName} userEmail={userEmail} userRole={userRole} />
    </header>
  );
}
