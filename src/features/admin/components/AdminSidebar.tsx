'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  MessageCircle, 
  Flag, 
  Tag, 
  Settings 
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Users', href: '/admin/users', icon: Users },
  { label: 'Articles', href: '/admin/articles', icon: FileText },
  { label: 'Comments', href: '/admin/comments', icon: MessageCircle },
  { label: 'Reports', href: '/admin/reports', icon: Flag },
  { label: 'Tags', href: '/admin/tags', icon: Tag },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="admin-sidebar">
      <Link href="/" className="admin-sidebar-logo">
        Admin Panel
      </Link>
      
      <nav className="admin-nav">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link 
              key={item.label} 
              href={item.href} 
              className={`admin-nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
