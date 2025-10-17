"use client";

import Link from 'next/link'
import {
    Globe,
    Share2,
    MessageCircle,
    Link as LinkIcon,
    Send,
    Feather,
} from 'lucide-react'

const links = [
    {
        title: 'Features',
        href: '#',
    },
    {
        title: 'Solution',
        href: '#',
    },
    {
        title: 'Customers',
        href: '#',
    },
    {
        title: 'Pricing',
        href: '#',
    },
    {
        title: 'Help',
        href: '#',
    },
    {
        title: 'About',
        href: '#',
    },
]

const socialLinks = [
    { icon: Share2, label: "Share", href: "#" },
    { icon: MessageCircle, label: "Message", href: "#" },
    { icon: LinkIcon, label: "Link", href: "#" },
    { icon: Globe, label: "Website", href: "#" },
    { icon: Send, label: "Contact", href: "#" },
    { icon: Feather, label: "Blog", href: "#" },
]

export default function FooterSection() {
    return (
        <footer className="border-t border-border/5 py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="Go home"
                    className="mx-auto block w-fit"
                >
                    <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-xl font-bold text-transparent">
                        Nexio
                    </span>
                </Link>

                <div className="my-12 flex flex-wrap justify-center gap-8 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground transition-colors hover:text-primary"
                        >
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>

                <div className="my-12 flex flex-wrap justify-center gap-8">
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <Link
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="group rounded-full p-2 text-muted-foreground transition-colors hover:text-primary"
                            >
                                <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                            </Link>
                        );
                    })}
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border/5"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-4 text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Nexio, All rights reserved
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}