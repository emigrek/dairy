type Props = {
  category: Category
}

function CategoryBadge({ category }: Props) {
  return (
    <div className="badge bg-base-300">{category.title}</div>
  )
}

export default CategoryBadge