"use client";

import Link from "next/link";

type Props = {
    href: string;
    className?: string;
    children: React.ReactNode;
}

function ClientLink({ href, className, children }: Props) {
    return <Link className={className} href={href}>{children}</Link>
}

export default ClientLink