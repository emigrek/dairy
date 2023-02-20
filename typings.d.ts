type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

interface Post extends Base {
    author: Author;
    title: string;
    slug: Slug;
    mainImage: Image;
    body: Block[];
    categories: Category[];
}

interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: string;
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference"
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _type: "block";
    _key: string;
    children: Span[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    markDefs: any[];
}

interface Span {
    _type: "span";
    _key: string;
    marks: string[];
    text: string;
}

interface Category extends Base {
    title: string;
    slug: Slug;
}

interface MainImage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string";
    current: string;
}