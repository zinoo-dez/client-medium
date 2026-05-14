import { Users, FileText, MessageCircle, Heart, TrendingUp } from 'lucide-react';
import { AdminStatsCard } from '@/features/admin/components/AdminStatsCard';
import { AdminRecentActivity } from '@/features/admin/components/AdminRecentActivity';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '12,482', icon: Users, trend: { value: '12%', isUp: true } },
    { label: 'Articles', value: '3,842', icon: FileText, trend: { value: '5%', isUp: true } },
    { label: 'Comments', value: '42,103', icon: MessageCircle, trend: { value: '2%', isUp: false } },
    { label: 'Claps', value: '156K', icon: Heart, trend: { value: '24%', isUp: true } },
  ];

  return (
    <div className="p-xl fade-in">
      <div className="m-b-xl">
        <h1 className="text-xl text-bold">Dashboard Overview</h1>
        <p className="text-sm text-secondary">Welcome back, Administrator. Here is what is happening today.</p>
      </div>

      <div className="grid grid-cols-4 gap-lg m-b-xl">
        {stats.map((stat) => (
          <AdminStatsCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-xl">
        <div className="col-span-2" style={{ gridColumn: 'span 2' }}>
          <div className="card h-full">
            <div className="flex justify-between items-center m-b-xl">
              <h3 className="text-md text-bold">Platform Growth</h3>
              <div className="flex gap-sm">
                <button className="btn btn-ghost btn-sm">7d</button>
                <button className="btn btn-primary btn-sm">30d</button>
                <button className="btn btn-ghost btn-sm">90d</button>
              </div>
            </div>
            {/* Chart Placeholder */}
            <div className="flex flex-column items-center justify-center p-xl bg-secondary rounded-lg" style={{ height: '300px', background: 'var(--color-bg-secondary)', borderRadius: '8px' }}>
              <TrendingUp size={48} className="text-muted m-b-md" />
              <p className="text-muted text-sm">Growth chart will be rendered here.</p>
            </div>
          </div>
        </div>
        <AdminRecentActivity />
      </div>
    </div>
  );
}
