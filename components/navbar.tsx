'use client'
import Image from 'next/image'
import UserIcon from './icons/user-icon'
import ArrowDownIcon from './icons/arrowdown-icon'
import Link from 'next/link'
import MenuIcon from './icons/menu-icon'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

type NavLink = {
    label: string;
    href: string;
    hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
    { label: "About", href: "/", hasDropdown: true },
    { label: "What We Do", href: "/what-we-do", hasDropdown: true },
    { label: "Jobs", href: "/jobs", hasDropdown: true },
    { label: "Projects", href: "/projects" },
    { label: "TG Academy", href: "/tg-academy" },
    { label: "Strategic Partnership", href: "/strategic-partnership" },
    { label: "Pricing", href: "/pricing" },
    { label: "Book a Consultation", href: "/book-a-consultation" },
  ];

function Navbar() {
    const [isOpen,setIsOpen] = useState(false)
    const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
            {/* Top section */}
        <div className="w-full md:border-b md:border-primary">
            <div className="flex items-center justify-between px-6 md:px-16 py-4.5 md:py-6">
                <Link href='/' className="flex items-center">
                    <Image src="/images/tobams-logo.png" alt="Tobams-Group-logo" width={165.71} height={64} />
                </Link>
                <div className="hidden md:flex items-center gap-6">
                    <button className="flex items-center justify-center gap-3 primary-button py-2 px-5 rounded-sm">
                        <UserIcon className='w-8 h-8 rounded-full text-primary bg-primary-foreground p-1'/>
                        <div className="flex items-center gap-1">
                            <span className="text-lg font-semibold text-background leading-relaxed ">Account</span>
                            <ArrowDownIcon className='text-primary-foreground'/>
                        </div>
                    </button>

                    <button className="flex items-center justify-center bg-secondary py-[10.5px] px-4 rounded-sm text-lg font-semibold text-background leading-relaxed">
                        Take Assessment
                    </button>
                </div>
                <button
                type="button"
                aria-label="Open menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
            >
                <MenuIcon className="h-[26.67px] w-[26.67px] text-foreground rounded-sm " />
            </button>
            </div>
        </div>

          {/* Bottom section */}
        <ul className="w-full hidden md:flex items-center justify-between px-6 py-auto md:px-32 md:py-5 ">
            {navLinks.map((link)=>(
                <li className={`py-2 ${pathname === link.href ? 'text-primary border-b border-primary':'text-foreground'}`} key={link.label}>
                    <Link href={link.href} className={`flex items-center gap-2 
                        `}>
                        <p className='text-foreground text-lg leading-[150%]'>{link.label}</p>
                        {link.hasDropdown && (
                            <ArrowDownIcon className="h-1.5 w-2.5 text-primary" />
                    )}
                    </Link>
                </li>
            ))}
        </ul>
    </header>
  )
}

export default Navbar