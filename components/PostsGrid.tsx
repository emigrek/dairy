import PostCard from "./PostCard"

type Props = {
    posts: Post[]
}

function PostsGrid({ posts }: Props) {
    if(!posts.length) return <p className="py-8 text-center text-opacity-50 text-base-content">No posts yet.</p>

    return (
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
    )
}

export default PostsGrid