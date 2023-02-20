import { groq } from "next-sanity";

const allPostsQuery = groq`
    *[_type == "post"] {
        ...,
        author->,
        categories[]->
    }
`;

const recentPostsQuery = groq`
    *[_type == "post"][0..3] {
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`;

const categoryPostsQuery = function (categorySlug: string) {
    return groq`
        *[_type == "post" && references(*[_type == "category" && slug.current == "${categorySlug}"][0]._id)] {
            ...,
            author->,
            categories[]->
        }
    `;
}

const postQuery = function (slug: string) {
    return groq`
        *[_type == "post" && slug.current == "${slug}"] {
            ...,
            author->,
            categories[]->
        }[0]
    `;
};

export { allPostsQuery, recentPostsQuery, categoryPostsQuery, postQuery };