import { PostDialog, type PostForm } from "./post-dialog";

type PostHeaderProps = {
  authors: string[];
  categories: string[];
  onSubmit: (data: PostForm) => void;
};

function PostHeader( { authors, categories, onSubmit }: PostHeaderProps) {

  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="font-bold text-3xl">Blog Posts</h1>
        <p className=" text-muted-foreground">Discover insights, tutorials, and updates from our team</p>
      </div>

      <PostDialog 
        onSubmit={onSubmit}
        authors={authors}
        categories={categories}
      />
    </header>
  );
}

export default PostHeader;