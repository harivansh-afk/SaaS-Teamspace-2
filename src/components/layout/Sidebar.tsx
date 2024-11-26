'use client';

import { OrganizationSwitcher } from '@clerk/nextjs';
import {
  BarChart3,
  Calendar,
  CreditCard,
  Home,
  Inbox,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

import { getI18nPath } from '@/utils/Helpers';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Team', href: '/dashboard/organization-profile/organization-members', icon: Users },
  { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
  { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar },
  { name: 'Inbox', href: '/dashboard/inbox', icon: Inbox },
  { name: 'Payments', href: '/dashboard/payments', icon: CreditCard },
  { name: 'Settings', href: '/dashboard/organization-profile', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className="flex h-full w-[250px] flex-col border-r bg-muted/10">
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <LayoutDashboard className="size-6" />
        <OrganizationSwitcher
          organizationProfileMode="navigation"
          organizationProfileUrl={getI18nPath('/dashboard/organization-profile', locale)}
          afterCreateOrganizationUrl="/dashboard"
          hidePersonal
          appearance={{
            elements: {
              organizationSwitcherTrigger: 'font-semibold',
            },
          }}
        />
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground ${
                  pathname === item.href
                    ? 'bg-muted/50 text-foreground'
                    : 'hover:bg-muted/30'
                }`}
              >
                <Icon className="size-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
