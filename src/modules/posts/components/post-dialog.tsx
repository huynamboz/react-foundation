import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
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
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const postSchema = yup.object({
  title: yup.string().required("Title is required"),
  excerpt: yup.string().required("Excerpt is required"),
  author: yup.string().required("Author is required"),
  category: yup.string().required("Category is required"),
  tag: yup.string(),
  thumbnailURL: yup.string().url("Must be a valid URL"),
  readTime: yup.string().required("Read time is required"),
  content: yup.string().required("Content is required"),
});

export type PostForm = yup.InferType<typeof postSchema>;

type PostDialogProps = {
  authors: string[];
  categories: string[];
  onSubmit: (data: PostForm) => void;
};

export function PostDialog({ authors, categories, onSubmit }: PostDialogProps) {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PostForm>({
    resolver: yupResolver(postSchema),
  });

  const handleFormSubmit= (data) => {
    onSubmit(data);
    setOpen(false); // 👈 Đóng Dialog khi submit thành công
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="edit-button">
          <IconPlus className="h-4 w-4" />
          Add new post
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <form className="w-full" onSubmit={handleSubmit(handleFormSubmit)}>
          <DialogHeader>
            <DialogTitle>Create New Blog Post</DialogTitle>
          </DialogHeader>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-5 gap-6 ">
            <div>
              <div className="grid gap-2">
                <Label>Title *</Label>
                <Input placeholder="Enter post title" {...register("title")} />
                {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
              </div>

              <div className="grid gap-2 mt-4">
                <Label>Excerpt *</Label>
                <Textarea placeholder="Type your description here." {...register("excerpt")} />
                {errors.excerpt && <p className="text-red-500 text-xs">{errors.excerpt.message}</p>}
              </div>

              <div className="grid grid-cols-2 mt-4 gap-4">
                <div className="grid gap-2">
                  <Label>Author *</Label>
                  <Controller
                    control={control}
                    name="author"
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
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
                    )}
                  />
                  {errors.author && <p className="text-red-500 text-xs">{errors.author.message}</p>}
                </div>

                <div className="grid gap-2">
                  <Label>Category *</Label>
                  <Controller
                    control={control}
                    name="category"
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
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
                    )}
                  />
                  {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
                </div>
              </div>

              <div className="grid gap-2 mt-4">
                <Label>Tag</Label>
                <div className="flex items-center gap-2">
                  <Input placeholder="Add a tag" {...register("tag")} />
                  <Button type="button" variant="outline">Add</Button>
                </div>
              </div>

              <div className="grid gap-2 mt-4">
                <Label>Feature image URL</Label>
                <div className="flex items-center gap-2">
                  <Input placeholder="https://example.com/image.jpg" {...register("thumbnailURL")} />
                  <Button type="button" variant="outline">
                    <IconPhoto className="h-4 w-4" />
                  </Button>
                </div>
                {errors.thumbnailURL && <p className="text-red-500 text-xs">{errors.thumbnailURL.message}</p>}
              </div>

              <div className="grid gap-2 mt-4">
                <Label>Estimate read time *</Label>
                <Input placeholder="5 min read" {...register("readTime")} />
                {errors.readTime && <p className="text-red-500 text-xs">{errors.readTime.message}</p>}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Content *</Label>
              <Textarea className="h-[400px]" placeholder="Type your content here." {...register("content")} />
              {errors.content && <p className="text-red-500 text-xs">{errors.content.message}</p>}
            </div>
          </div>

          <DialogFooter className="border-t mt-6 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Publish post</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
