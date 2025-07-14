export interface Post {
  createdAt: number;
  thumbnailURL: string;
  title: string;
  categories: string;
  author: Author;
  lastReadAt: number;
  content: string;
  id: string;
  maxReadTime: number;
}

interface Author {
  name: string;
}

export interface PostFilter {
  search: string;
  category: string;
  author: string;
  orderBy: 'Newest First' | 'Oldest First' | 'Title A-Z';
}