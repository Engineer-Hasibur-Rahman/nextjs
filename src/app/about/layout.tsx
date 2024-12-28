import Link from "next/link";
import React, { ReactNode } from "react";

interface AboutLayoutProps{
    children: ReactNode
}

export default function AboutLayout({ children }: AboutLayoutProps){
    return(
        <div>
            <nav className="flex gap-5">
              <li><Link href="/about/mission">Mission</Link></li>
              <li><Link prefetch={false} href="/about/vision">Vision</Link></li>
            </nav>

            {children}
        </div>
    )
}