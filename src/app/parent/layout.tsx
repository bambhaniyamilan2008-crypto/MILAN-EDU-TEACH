'use client';

import { type ReactNode } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
} from '@/components/ui/sidebar';
import { DashboardHeader } from '@/components/dashboard/header';
import { SidebarNav } from '@/components/dashboard/sidebar-nav';
import { Button } from '@/components/ui/button';
import { LogOut, School } from 'lucide-react';
import Link from 'next/link';
import { WithAuth } from '@/firebase/auth/with-auth';
import { useUser } from '@/firebase';

function ParentLayoutContent({ children }: { children: ReactNode }) {
  const user = useUser();
  return (
    <div className="min-h-screen w-full">
      <div className="hidden md:block">
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader>
              <Link href="/parent/dashboard" className="flex items-center gap-2">
                <School className="h-7 w-7 text-primary" />
                <h1 className="font-headline text-2xl font-bold">School Management</h1>
              </Link>
            </SidebarHeader>
            <SidebarContent>
              <SidebarNav role="parent" />
            </SidebarContent>
            <SidebarFooter>
               <Link href="/login">
                <Button asChild variant="ghost" className="w-full justify-start gap-2">
                  <span><LogOut size={16} /> Logout</span>
                </Button>
              </Link>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <DashboardHeader userName={user?.displayName || 'David Chen'} userRole="parent" userEmail={user?.email || 'd.chen@email.com'} />
            <main className="p-4 sm:p-6 animate-fade-in">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </div>
       <div className="md:hidden">
        <DashboardHeader userName={user?.displayName || 'David Chen'} userRole="parent" userEmail={user?.email || 'd.chen@email.com'} />
        <main className="p-4 sm:p-6 animate-fade-in">{children}</main>
      </div>
    </div>
  );
}

export default function ParentLayout({ children }: { children: ReactNode }) {
  return <WithAuth><ParentLayoutContent>{children}</ParentLayoutContent></WithAuth>
}
