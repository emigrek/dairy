import PostsGrid from "../../../components/PostsGrid"
import { categoryQuery } from "../../../queries/categories"
import { categoryPostsQuery } from "../../../queries/posts"
import { client } from "../../../sanity/sanity.client"

type Props = {
    params: {
        slug: string
    }
}

async function Category({ params: { slug } }: Props) {
    const category = await client.fetch(categoryQuery(slug));

    if (!category) {
        return <p className="py-8 text-center text-opacity-50 text-base-content">No category found.</p>
    }

    const posts = await client.fetch(categoryPostsQuery(slug));

    return (
        <div className="flex flex-col gap-3 px-4 py-5">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">All posts with category "{category.title}".</h1>
            </div>
            <PostsGrid posts={posts} />
        </div>
    )
}

export default Category