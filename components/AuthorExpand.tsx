import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { urlFor } from "../sanity/urlFor"
import RichTextComponents from "./RichTextComponents"

type Props = {
    author: Author
}

function AuthorExpand({ author }: Props) {
    return (
        <div className="rounded-lg collapse collapse-arrow bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="flex gap-4 collapse-title text-primary-content peer-checked:bg-base-300">
                <div className="relative w-12 h-12">
                    <Image src={urlFor(author.image).url()} alt={author.name} fill />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl">{author.name}</h2>
                </div>
            </div>
            <div className="collapse-content text-primary-content peer-checked:bg-base-300">
                <div className="p-2 rounded-lg bg-base-200">
                    <PortableText value={author.bio} components={RichTextComponents} />
                </div>
            </div>
        </div>
    )
}

export default AuthorExpand