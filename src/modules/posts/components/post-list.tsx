import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Post, PostFilter } from "@/types/post";
import { IconUser, IconCalendar } from "@tabler/icons-react";

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow flex flex-col gap-4">
      {/* Thumbnail */}
      <div className="mb-4 overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${post.id}/300/200`}
          alt={post.title}
          className="w-full h-48 object-cover hover:transform hover:scale-105 transition-transform"
        />
      </div>

      {/* Post detail */}
      <div className="px-4 flex items-center justify-between">
        <Badge variant="secondary">{post.categories}</Badge>

        <div className="text-xs text-muted-foreground mt-1">
          {post.maxReadTime}
          <span className="ml-1">min read</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold px-4">{post.title}</h2>

      {/* Content */}
      <p className="text-sm text-muted-foreground px-4">
        {post.content.length > 100
          ? `${post.content.substring(0, 100)}...`
          : post.content}
      </p>

      {/* Author and date */}
      <div className="flex mt-auto items-center justify-between px-4">
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <IconUser className="size-4" />
          {post.author.name}
        </span>
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <IconCalendar className="size-4" />
          {new Date(post.createdAt).toLocaleString()}
        </span>
      </div>
    </Card>
  );
};

type PostListProps = {
  posts: Array<Post>;
  filter: PostFilter
};

const PostList = ({ posts, filter }: PostListProps) => {

  // Handle filtering and sorting
  const postsFiltered = posts.filter((post) => {
      return (post.title.toLowerCase().includes(filter.search.toLowerCase()) &&
      (filter.category === 'all' || post.categories.includes(filter.category)) &&
      (filter.author === 'all' || post.author.name === filter.author)
    );
  }).sort((a, b) => {
    if (filter.orderBy === 'Newest First') {
      return b.createdAt - a.createdAt;
    } else if (filter.orderBy === 'Oldest First') {
      return a.createdAt - b.createdAt;
    } else if (filter.orderBy === 'Title A-Z') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {postsFiltered?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
