import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { PostFilter } from "@/types/post";
import { IconSearch } from "@tabler/icons-react";

type PostFilterBoxProps = {
  filter: PostFilter
  onChangeFilter: (filter: PostFilter) => void;
  authors: string[];
  categories: string[];
};

const PostFilterBox = ({filter, onChangeFilter, authors, categories}:PostFilterBoxProps) => {
  return (
    <div className="flex w-full flex-col items-center lg:flex-row gap-4 mb-8 p-4 bg-muted/50 rounded-lg">
      <div className="flex-1 w-full">
        <div className="relative">
          <IconSearch className="absolute size-5 left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search posts..." className="bg-white pl-10"
          value={filter.search}
          onChange={(e) => onChangeFilter({...filter, search: e.target.value})}
          />
        </div>
      </div>
      <div className="flex items-center gap-4 flex-1 w-full">
        <Select value={filter.category} onValueChange={(value) => onChangeFilter({...filter, category: value})}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="All category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value="all">
                All categories
              </SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={filter.author} onValueChange={(value) => onChangeFilter({...filter, author: value})}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="All authors" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Author</SelectLabel>
              <SelectItem value="all">
                All authors
              </SelectItem>
              {authors.map((author) => (
                <SelectItem key={author} value={author}>
                  {author}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={filter.orderBy} onValueChange={(value) => onChangeFilter({...filter, orderBy: value as 'Newest First' | 'Oldest First' | 'Title A-Z'})}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Order by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Order By</SelectLabel>
              <SelectItem value="Newest First">Newest First</SelectItem>
              <SelectItem value="Oldest First">Oldest First</SelectItem>
              <SelectItem value="Title A-Z">Title A-Z</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PostFilterBox;
