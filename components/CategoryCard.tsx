import Link from "next/link";

type Props = {
    category: Category;
}

function CategoryCard({ category }: Props) {
    return (
        <Link href={`/category/${category.slug.current}`} className="transition card bg-base-200 drop-shadow-sm hover:drop-shadow-lg hover:scale-105">
            <div className="card-body">
                <h3 className="card-title">
                    {category.title}
                </h3>
            </div>
        </Link>
    )
}

export default CategoryCard