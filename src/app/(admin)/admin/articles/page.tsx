'use client';

import { useState } from 'react';
import { Search, Eye, Trash2, ShieldAlert, FileText } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Badge } from '@/shared/ui/badge';

// Mock data
const MOCK_ARTICLES = [
  { id: '1', title: 'Getting Started with Next.js 14', author: 'johndoe', status: 'PUBLISHED', claps: 1240, createdAt: '2024-05-01' },
  { id: '2', title: 'Why Vanilla CSS is still relevant', author: 'janedoe', status: 'PUBLISHED', claps: 850, createdAt: '2024-05-05' },
  { id: '3', title: 'My journey into web development', author: 'newbie_dev', status: 'DRAFT', claps: 0, createdAt: '2024-05-10' },
  { id: '4', title: 'Offensive Content Heading', author: 'troll_user', status: 'REMOVED', claps: 12, createdAt: '2024-05-11' },
];

export default function AdminArticlesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-xl fade-in">
      <div className="flex justify-between items-center m-b-xl">
        <div>
          <h1 className="text-xl text-bold">Content Moderation</h1>
          <p className="text-sm text-secondary">Review and manage articles across the platform.</p>
        </div>
        <div className="flex gap-md">
          <Input 
            placeholder="Search articles..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
            style={{ width: '300px' }}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Status</th>
              <th>Claps</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_ARTICLES.map((article) => (
              <tr key={article.id}>
                <td>
                  <div className="flex flex-column">
                    <span className="text-bold">{article.title}</span>
                    <span className="text-xs text-muted">ID: {article.id}</span>
                  </div>
                </td>
                <td>@{article.author}</td>
                <td>
                  <Badge variant={
                    article.status === 'PUBLISHED' ? 'default' : 
                    article.status === 'REMOVED' ? 'destructive' : 'outline'
                  }>
                    {article.status}
                  </Badge>
                </td>
                <td>{article.claps.toLocaleString()}</td>
                <td className="text-secondary">{article.createdAt}</td>
                <td>
                  <div className="flex gap-sm">
                    <Button variant="ghost" size="sm" title="View Article">
                      <Eye size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" title="Flag/Warn">
                      <ShieldAlert size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" title="Remove Article">
                      <Trash2 size={16} className="text-error" />
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
