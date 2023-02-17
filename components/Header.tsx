import React from 'react'
import Logo from './Logo'
import items from './HeaderItems';

function Header() {
  return (
    <div className="py-5 border-b-[1px] border-base-200 navbar">
        <div className="flex-1">
            <a className="text-3xl normal-case btn btn-ghost">
                <Logo/>
            </a>
        </div>
        <div className="flex-none">
            <ul className="px-1 space-x-1 menu menu-horizontal">
                { 
                    items.map((item, index) => (
                        <li key={index}><a href={item.href}>{item.label}</a></li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Header