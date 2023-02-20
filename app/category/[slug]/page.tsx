import PostsGrid from "../../../components/PostsGrid"
import { allCategoriesSlugsQuery, categoryQuery } from "../../../queries/categories"
import { categoryPostsQuery } from "../../../queries/posts"
import { client } from "../../../sanity/sanity.client"

type Props = {
    params: {
        slug: string
    }
}

export const revalidate = 60;

export async function generateStaticParams() {
    const slugs: Category[] = await client.fetch(allCategoriesSlugsQuery);
    const routes = slugs.map((slug) => slug.slug.current);
    return routes.map(slug => ({
        slug: slug
    }))
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