import { LucideIcon } from 'lucide-react';

interface AdminStatsCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isUp: boolean;
  };
}

export const AdminStatsCard = ({ label, value, icon: Icon, trend }: AdminStatsCardProps) => {
  return (
    <div className="card fade-in">
      <div className="flex justify-between items-center m-b-md">
        <span className="text-xs text-muted text-bold uppercase">{label}</span>
        <Icon size={20} className="text-muted" />
      </div>
      <div className="text-xl text-bold">{value}</div>
      {trend && (
        <div className="flex items-center gap-sm m-t-sm">
          <span className={`text-xs ${trend.isUp ? 'text-brand' : 'text-error'}`}>
            {trend.isUp ? '↑' : '↓'} {trend.value}
          </span>
          <span className="text-xs text-muted">vs last month</span>
        </div>
      )}
    </div>
  );
};
