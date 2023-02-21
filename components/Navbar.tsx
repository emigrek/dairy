import Link from 'next/link';
import Logo from './Logo'
import items from './NavbarItems';

function Navbar() {
    const navItems = items.map((item, index) => (
        <li key={index}><Link href={item.href}>{item.label}</Link></li>
    ));

    return (
        <div className="py-5 border-b-[1px] border-base-200 navbar">
            <div className="flex-1 navbar-start">
                <Link href="/" className="text-3xl normal-case btn btn-ghost">
                    <Logo />
                </Link>
            </div>
            <div className="hidden navbar-end sm:flex">
                <ul className="px-1 space-x-1 menu menu-horizontal">
                    {
                        navItems
                    }
                </ul>
            </div>
            <div className="navbar-end sm:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="p-2 mt-3 shadow menu dropdown-content menu-compact bg-base-200 rounded-box w-52">
                        {
                            navItems
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar