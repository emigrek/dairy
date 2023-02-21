import CategoryCard from "./CategoryCard"

type Props = {
    categories: Post[]
}

function CategoriesGrid({ categories }: Props) {
    if (!categories.length) return <p className="py-8 text-center text-opacity-50 text-base-content">No categories yet.</p>

    return (
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => <CategoryCard key={category._id} category={category} />)}
        </div>
    )
}

export default CategoriesGrid