"use client";
import Link from "next/link";

type Props = {
    href: string;
    children: React.ReactNode;
}

function ClientLink({ href, children }: Props) {
    return <Link href={href}>{children}</Link>
}

export default ClientLink