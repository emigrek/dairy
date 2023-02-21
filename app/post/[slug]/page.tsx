import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import CategoryBadge from '../../../components/CategoryBadge'
import PostHeader from '../../../components/PostHeader'
import RichTextComponents from '../../../components/RichTextComponents'
import { allPostsSlugsQuery, postQuery } from '../../../queries/posts'
import { client } from '../../../sanity/sanity.client'
import { urlFor } from '../../../sanity/urlFor'

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: Post[] = await client.fetch(allPostsSlugsQuery);
  const routes = slugs.map((slug) => slug.slug.current);
  return routes.map(slug => ({
    slug: slug
  }))
}

async function Post({ params: { slug } }: Props) {
  const post = await client.fetch(postQuery(slug));

  if (!post) return (<p className="py-8 text-center text-opacity-50 text-base-content">No post found.</p>)

  return (
    <div className="flex flex-col gap-3 px-4 py-5">
      <PostHeader post={post} />
      <h1 className="py-4 text-2xl font-bold">{post.title}</h1>
      <div className="relative mt-4 mb-1 sm:mb-6 md:scale-105 aspect-video h-1/2 drop-shadow-lg">
        <Image src={urlFor(post.mainImage).url()} alt={post.title} fill />
      </div>
      <div className='flex justify-center flex-grow gap-1 sm:hidden'>
        {post.categories.map((category: Category) => <CategoryBadge key={category._id} category={category} />)}
      </div>
      <div>
        <PortableText value={post.body} components={RichTextComponents} />
      </div>
    </div>
  )
}

export default Post