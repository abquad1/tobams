import Image from "next/image";
import Link from "next/link";
import {footerLinkColumns,socialLinks,registeredOffices,contactInfo,legalLinks} from "./footer-data";
import { LinkedinIcon, InstagramIcon, XIcon } from "./icons/social-icons";
import { MailIcon, PhoneIcon } from "./icons/contact-icons";

const socialIconMap = {LinkedIn: LinkedinIcon,Instagram: InstagramIcon,X: XIcon,};

export default function Footer() {
  return (
    <footer className="w-full bg-senary text-background">
      <div className="flex flex-col gap-5 py-6 md:py-8 ">
            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between border-b border-secondary-background py-6 md:py-10 px-6 md:px-16 gap-6">
                <div className="flex flex-col">
                    <p className="text-sm md:text-lg leading-[150%]">
                    Ready to be a part of something extraordinary?
                    </p>
                    <h3 className="font-semibold leading-[130%] text-xl md:text-[32px]">
                    Let’s work together to create a difference
                    </h3>
                </div>

                <button className="text-lg leading-[120%] font-semibold px-6 py-3 rounded-sm primary-button">
                    Get in touch
                </button>
            </div>

            {/* what we do & companies */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-14 px-6 md:px-16 py-8">
          <div className="flex max-w-xs flex-col gap-6">
            <Image
              src="/images/tobams-logo.png"
              alt="Tobams Group logo"
              width={140}
              height={54}
            />
            <p className="text:sm md:text-base tracking-[3%] leading-[150%] text-background">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.label as keyof typeof socialIconMap];
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 bg-background items-center justify-center rounded-full "
                  >
                    <Icon className="h-4 w-4 text-foreground" />
                  </Link>
                );
              })}
            </div>
          </div>

          {footerLinkColumns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-4">
              <h4 className="text-lg md:text-xl leading-[100%] font-bold text-background">
                {column.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm md:text-base text-background leading-[150%] hover:text-background/50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Registered offices + contact info */}
      <div className="px-6 md:px-16 py-5">
      <div className="flex flex-col md:flex-row gap-6 rounded-lg border border-background/10 p-4 md:p-6 text-background bg-background/6">
          <div className="flex flex-3 gap-10 ">
            <div className="flex flex-col gap-2.25">
              <h5 className="text-lg md:text-xl font-bold leading-[100%] ">
                Registered Offices
              </h5>
              <div className="flex flex-col md:flex-row gap-4">
                {registeredOffices.map((office) => (
                  <div key={office.country}>
                    <p className="text-sm md:text-base text-secondary">
                      {office.country}
                    </p>
                    <p className="text-sm md:text-base">
                      {office.registration}
                    </p>
                    <p className="text-base">{office.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 border-l border-background/10 ">
            <h5 className="mb-2 text-lg md:text-xl font-bold text-background">
              Contact Information
            </h5>
            <div className="flex flex-col gap-2">
            <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-sm md:text-base hover:text-background"
              >
                <MailIcon className="h-4 w-4 text-secondary" />
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 text-sm md:text-base hover:text-background"
              >
                
                <PhoneIcon className="h-4 w-4 text-secondary" />
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t px-6 md:px-16 border-background/10 pt-6 text-sm md:text-base text-background gap-3">
          <p className="order-2 md:order-1 text-center md:text-left">Copyright &copy; Tobams Group, {new Date().getFullYear()}. All rights reserved.</p>
          <ul className="mx-auto flex flex-wrap justify-center gap-x-6 gap-y-3 md:w-auto md:flex-row order-1 md:order-2">
  {legalLinks.map((link) => (
    <li key={link.href}>
      <Link href={link.href} className="hover:text-background">
        {link.label}
      </Link>
    </li>
  ))}
</ul>
        </div>
      </div>
    </footer>
  );
}