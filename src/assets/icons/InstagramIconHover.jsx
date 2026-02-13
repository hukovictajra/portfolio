import * as React from "react";
const SvgInstagramIconHover = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    fill="none"
    viewBox="0 0 800 800"
    {...props}
  >
    <path
      fill="url(#instagram-icon-hover_svg__a)"
      fillRule="evenodd"
      d="M200 0C89.543 0 0 89.543 0 200v400c0 110.457 89.543 200 200 200h400c110.457 0 200-89.543 200-200V200C800 89.543 710.457 0 600 0zm314 101H286c-104.934 0-190 85.066-190 190v222c0 104.934 85.066 190 190 190h228c104.934 0 190-85.066 190-190V291c0-104.934-85.066-190-190-190M146 291c0-77.32 62.68-140 140-140h228c77.32 0 140 62.68 140 140v222c0 77.32-62.68 140-140 140H286c-77.32 0-140-62.68-140-140zm255 201c50.386 0 90-40.075 90-88s-39.614-88-90-88-90 40.075-90 88 39.614 88 90 88m0 50c77.32 0 140-61.785 140-138s-62.68-138-140-138-140 61.785-140 138 62.68 138 140 138m157-275c10.493 0 19-8.283 19-18.5s-8.507-18.5-19-18.5-19 8.283-19 18.5 8.507 18.5 19 18.5"
      clipRule="evenodd"
    />
    <defs>
      <radialGradient
        id="instagram-icon-hover_svg__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-878.50253 593.49486 -488.74556 -723.45059 186 753)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} />
        <stop offset={0.194} />
        <stop offset={0.31} />
        <stop offset={0.361} />
        <stop offset={0.418} />
        <stop offset={0.596} />
        <stop offset={0.746} />
        <stop offset={0.851} />
      </radialGradient>
    </defs>
  </svg>
);
export default SvgInstagramIconHover;
