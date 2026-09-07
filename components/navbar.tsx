'use client'
import Image from 'next/image'
import UserIcon from './icons/user-icon'
import ArrowDownIcon from './icons/arrowdown-icon'
import CloseIcon from './icons/close-icons'
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

    const handleDropdownKeyDown = (e: React.KeyboardEvent, label: string) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            console.log(label)
        }
    }

  return (
    <header className="relative z-50 w-full">
            {/* Top section */}
        <nav className="w-full md:border-b md:border-primary">
            <div className="flex items-center justify-between px-6 md:px-16 py-4.5 md:py-6">
                <Link href='/' className="flex">
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
        </nav>

          {/* Bottom section on desktop */}
        <ul className="w-full hidden md:flex items-center justify-between px-6 py-auto md:px-32 md:py-5 ">
            {navLinks.map((link)=>(
                <li className={`py-2 ${pathname === link.href ? 'text-primary border-b border-primary':'text-foreground'}`} key={link.label}>
                    <Link href={link.href} className={`flex items-center gap-2 
                        `}>
                        <p className='text-foreground text-lg leading-[150%]'>{link.label}</p>
                        {link.hasDropdown && (
                            <span
                                tabIndex={0}
                                role="button"
                                aria-label={`Toggle ${link.label} dropdown`}
                                onKeyDown={(e) => handleDropdownKeyDown(e, link.label)}
                            >
                                <ArrowDownIcon className="h-1.5 w-2.5 text-primary" />
                            </span>
                    )}
                    </Link>
                </li>
            ))}
        </ul>

        <div 
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-40 transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Mobile Navigation  */}
        <div 
          className={`fixed top-0 right-0 bottom-0 w-9/10 z-50 md:hidden bg-foreground/70 backdrop-blur-md px-4 py-8 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0 ' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-start gap-10">
            <button 
            onClick={() => setIsOpen(false)} 
            className="text-white flex justify-end text-2xl focus:outline-none md:hidden transition-opacity duration-300 w-full"
            aria-label="Close menu"
            >
                <CloseIcon className="h-5 w-5" />
            </button>

            {/* Links */}
            <div className="flex flex-col gap-16 w-full">
            {/* Bottom section on mobile */}
                <ul className="w-full flex flex-col md:hidden items-center justify-between px-6 py-auto md:px-32 md:py-5 ">
                    {navLinks.map((link)=>(
                        <li className={`py-2 ${pathname === link.href ? 'text-background border-b border-background':'text-background'}`} key={link.label}>
                            <Link href={link.href} className={`flex items-center gap-2 
                                `}>
                                <p className='text-lg leading-[150%]'>{link.label}</p>
                                {link.hasDropdown && (
                                    <span
                                        tabIndex={0}
                                        role="button"
                                        aria-label={`Toggle ${link.label} dropdown`}
                                        onKeyDown={(e) => handleDropdownKeyDown(e, link.label)}
                                    >
                                        <ArrowDownIcon className="h-1.5 w-2.5 text-background" />
                                    </span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
          </div>

          <div className="w-full md:hidden flex flex-col items-center gap-6 py-8">
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
        </div>
    </header>
  )
}

export default Navbar