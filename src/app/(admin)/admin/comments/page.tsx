'use client';

import { useState } from 'react';
import { MessageCircle, Trash2, ShieldAlert, Eye, Search } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Badge } from '@/shared/ui/badge';

// Mock data
const MOCK_COMMENTS = [
  { id: '1', content: 'Great article, thanks for sharing!', author: 'johndoe', article: 'Getting Started with Next.js', reports: 0, createdAt: '2024-05-12' },
  { id: '2', content: 'I totally disagree with this approach...', author: 'critic_user', article: 'Vanilla CSS vs Tailwind', reports: 2, createdAt: '2024-05-13' },
  { id: '3', content: 'Check out my profile for free crypto!!!', author: 'spam_bot', article: 'Web3 Future', reports: 15, createdAt: '2024-05-14' },
];

export default function AdminCommentsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-xl fade-in">
      <div className="flex justify-between items-center m-b-xl">
        <div>
          <h1 className="text-xl text-bold">Comment Moderation</h1>
          <p className="text-sm text-secondary">Monitor and moderate community discussions.</p>
        </div>
        <div style={{ width: '300px' }}>
          <Input 
            placeholder="Search comments..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Comment</th>
              <th>Author</th>
              <th>Article</th>
              <th>Reports</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_COMMENTS.map((comment) => (
              <tr key={comment.id}>
                <td style={{ maxWidth: '300px' }}>
                  <p className="text-sm line-clamp-2">{comment.content}</p>
                </td>
                <td>@{comment.author}</td>
                <td>
                  <span className="text-xs text-secondary">{comment.article}</span>
                </td>
                <td>
                  <Badge variant={comment.reports > 10 ? 'destructive' : comment.reports > 0 ? 'secondary' : 'outline'}>
                    {comment.reports} reports
                  </Badge>
                </td>
                <td className="text-secondary text-xs">{comment.createdAt}</td>
                <td>
                  <div className="flex gap-sm">
                    <Button variant="ghost" size="sm">
                      <Eye size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-error">
                      <Trash2 size={16} />
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
