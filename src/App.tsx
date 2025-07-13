import { useState } from 'react'
import PostHeader from './modules/posts/components/post-header'
import PostFilterBox from './modules/posts/components/post-filter-box'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto px-4 py-8'>
        <PostHeader />
        <PostFilterBox />

      </div>
    </>
  )
}

export default App
