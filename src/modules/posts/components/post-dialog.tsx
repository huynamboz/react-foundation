import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { IconPhoto, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

type PostDialogProps = {
  authors: string[];
  categories: string[];
};

export function PostDialog({ authors, categories }: PostDialogProps) {
  const [formData] = useState({
    title: "",
    excerpt: "",
    category: "",
    author: "",
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="edit-button">
          <IconPlus className="h-4 w-4" />
          Add new post
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <form className="w-full">
          <DialogHeader>
            <DialogTitle>Create New Blog Post</DialogTitle>
          </DialogHeader>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-5 gap-6 ">
            {/* Right */}
            <div>
              {/* Title */}
              <div className="grid gap-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  required
                  id="title"
                  name="title"
                  placeholder="Enter post title"
                />
              </div>

              {/* Excerpt */}
              <div className="grid gap-2 mt-4">
                <Label htmlFor="username-1">Excerpt *</Label>
                <Textarea placeholder="Type your description here." />
                <p className="text-muted-foreground text-xs">
                  0/200 characters
                </p>
              </div>

              <div className="grid grid-cols-2 mt-4 gap-4">
                {/* Author */}
                <div className="grid gap-2">
                  <Label htmlFor="category">Author *</Label>
                  <Select value={formData.author}>
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="All authors" />
                    </SelectTrigger>
                    <SelectContent>
                      {authors.map((author) => (
                        <SelectItem key={author} value={author}>
                          {author}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Category */}
                <div className="grid gap-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category}>
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Tags and thumbnail */}
              <div className="grid gap-2 mt-4">
                <Label htmlFor="tag">Tag</Label>
                <div className="flex items-center gap-2">
                  <Input
                    required
                    id="tag"
                    name="tag"
                    placeholder="Add a tag"
                  />
                  <Button type="button" variant="outline">
                    Add
                  </Button>
                </div>
              </div>

              <div className="grid gap-2 mt-4">
                <Label htmlFor="thumbnailURL">
                  Feature image URL
                </Label>
                <div className="flex items-center gap-2">
                  <Input
                    required
                    id="thumbnailURL"
                    name="thumbnailURL"
                    placeholder="https://example.com/image.jpg"
                  />
                  <Button type="button" variant="outline">
                    <IconPhoto className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Read time */}
              <div className="grid gap-2 mt-4">
                <Label htmlFor="readTime">
                  Estimate read time *
                </Label>
                <Input
                  required
                  id="readTime"
                  name="readTime"
                  placeholder="5 min read"
                />
              </div>
            </div>

            {/* Left */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="content">Content *</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Type your content here."
                className="h-[400px]"
              />
              <p className="text-muted-foreground text-xs">0 characters</p>
            </div>
          </div>

          {/* Footer */}
          <DialogFooter className="border-t mt-6 pt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Publish post</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
