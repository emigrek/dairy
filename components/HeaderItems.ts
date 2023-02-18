interface HeaderItem {
    label: string;
    href: string;
}

const items: HeaderItem[] = [
    { label: 'Posts', href: '/posts' },
    { label: 'Categories', href: '/categories' },
    { label: 'About', href: '/about' },
];

export default items;