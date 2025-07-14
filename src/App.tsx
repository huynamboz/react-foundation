import { useEffect, useState } from 'react'
import PostHeader from './modules/posts/components/post-header'
import PostFilterBox from './modules/posts/components/post-filter-box'
import PostList from './modules/posts/components/post-list'
import api from './services/api'

function App() {
  // const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([])

  // Simulate fetching posts
  const fetchPosts = async () => {
    const response = await api.get('/tracking-order')
    console.log(response)
    setPosts(response.data)
  }

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <div className='container mx-auto px-4 py-8'>
        <PostHeader />
        <PostFilterBox />
        <PostList posts={posts}/>
      </div>
    </>
  )
}

export default App
