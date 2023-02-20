import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../sanity/urlFor";

const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative w-full m-10 mx-auto h-96">
                    <Image
                        className="object-contain"
                        src={urlFor(value).url()}
                        alt={"Post image"}
                        fill
                    />
                </div>
            )
        }
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="py-5 ml-4 space-y-3 list-disc">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="py-5 ml-4 space-y-3 list-decimal">{children}</ol>
        )
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="py-4 text-2xl font-bold">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="py-4 text-xl font-bold">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="py-4 text-lg font-bold">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="py-4 text-base font-bold">{children}</h4>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="py-5 bg-base-300">{children}</blockquote>
        )
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/") ? "noopener noreferrer" : undefined;

            return (
                <Link href={value.href} rel={rel} className="link-accent link-hover">
                    {children}
                </Link>
            )
        }
    }
};

export default RichTextComponents;