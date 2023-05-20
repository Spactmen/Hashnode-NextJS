import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className=""
      viewBox="0 0 55 55"
      fill="none"
      width={16}
      height={16}
      {...props}
    >
      <path
        d="M2 2h51v21H2V2zm0 30h51v21H2V32z"
        stroke="#475569"
        strokeWidth="4px"
      />
    </svg>
  )
}

export default SvgComponent
