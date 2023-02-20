import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity/urlFor'
import CategoryBadge from './CategoryBadge'

type Props = {
    post: Post
}

function PostHeader({ post }: Props) {
    return (
        <div className='flex gap-3 mt-2'>
            <div className="relative w-12 h-12">
                <Image src={urlFor(post.author.image).url()} alt={post.author.name} fill />
            </div>
            <div className="flex flex-col justify-center">
                <h1 className="text-xl font-semibold">{post.author.name}</h1>
                <p className="text-opacity-50 text-base-content">{
                    new Date(post._createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })
                }</p>
            </div>
            <div className='flex justify-end flex-grow gap-1'>
                {post.categories.map((category) => <CategoryBadge key={category._id} category={category} />)}
            </div>
        </div>
    )
}

export default PostHeader