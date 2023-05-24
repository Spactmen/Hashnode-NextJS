import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      className="css-ythetd"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width= {props.width ? 24 : 20}
      height={props.width ? 24 : 20}
      {...props}
    >
      <path
        d="M21 21l-5.19-5.19M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        strokeWidth="1.5px"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#64748B"
        fill="none"
      />
    </svg>
  )
}

export default SvgComponent
