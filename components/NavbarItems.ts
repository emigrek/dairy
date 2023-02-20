interface NavbarItem {
    label: string;
    href: string;
}

const items: NavbarItem[] = [
    { label: 'Posts', href: '/posts' },
    { label: 'Categories', href: '/categories' },
    { label: 'Authors', href: '/authors' },
];

export default items;