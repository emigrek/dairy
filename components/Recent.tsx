import { ArrowRightIcon } from '@heroicons/react/24/solid';
import PostsGrid from './PostsGrid';

type Props = {
    posts: Post[]
}

function Recent({ posts }: Props) {
    return (
        <div className="px-4 py-5 border-t-[1px] border-base-200 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Recent posts</h1>
                <a href="/posts" className="inline-flex items-center gap-2 link-accent link-hover">
                    See all <ArrowRightIcon className="w-4 h-4" />
                </a>
            </div>
            <PostsGrid posts={posts} />
        </div>
    )
}

export default Recent;