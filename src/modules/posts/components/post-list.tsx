import { Card } from "@/components/ui/card";

type PostItemProps = {
  post: { id: string; title: string; content: string };
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
      <div>
        
      </div>
    </Card>
  );
};

type PostListProps = {
  posts: Array<{ id: string; title: string; content: string }>;
};
const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
