import api from '@/shared/api/api';
import { ArticleResponse } from '@/features/article/types/article';

export const articleService = {
  getArticles: async (params: any = {}): Promise<ArticleResponse> => {
    return api.get('/articles', { params });
  },

  getArticleBySlug: async (slug: string): Promise<any> => {
    return api.get(`/articles/${slug}`);
  },

  searchArticles: async (q: string): Promise<ArticleResponse> => {
    return api.get('/articles/search', { params: { q } });
  },

  createArticle: async (data: any): Promise<any> => {
    return api.post('/articles', data);
  },
};
