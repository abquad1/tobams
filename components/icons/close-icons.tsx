// src/components/icons/close-icon.tsx
export default function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        <path d="M1 1L17 17M17 1L1 17" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }