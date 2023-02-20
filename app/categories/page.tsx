import CategoriesGrid from "../../components/CategoriesGrid";
import { allCategoriesQuery } from "../../queries/categories"
import { client } from "../../sanity/sanity.client"

async function Categories() {
  const categories = await client.fetch(allCategoriesQuery);

  return (
    <div className="flex flex-col gap-3 px-4 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">All categories</h1>
      </div>
      <CategoriesGrid categories={categories}/>
    </div>
  )
}

export default Categories