import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="css-1471hvm"
      fill="none"
      viewBox="0 0 24 24"
      width={20}
      height={20}
      {...props}
    >
      <path
        d="M12 21c1 0 10-5 10-12 0-3.5-3-5.956-6-6-1.5-.021-3 .5-4 2-1-1.5-2.526-2-4-2-3 0-6 2.5-6 6 0 7 9 12 10 12z"
        stroke="#334155"
        strokeWidth="1.5px"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgComponent
