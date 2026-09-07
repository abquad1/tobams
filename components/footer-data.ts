export type FooterLinkColumn = {
    heading: string;
    links: { label: string; href: string }[];
  };
  
  export const footerLinkColumns: FooterLinkColumn[] = [
    {
      heading: "What We Do",
      links: [
        { label: "Sustainability Services", href: "/sustainability-services" },
        { label: "Strategy Planning and Implementation", href: "/strategy-planning" },
        { label: "Tech Talent Solutions", href: "/tech-talent-solutions" },
        { label: "Training and Development", href: "/" },
        { label: "IT Consulting Services", href: "/it-consulting-services" },
        { label: "Social Impact", href: "/social-impact" },
        { label: "Talent Recruitment", href: "/talent-recruitment" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Jobs", href: "/jobs" },
        { label: "Projects", href: "/projects" },
        { label: "Our Founder", href: "/our-founder" },
        { label: "Business Model", href: "/business-model" },
        { label: "The Team", href: "/the-team" },
        { label: "Contact Us", href: "/contact-us" },
        { label: "Blog", href: "/blog" },
        { label: "FAQs", href: "/faqs" },
        { label: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      heading: "Solution",
      links: [
        { label: "Tobams Group Academy", href: "/tobams-group-academy" },
        { label: "Help a Tech Talent", href: "/help-a-tech-talent" },
        { label: "Campus Ambassadors Program", href: "/campus-ambassadors-program" },
        { label: "Join Our Platform", href: "/join-our-platform" },
        { label: "Pricing", href: "/pricing" },
        { label: "Book a Consultation", href: "#book-a-consultation" },
        { label: "Join Our Slack Community", href: "/join-our-slack-community" },
      ],
    },
  ];
  
  export type SocialLink = {
    label: string;
    href: string;
  };
  
  export const socialLinks: SocialLink[] = [
    { label: "LinkedIn", href: "https://linkedin.com/company/tobamsgroup" },
    { label: "Instagram", href: "https://instagram.com/tobamsgroup" },
    { label: "X", href: "https://x.com/tobamsgroup" },
  ];
  
  export type RegisteredOffice = {
    country: string;
    registration: string;
    address: string;
  };
  
  export const registeredOffices: RegisteredOffice[] = [
    {
      country: "United Kingdom",
      registration: "07451196 (Registered by Company House)",
      address: "Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA",
    },
    {
      country: "Nigeria",
      registration: "RC 1048722 (Registered by the Corporate Affairs Commission)",
      address: "4, Muaz Close, Angwar-Rimi",
    },
  ];
  
  export const contactInfo = {
    email: "theteam@tobamsgroup.com",
    phone: "+447886600748",
  };
  
  export type LegalLink = {
    label: string;
    href: string;
  };
  
  export const legalLinks: LegalLink[] = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookies Policy", href: "/cookies-policy" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
  ];