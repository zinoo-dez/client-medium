'use client';

import { useQuery } from '@tanstack/react-query';
import { articleService } from '@/features/article/api/articleService';
import { ArticleCard } from '@/features/article/components/ArticleCard';
import { Skeleton } from '@/shared/ui/skeleton';

export function ArticleFeed() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['articles'],
    queryFn: () => articleService.getArticles(),
  });

  if (isLoading) {
    return (
      <div className="flex flex-col gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-4 py-8 border-b">
            <div className="flex items-center gap-2">
              <Skeleton className="w-6 h-6 rounded-full" />
              <Skeleton className="w-24 h-4" />
            </div>
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-3/4 h-4" />
            <div className="flex justify-between mt-4">
              <Skeleton className="w-32 h-4" />
              <Skeleton className="w-24 h-4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-zinc-500">
        <p>Failed to load articles. Please try again later.</p>
      </div>
    );
  }

  const articles = data?.data || [];

  if (articles.length === 0) {
    return (
      <div className="py-20 text-center text-zinc-500">
        <p>No articles found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
