import Image from "next/image";
import { urlFor } from "../sanity/urlFor";
import CategoryBadge from "./CategoryBadge";

type Props = {
    post: Post;
}

function Post({ post }: Props) {
    return (
        <div className="card bg-base-200 drop-shadow-sm image-full">
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
        </div>
    )
}

export default Post