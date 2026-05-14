import { Avatar, AvatarImage, AvatarFallback } from '@/shared/ui/avatar';

interface ActivityItem {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  action: string;
  target: string;
  time: string;
}

const MOCK_ACTIVITIES: ActivityItem[] = [
  { id: '1', user: { name: 'John Doe' }, action: 'published', target: 'Next.js 14 Guide', time: '2 mins ago' },
  { id: '2', user: { name: 'Jane Smith' }, action: 'reported', target: 'Spam comment', time: '15 mins ago' },
  { id: '3', user: { name: 'Alex Johnson' }, action: 'joined', target: 'the platform', time: '1 hour ago' },
  { id: '4', user: { name: 'Moderator' }, action: 'banned', target: 'user_troll', time: '3 hours ago' },
];

export const AdminRecentActivity = () => {
  return (
    <div className="card h-full">
      <h3 className="text-md text-bold m-b-lg">Recent Activity</h3>
      <div className="flex flex-column gap-md">
        {MOCK_ACTIVITIES.map((activity) => (
          <div key={activity.id} className="flex items-center gap-md p-b-md border-b" style={{ borderBottom: '1px solid var(--color-border)' }}>
            <Avatar className="h-8 w-8">
              <AvatarImage src={activity.user.avatar} />
              <AvatarFallback>{activity.user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm">
                <span className="text-bold">{activity.user.name}</span>{' '}
                <span className="text-secondary">{activity.action}</span>{' '}
                <span className="text-bold">{activity.target}</span>
              </p>
              <p className="text-xs text-muted">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
