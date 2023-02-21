import AuthorExpand from "./AuthorExpand"

type Props = {
    authors: Author[]
}

function AuthorsList({ authors }: Props) {
    return (
        <div className="flex flex-col gap-2 mt-4">
            {
                authors.map((author) => (
                    <AuthorExpand key={author._id} author={author} />
                ))
            }
        </div>
    )
}

export default AuthorsList