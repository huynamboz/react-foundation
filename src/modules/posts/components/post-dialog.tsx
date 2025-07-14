import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";

type PostDialogProps = {
  authors: string[];
  categories: string[];
};
export function PostDialog({ authors, categories }: PostDialogProps) {
  const [formData, setFormData] = useState({
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

      <DialogContent className="sm:max-w-3xl">
        <form className="w-full">
          <DialogHeader>
            <DialogTitle>Create New Blog Post</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-2 mt-5 gap-4">
            {/* Right */}
            <div>
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  required
                  id="title"
                  name="title"
                  placeholder="Enter post title"
                />
              </div>

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
            </div>

            {/* Left */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Type your content here."
                className="h-[200px]"
              />
              <p className="text-muted-foreground text-xs">0 characters</p>
            </div>
          </div>
          <DialogFooter className="border-t mt-6 pt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
