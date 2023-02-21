import { groq } from "next-sanity";

const allAuthorsQuery = groq`
    *[_type == "author"]
`;

export { allAuthorsQuery };