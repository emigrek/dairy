import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../sanity/urlFor";
import CategoryBadge from "./CategoryBadge";

type Props = {
    post: Post;
}

function Post({ post }: Props) {
    return (
        <Link href={`/post/${post.slug.current}`} className="transition card bg-base-200 drop-shadow-sm hover:drop-shadow-lg image-full hover:scale-105">
            <figure className="relative">
                <Image alt={post.title} src={urlFor(post.mainImage).url()} fill />
            </figure>
            <div className="card-body">
                <h3 className="card-title">
                    {post.title}
                </h3>
                <div className="justify-end card-actions">
                    {post.categories.map((category) => <CategoryBadge key={category._id} category={category} />)}
                </div>
            </div>
        </Link>
    )
}

export default Post