import Image from "next/image";
import { urlFor } from "../sanity/urlFor";
import CategoryBadge from "./CategoryBadge";
import ClientLink from "./ClientLink";

type Props = {
    post: Post;
}

function Post({ post }: Props) {
    return (
        <ClientLink href={`/post/${post.slug.current}`}>
            <div className="transition card bg-base-200 drop-shadow-sm hover:drop-shadow-lg image-full hover:scale-105">
                <figure className="relative">
                    <Image priority alt={post.title} src={urlFor(post.mainImage).url()} fill />
                </figure>
                <div className="card-body">
                    <h4 className="card-title">
                        {post.title}
                    </h4>
                    <div className="justify-end card-actions">
                        {post.categories.map((category) => <CategoryBadge key={category._id} category={category} />)}
                    </div>
                    <p className="text-sm">{
                        new Date(post._createdAt).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })
                    }</p>
                </div>
            </div>
        </ClientLink>
    )
}

export default Post