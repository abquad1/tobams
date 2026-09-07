type ChevronIconProps = React.SVGProps<SVGSVGElement> & {
    direction?: "left" | "right";
  };
  
  export default function ChevronIcon({
    direction = "right",
    ...props
  }: ChevronIconProps) {
    const paths = {
      left: "M3.77067 8.48533L10.3707 15.0853L8.48533 16.972L0 8.48533L8.48533 0L10.3707 1.88533L3.77067 8.48533Z",
      right:
        "M6.60006 8.48533L6.10352e-05 15.0853L1.88539 16.972L10.3707 8.48533L1.88539 0L6.10352e-05 1.88533L6.60006 8.48533Z",
    };
  
    return (
      <svg
        width="11"
        height="17"
        viewBox="0 0 11 17"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        <path d={paths[direction]} />
      </svg>
    );
  }