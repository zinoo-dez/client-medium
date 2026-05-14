'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from 'lucide-react';
import { articleService } from '@/features/article/api/articleService';
import { Button } from '@/shared/ui/button';
import { Skeleton } from '@/shared/ui/skeleton';
import { Badge } from '@/shared/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/shared/ui/avatar';

export default function ArticleDetailPage() {
  const { slug } = useParams();
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['article', slug],
    queryFn: () => articleService.getArticleBySlug(slug as string),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="article-container py-20 space-y-8">
        <Skeleton className="h-12 w-3/4" />
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
        <Skeleton className="h-[400px] w-full rounded-xl" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    );
  }

  if (error || !data?.success) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold">Article not found</h2>
        <Button asChild className="mt-4 rounded-full">
          <a href="/">Back to Home</a>
        </Button>
      </div>
    );
  }

  const article = data.data;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pb-20"
    >
      <article className="article-container pt-12">
        {/* Title & Author */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-between py-6 border-y">
            <div className="flex items-center gap-4">
              <Avatar className="h-11 w-11">
                <AvatarImage src={article.author.avatarUrl} />
                <AvatarFallback>{article.author.displayName[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-zinc-900">{article.author.displayName}</span>
                  <span className="text-brand-primary text-xs font-bold hover:underline cursor-pointer">Follow</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <span>{article.readingTime} min read</span>
                  <span>·</span>
                  <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-zinc-500">
              <Share2 size={20} className="hover:text-zinc-900 cursor-pointer" />
              <Bookmark size={20} className="hover:text-zinc-900 cursor-pointer" />
              <MoreHorizontal size={20} className="hover:text-zinc-900 cursor-pointer" />
            </div>
          </div>
        </header>

        {/* Feature Image */}
        {article.coverImageUrl && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-12">
            <Image 
              src={article.coverImageUrl} 
              alt={article.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-zinc prose-lg max-w-none font-serif text-zinc-800 leading-relaxed mb-12">
          {/* Rendering logic for Editor.js blocks would go here */}
          {/* For now, just a placeholder or mapping */}
          <p>This is a placeholder for the article content rendered from Editor.js JSON data.</p>
          <p>The content will be styled with beautiful typography to ensure the best reading experience.</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {article.tags.map(({ tag }: any) => (
            <Badge key={tag.id} variant="secondary" className="px-4 py-2 rounded-full font-normal text-sm">
              {tag.name}
            </Badge>
          ))}
        </div>

        {/* Interaction Bar */}
        <div className="flex items-center justify-between py-4 border-y sticky bottom-8 bg-white/80 backdrop-blur-md px-6 rounded-full shadow-lg border-zinc-100 z-10">
          <div className="flex items-center gap-6 text-zinc-500">
            <button className="flex items-center gap-2 hover:text-brand-primary transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-brand-primary/10">
                <Heart size={24} />
              </div>
              <span className="text-sm font-bold">{article.clapCount}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-zinc-900 transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-zinc-100">
                <MessageCircle size={24} />
              </div>
              <span className="text-sm font-bold">{article.commentCount}</span>
            </button>
          </div>
          
          <div className="flex items-center gap-4 text-zinc-500">
             <Bookmark size={24} className="hover:text-zinc-900 cursor-pointer" />
             <Share2 size={24} className="hover:text-zinc-900 cursor-pointer" />
          </div>
        </div>
      </article>

      {/* Author Bottom Section */}
      <section className="bg-zinc-50 border-t mt-20 py-16">
        <div className="article-container">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Avatar className="h-24 w-24">
              <AvatarImage src={article.author.avatarUrl} />
              <AvatarFallback>{article.author.displayName[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold">Written by {article.author.displayName}</h3>
              <p className="text-zinc-600 leading-relaxed">
                A passionate writer and developer who loves sharing insights about technology, 
                design, and the future of human-AI collaboration.
              </p>
              <div className="flex items-center gap-4">
                <Button className="rounded-full bg-brand-primary hover:bg-brand-hover">Follow</Button>
                <Button variant="outline" className="rounded-full">Email me</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
