// src/components/icons/flash-icon.tsx
type FlashIconProps = React.SVGProps<SVGSVGElement> & {
    strokeColor?: string;
  };
  
  export default function FlashIcon({
    strokeColor = "currentColor",
    ...props
  }: FlashIconProps) {
    return (
      <svg
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        <path
          d="M7.87302 0.761963V6.98419H13.2064L6.09524 16.762V10.5397H0.761909L7.87302 0.761963Z"
          stroke={strokeColor}
          strokeWidth="1.52381"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }