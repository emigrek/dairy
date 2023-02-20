import { groq } from "next-sanity";

const allCategoriesQuery = groq`
    *[_type == "category"]
`;

const allCategoriesSlugsQuery = groq`
    *[_type == "category"] {
        slug
    }
`;

const categoryQuery = function (slug: string) {
    return groq`
        *[_type == "category" && slug.current == "${slug}"][0]
    `;
}

export { allCategoriesQuery, allCategoriesSlugsQuery, categoryQuery };