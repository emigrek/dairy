import Link from "next/link"

type Props = {
  category: Category
}

function CategoryBadge({ category }: Props) {
  return (
    <Link href={`/category/${category.slug.current}`} className="badge bg-base-300">{category.title}</Link>
  )
}

export default CategoryBadge