import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      className="css-1k1hg9k"
      viewBox="0 0 24 24"
      fill="currenColor"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      {...props}
    >
      <path
        d="M14 9.5a3.5 3.5 0 100-7m3.5 19h3.111a1.889 1.889 0 001.889-1.889A6.611 6.611 0 0015.889 13H15.5m-3.75-7a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM3.5 21.5H13a2 2 0 002-2v-.25a6.75 6.75 0 00-13.5 0v.25a2 2 0 002 2z"
      
      />
    </svg>
  )
}

export default SvgComponent
