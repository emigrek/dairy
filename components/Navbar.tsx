import Link from 'next/link';
import Logo from './Logo'
import items from './NavbarItems';

function Navbar() {
    return (
        <div className="py-5 border-b-[1px] border-base-200 navbar">
            <div className="flex-1">
                <Link href="/" className="text-3xl normal-case btn btn-ghost">
                    <Logo />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="px-1 space-x-1 menu menu-horizontal">
                    {
                        items.map((item, index) => (
                            <li key={index}><Link href={item.href}>{item.label}</Link></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar