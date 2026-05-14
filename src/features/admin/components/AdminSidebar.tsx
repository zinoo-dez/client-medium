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
  Settings,
  LogOut
} from 'lucide-react';
import { useAuthStore } from '@/features/auth/store/useAuthStore';

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
  const { logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <aside className="admin-sidebar flex flex-col justify-between">
      <div>
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
      </div>

      <div className="p-4 border-t border-zinc-800">
        <button 
          onClick={handleLogout}
          className="admin-nav-item w-full flex items-center justify-start text-red-400 hover:text-red-300 hover:bg-zinc-800 transition-colors"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
