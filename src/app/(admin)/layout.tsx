import { AdminRoute } from '@/features/auth/components/RouteGuard';
import { AdminSidebar } from '@/features/admin/components/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminRoute>
      <div className="admin-layout">
        <AdminSidebar />
        
        <main className="admin-main">
          <header className="admin-header">
            <span className="text-sm text-bold text-secondary">System Online</span>
          </header>
          {children}
        </main>
      </div>
    </AdminRoute>
  );
}
