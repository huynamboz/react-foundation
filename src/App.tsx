import { useEffect, useState } from "react";
import PostHeader from "./modules/posts/components/post-header";
import PostFilterBox from "./modules/posts/components/post-filter-box";
import PostList from "./modules/posts/components/post-list";
import api from "./services/api";
import type { Post, PostFilter } from "./types/post";
import type { PostForm } from "./modules/posts/components/post-dialog";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const [filter, setFilter] = useState<PostFilter>({
    search: "",
    category: "all",
    author: "all",
    orderBy: "Newest First",
  });

  const fetchPosts = async () => {
    const response = await api.get<Post[]>("/tracking-order");
    setPosts(response.data);
    setAuthors([
      ...new Set(response.data.map((post: Post) => post.author.name)),
    ]);
    setCategories([
      ...new Set(response.data.map((post: Post) => post.categories)),
    ]);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle filtering and sorting
  const postsFiltered = posts
    .filter((post) => {
      return (
        post.title.toLowerCase().includes(filter.search.toLowerCase()) &&
        (filter.category === "all" ||
          post.categories.includes(filter.category)) &&
        (filter.author === "all" || post.author.name === filter.author)
      );
    })
    .sort((a, b) => {
      if (filter.orderBy === "Newest First") {
        return b.createdAt - a.createdAt;
      } else if (filter.orderBy === "Oldest First") {
        return a.createdAt - b.createdAt;
      } else if (filter.orderBy === "Title A-Z") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  // Handle form submission
  const handlePostSubmit = async (data: PostForm) => {
    try {
      const response = await api.post<Post>("/tracking-order", data);
      setPosts((prevPosts) => [...prevPosts, response.data]);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <PostHeader authors={authors} categories={categories} onSubmit={handlePostSubmit} />
        <PostFilterBox
          filter={filter}
          onChangeFilter={setFilter}
          authors={authors}
          categories={categories}
        />
        <p className="text-sm text-muted-foreground mb-6">
          Showing {postsFiltered.length} of {posts.length} posts
        </p>
        <PostList posts={postsFiltered} />
      </div>
    </>
  );
}

export default App;
