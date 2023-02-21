import ClientLink from "./ClientLink";

type Props = {
    category: Category;
}

function CategoryCard({ category }: Props) {
    return (
        <ClientLink href={`/category/${category.slug.current}`}>
            <div className="transition card bg-base-200 drop-shadow-sm hover:drop-shadow-lg hover:scale-105">
                <div className="card-body">
                    <h3 className="card-title">
                        {category.title}
                    </h3>
                </div>
            </div>
        </ClientLink>
    )
}

export default CategoryCard