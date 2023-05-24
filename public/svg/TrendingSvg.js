import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="css-mvlxfm"
      viewBox="0 0 24 24"
      width={18.55}
      height={18.55}
      {...props}
    >
      <path
        d="M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z"
        fill="#334155"
        opacity={0.5}
      />
    </svg>
  )
}

export default SvgComponent
