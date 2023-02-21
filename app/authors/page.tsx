import AuthorsList from "../../components/AuthorsList";
import { allAuthorsQuery } from "../../queries/authors"
import { client } from "../../sanity/sanity.client";

async function Authors() {
  const authors: Author[] = await client.fetch(allAuthorsQuery);

  return (
    <div className="flex flex-col gap-3 px-4 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Authors</h1>
      </div>
      <AuthorsList authors={authors} />
    </div>
  )
}

export default Authors