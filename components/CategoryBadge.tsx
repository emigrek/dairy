import ClientLink from "./ClientLink"

type Props = {
  category: Category,
  link?: boolean
}

function CategoryBadge({ category, link }: Props) {
  if (link) {
    return (
      <ClientLink href={`/category/${category.slug.current}`}>
        <div className="badge bg-base-300">
          {category.title}
        </div>
      </ClientLink>
    )
  }
  else {
    return (
      <div className="badge bg-base-300">
        {category.title}
      </div>
    )
  }
}

export default CategoryBadge