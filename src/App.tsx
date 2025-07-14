import { useEffect, useState } from 'react'
import PostHeader from './modules/posts/components/post-header'
import PostFilterBox from './modules/posts/components/post-filter-box'
import PostList from './modules/posts/components/post-list'
import api from './services/api'
import type { Post, PostFilter } from './types/post'

function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [authors, setAuthors] = useState<string[]>([])
  const [categories, setCategories] = useState<string[]>([])

  const [filter, setFilter] = useState<PostFilter>({
    search: '',
    category: 'all',
    author: 'all',
    orderBy: 'Newest First',
  })

  const fetchPosts = async () => {
    const response = await api.get<Post[]>('/tracking-order')
    console.log(response)
    setPosts(response.data)
    setAuthors([...new Set(response.data.map((post: Post) => post.author.name))])
    setCategories([...new Set(response.data.map((post: Post) => post.categories))])
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <div className='container mx-auto px-4 py-8'>
        <PostHeader authors={authors} categories={categories}/>
        <PostFilterBox filter={filter} onChangeFilter={setFilter} 
          authors={authors} categories={categories}
        />
        <PostList posts={posts} filter={filter}/>
      </div>
    </>
  )
}

export default App
