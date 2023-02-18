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

export { allPostsQuery, recentPostsQuery };