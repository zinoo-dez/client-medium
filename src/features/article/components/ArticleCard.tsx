'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, Bookmark } from 'lucide-react';
import { Article } from '@/features/article/types/article';
import { Badge } from '@/shared/ui/badge';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group border-b border-zinc-100 py-8 first:pt-0 last:border-none"
    >
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-3 flex-1">
          {/* Author Info */}
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-zinc-200 overflow-hidden relative">
              {article.author.avatarUrl ? (
                <Image 
                  src={article.author.avatarUrl} 
                  alt={article.author.displayName} 
                  fill 
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-brand-primary/10 text-[10px] font-bold text-brand-primary">
                  {article.author.displayName[0]}
                </div>
              )}
            </div>
            <span className="text-xs font-bold text-zinc-900">{article.author.displayName}</span>
          </div>

          {/* Content */}
          <Link href={`/articles/${article.slug}`}>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900 group-hover:text-zinc-600 transition-colors line-clamp-2">
              {article.title}
            </h2>
            <p className="hidden md:block text-zinc-500 text-sm md:text-base line-clamp-2 mt-2 font-serif">
              {article.excerpt}
            </p>
          </Link>

          {/* Meta Info */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-4 text-xs text-zinc-500">
              <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              <span>·</span>
              <span>{article.readingTime} min read</span>
              <div className="hidden sm:flex gap-2">
                {article.tags.slice(0, 2).map(({ tag }) => (
                  <Badge key={tag.id} variant="secondary" className="rounded-full font-normal bg-zinc-100 hover:bg-zinc-200">
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-zinc-400">
              <button className="hover:text-brand-primary transition-colors flex items-center gap-1">
                <Heart size={18} />
                <span className="text-xs font-medium">{article.clapCount}</span>
              </button>
              <button className="hover:text-zinc-900 transition-colors flex items-center gap-1">
                <MessageCircle size={18} />
                <span className="text-xs font-medium">{article.commentCount}</span>
              </button>
              <button className="hover:text-zinc-900 transition-colors">
                <Bookmark size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Article Image */}
        {article.coverImageUrl && (
          <div className="hidden sm:block relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden flex-shrink-0">
            <Image 
              src={article.coverImageUrl} 
              alt={article.title} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
