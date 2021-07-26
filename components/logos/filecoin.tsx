/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";

const FilecoinLogo = ({ pushSx }: { pushSx?: SxStyleProp }) => (
  <svg
    sx={{ display: "inline-block", width: "24px", ...pushSx }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="filecoin-logo-mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H24V24H0V0Z"
        fill="white"
      />
    </mask>
    <g mask="url(#filecoin-logo-mask0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23.9998C5.4 23.9998 0 18.5998 0 11.9398C0.06 5.33976 5.4 -0.0602372 12.06 -0.000237207C18.66 0.0597628 24 5.39976 24 12.1198C23.94 18.6598 18.6 23.9998 12 23.9998Z"
        fill="#0090FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.14 10.56L12.78 12.48L16.2 12.96L15.96 13.86L12.6 13.38C12.36 14.16 12.24 15 11.94 15.72C11.64 16.56 11.34 17.4 10.98 18.18C10.5 19.2 9.65999 19.92 8.51999 20.1C7.85999 20.22 7.13999 20.16 6.59999 19.74C6.41999 19.62 6.23999 19.38 6.23999 19.2C6.23999 18.96 6.35999 18.66 6.53999 18.54C6.65999 18.48 6.95999 18.54 7.13999 18.6C7.31999 18.78 7.49999 19.02 7.61999 19.26C7.97999 19.74 8.45999 19.8 8.93999 19.44C9.47999 18.96 9.77999 18.3 9.95999 17.64C10.32 16.2 10.68 14.82 10.98 13.38V13.14L7.79999 12.66L7.91999 11.76L11.22 12.24L11.64 10.38L8.21999 9.84L8.33999 8.88L11.88 9.36C12 9 12.06 8.7 12.18 8.4C12.48 7.32 12.78 6.24 13.5 5.28C14.22 4.32 15.06 3.72 16.32 3.78C16.86 3.78 17.4 3.96 17.76 4.38C17.82 4.44 17.94 4.56 17.94 4.68C17.94 4.92 17.94 5.22 17.76 5.4C17.52 5.58 17.22 5.52 16.98 5.28C16.8 5.1 16.68 4.92 16.5 4.74C16.14 4.26 15.6 4.2 15.18 4.62C14.88 4.92 14.58 5.34 14.4 5.76C13.98 7.02 13.68 8.34 13.26 9.66L16.56 10.14L16.32 11.04L13.14 10.56Z"
        fill="white"
      />
    </g>
  </svg>
);

export default FilecoinLogo;
