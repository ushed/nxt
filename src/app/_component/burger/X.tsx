import { SVGProps } from "react";

export function IconParkTwotoneBigX(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <defs>
        <mask id="ipTBigX0">
          <g fill="#555" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
            <path d="M33 6h11L15 42H4z"></path>
            <path d="M15 6H4l29 36h11z"></path>
          </g>
        </mask>
      </defs>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBigX0)"></path>
    </svg>
  );
}
