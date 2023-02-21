import PostsGrid from "../../components/PostsGrid"
import { allPostsQuery } from "../../queries/posts"
import { client } from "../../sanity/sanity.client"

async function Posts() {
  const posts: Post[] = await client.fetch(allPostsQuery);

  return (
    <div className="flex flex-col gap-3 px-4 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">All posts</h1>
      </div>
      <PostsGrid posts={posts} />
    </div>
  )
}

export default Posts