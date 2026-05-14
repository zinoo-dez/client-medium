'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/shared/ui/button';
import { TrendingUp, BookOpen, PenTool, Users } from 'lucide-react';
import { ArticleFeed } from '@/features/article/components/ArticleFeed';

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container h-[var(--header-height)] flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight font-serif text-brand-primary">
            Medium Clone
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/our-story" className="text-sm font-medium hover:text-brand-primary transition-colors">Our Story</Link>
            <Link href="/membership" className="text-sm font-medium hover:text-brand-primary transition-colors">Membership</Link>
            <Link href="/write" className="text-sm font-medium hover:text-brand-primary transition-colors">Write</Link>
            <Link href="/auth/login" className="text-sm font-medium hover:text-brand-primary transition-colors">Sign In</Link>
            <Button asChild className="rounded-full bg-brand-primary hover:bg-brand-hover">
              <Link href="/auth/register">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#FFC017] border-b border-black py-20 lg:py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col gap-8"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-7xl md:text-8xl lg:text-[106px] font-serif font-bold leading-[0.95]"
            >
              Stay curious.
            </motion.h1>
            <motion.h3 
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium max-w-[440px] leading-relaxed"
            >
              Discover stories, thinking, and expertise from writers on any topic.
            </motion.h3>
            <motion.div variants={itemVariants}>
              <Button size="lg" className="rounded-full bg-black text-white hover:bg-zinc-800 px-10 py-6 text-lg transition-all">
                Start reading
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <BookOpen size={300} strokeWidth={0.5} className="text-black/10" />
          </motion.div>
        </div>
      </section>

      {/* Main Content: Feed + Sidebar */}
      <main className="container py-12 md:py-20">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16">
          {/* Article List */}
          <section>
            <div className="flex items-center gap-3 mb-10 pb-4 border-b">
              <TrendingUp size={18} className="text-zinc-900" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900">
                LATEST STORIES
              </h2>
            </div>
            <ArticleFeed />
          </section>

          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col gap-12 sticky top-[calc(var(--header-height)+40px)] h-fit">
            {/* Tags Section */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Discover more of what matters to you</h3>
              <div className="flex flex-wrap gap-2">
                {['Programming', 'Data Science', 'Self Improvement', 'Writing', 'Relationships', 'Machine Learning', 'Productivity', 'Politics'].map((tag) => (
                  <Button key={tag} variant="outline" size="sm" className="rounded-full bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900">
                    {tag}
                  </Button>
                ))}
              </div>
              <Link href="/tags" className="inline-block mt-6 text-sm text-brand-primary font-medium hover:text-brand-hover">
                See more topics
              </Link>
            </div>

            {/* Popular Posts */}
            <div className="pt-8 border-t">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Popular on Medium Clone</h3>
              <div className="flex flex-col gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-2xl font-bold text-zinc-200">0{i}</span>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-zinc-200" />
                        <span className="text-[10px] font-bold">Author Name</span>
                      </div>
                      <h4 className="text-sm font-bold leading-tight line-clamp-2 hover:underline cursor-pointer">
                        The hidden costs of being a software engineer in 2024
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <Link href="#" className="hover:text-black transition-colors">Help</Link>
            <Link href="#" className="hover:text-black transition-colors">About</Link>
            <Link href="#" className="hover:text-black transition-colors">Terms</Link>
            <Link href="#" className="hover:text-black transition-colors">Privacy</Link>
          </div>
          <span className="text-sm text-zinc-500">© 2024 Medium Clone</span>
        </div>
      </footer>
    </div>
  );
}
