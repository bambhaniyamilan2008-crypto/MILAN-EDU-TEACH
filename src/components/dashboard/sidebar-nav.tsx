// @ts-nocheck
"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import type { NavLink } from '@/lib/types';
import { cn } from '@/lib/utils';
import { adminNavLinks, parentNavLinks, studentNavLinks, teacherNavLinks } from '@/lib/nav-links';
import { type UserRole } from '@/lib/types';

const navLinks: Record<UserRole, NavLink[]> = {
  admin: adminNavLinks,
  teacher: teacherNavLinks,
  student: studentNavLinks,
  parent: parentNavLinks,
};


export function SidebarNav({ role }: { role: UserRole }) {
  const pathname = usePathname();
  const links = navLinks[role];

  return (
    <SidebarMenu>
      {links.map((link) => (
        <SidebarMenuItem key={link.href}>
          <Link href={link.href} passHref>
            <SidebarMenuButton
              asChild
              isActive={pathname === link.href}
              tooltip={{ children: link.label }}
            >
              <div>
                <link.icon />
                <span>{link.label}</span>
              </div>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
