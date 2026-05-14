'use client';

import { useState } from 'react';
import { Search, MoreVertical, Ban, ShieldCheck, User as UserIcon } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Avatar, AvatarFallback } from '@/shared/ui/avatar';
import { Badge } from '@/shared/ui/badge';

// Mock data
const MOCK_USERS = [
  { id: '1', username: 'johndoe', email: 'john@example.com', role: 'ADMIN', status: 'ACTIVE', createdAt: '2024-01-15' },
  { id: '2', username: 'janedoe', email: 'jane@example.com', role: 'USER', status: 'ACTIVE', createdAt: '2024-02-10' },
  { id: '3', username: 'spammer123', email: 'spam@bad.com', role: 'USER', status: 'BANNED', createdAt: '2024-03-05' },
  { id: '4', username: 'alexsmith', email: 'alex@work.com', role: 'USER', status: 'ACTIVE', createdAt: '2024-04-12' },
];

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-xl fade-in">
      <div className="flex justify-between items-center m-b-xl">
        <div>
          <h1 className="text-xl text-bold">User Management</h1>
          <p className="text-sm text-secondary">Manage platform users, roles, and permissions.</p>
        </div>
        <div className="flex gap-md">
          <div className="relative" style={{ width: '300px' }}>
            <Input 
              placeholder="Search users..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="default">Add Admin</Button>
        </div>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_USERS.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="flex items-center gap-md">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span className="text-bold">{user.username}</span>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  <Badge variant={user.role === 'ADMIN' ? 'default' : 'outline'}>
                    {user.role}
                  </Badge>
                </td>
                <td>
                  <Badge variant={user.status === 'ACTIVE' ? 'default' : 'destructive'}>
                    {user.status}
                  </Badge>
                </td>
                <td className="text-secondary">{user.createdAt}</td>
                <td>
                  <div className="flex gap-sm">
                    <Button variant="ghost" size="sm" title="Change Role">
                      <ShieldCheck size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" title={user.status === 'BANNED' ? 'Unban' : 'Ban'}>
                      <Ban size={16} className={user.status === 'BANNED' ? 'text-brand' : 'text-error'} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical size={16} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
