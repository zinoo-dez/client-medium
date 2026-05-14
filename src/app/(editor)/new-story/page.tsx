'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { OutputData } from '@editorjs/editorjs';
import { Button } from '@/shared/ui/button';
import { articleService } from '@/features/article/api/articleService';
import Editor from '@/features/article/components/editor/Editor';

export default function NewStoryPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState<OutputData | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const router = useRouter();

  const handlePublish = async () => {
    if (!title.trim()) {
      toast.error('Please enter a title for your story.');
      return;
    }

    if (!content || content.blocks.length === 0) {
      toast.error('Please write some content before publishing.');
      return;
    }

    setIsPublishing(true);
    try {
      const response = await articleService.createArticle({
        title,
        content: JSON.stringify(content), // Stringify for storage
        status: 'PUBLISHED',
      });

      toast.success('Story published successfully!');
      router.push(`/articles/${response.data.slug}`);
    } catch (error: any) {
      toast.error(error.message || 'Failed to publish story.');
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Editor Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container h-[65px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold font-serif text-brand-primary">Draft</span>
            <span className="text-sm text-zinc-400">Saved</span>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              onClick={handlePublish} 
              disabled={isPublishing}
              className="rounded-full bg-brand-primary hover:bg-brand-hover text-white px-6"
            >
              {isPublishing ? 'Publishing...' : 'Publish'}
            </Button>
            <Button variant="ghost" className="rounded-full w-10 h-10 p-0">
              <span className="text-xl">...</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Editor Body */}
      <main className="article-container pt-12 pb-32">
        <textarea
          placeholder="Title"
          className="w-full text-4xl md:text-5xl font-serif font-bold border-none outline-none resize-none placeholder:text-zinc-200 mb-8"
          rows={1}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <Editor 
          onChange={(data) => setContent(data)} 
          placeholder="Tell your story..."
        />
      </main>
    </div>
  );
}
