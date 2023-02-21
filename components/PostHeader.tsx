import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity/urlFor'
import CategoryBadge from './CategoryBadge'
const readingTime = require('reading-time');

type Props = {
    post: Post
}

function PostHeader({ post }: Props) {
    const raw = post.body.map((block) => block.children.map((child) => child.text)).join(' ');
    const { text } = readingTime(raw);

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
                } · {text}</p>
            </div>
            <div className='justify-end flex-grow hidden gap-1 sm:flex'>
                {post.categories.map((category) => <CategoryBadge link key={category._id} category={category} />)}
            </div>
        </div>
    )
}

export default PostHeader