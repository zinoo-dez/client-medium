export interface Author {
  id: string;
  username: string;
  displayName: string;
  avatarUrl?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImageUrl?: string;
  content: any;
  clapCount: number;
  commentCount: number;
  readingTime: number;
  publishedAt: string;
  author: Author;
  tags: { tag: Tag }[];
}

export interface ArticleResponse {
  success: boolean;
  data: Article[];
  meta: {
    page: number;
    limit: number;
    total: number;
  };
}
