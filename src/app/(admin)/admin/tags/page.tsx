'use client';

import { useState } from 'react';
import { Tag as TagIcon, Plus, Edit2, Trash2, Search } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

// Mock data
const MOCK_TAGS = [
  { id: '1', name: 'JavaScript', slug: 'javascript', articleCount: 1240 },
  { id: '2', name: 'React', slug: 'react', articleCount: 850 },
  { id: '3', name: 'Next.js', slug: 'nextjs', articleCount: 520 },
  { id: '4', name: 'Web Design', slug: 'web-design', articleCount: 310 },
  { id: '5', name: 'Productivity', slug: 'productivity', articleCount: 150 },
];

export default function AdminTagsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-xl fade-in">
      <div className="flex justify-between items-center m-b-xl">
        <div>
          <h1 className="text-xl text-bold">Tag Management</h1>
          <p className="text-sm text-secondary">Organize and manage platform content categories.</p>
        </div>
        <Button variant="default">
          <Plus size={18} className="m-r-xs" /> Create Tag
        </Button>
      </div>

      <div className="m-b-lg">
        <div className="relative" style={{ width: '100%', maxWidth: '400px' }}>
          <Input 
            placeholder="Search tags..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-lg">
        {MOCK_TAGS.map((tag) => (
          <div key={tag.id} className="card flex justify-between items-center">
            <div className="flex items-center gap-md">
              <div className="p-md bg-secondary rounded-full">
                <TagIcon size={20} className="text-brand" />
              </div>
              <div>
                <div className="text-bold">{tag.name}</div>
                <div className="text-xs text-muted">/{tag.slug} • {tag.articleCount} articles</div>
              </div>
            </div>
            <div className="flex gap-sm">
              <Button variant="ghost" size="sm">
                <Edit2 size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="text-error">
                <Trash2 size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
