import { SVGProps } from "react";

export function IconParkTwotoneMoon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <defs>
        <mask id="ipTMoon0">
          <path
            fill="#555"
            stroke="#ffff"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M28.053 4.41c-5.47 1.427-9.507 6.4-9.507 12.317c0 7.03 5.698 12.728 12.727 12.728c5.916 0 10.89-4.038 12.316-9.508A20 20 0 0 1 44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4c1.389 0 2.744.141 4.053.41Z"
          ></path>
        </mask>
      </defs>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMoon0)"></path>
    </svg>
  );
}
