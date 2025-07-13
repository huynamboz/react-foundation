import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";

function PostHeader() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="font-bold text-3xl">Blog Posts</h1>
        <p className=" text-muted-foreground">Discover insights, tutorials, and updates from our team</p>
      </div>

      <Button className="edit-button">
        <IconPlus className="h-4 w-4" />
        Add new post
      </Button>
    </header>
  );
}

export default PostHeader;