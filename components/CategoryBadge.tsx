type Props = {
    category: Category
}

function CategoryBadge({ category }: Props) {
  return (
    <div className="badge badge-outline">{ category.title }</div>
  )
}

export default CategoryBadge