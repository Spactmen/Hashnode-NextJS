import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="css-2iqbi4"
      fill="none"
      viewBox="0 0 24 24"
      width={16}
      height={16}
      {...props}
    >
      <path
        d="M16.78 2.364a2.75 2.75 0 012.441 0c.407.202.764.559 1.224 1.02l.085.086.086.085c.461.46.818.817 1.02 1.224a2.75 2.75 0 010 2.442c-.202.407-.559.763-1.02 1.223L20.061 9 15 3.94l.555-.556c.46-.461.816-.818 1.223-1.02zM13.94 5L19 10.06l-8.148 8.148c-.463.464-.762.762-1.107 1.003a4.74 4.74 0 01-.983.526c-.391.154-.806.237-1.448.365l-3.167.633a.75.75 0 01-.882-.882l.633-3.167c.128-.642.211-1.057.365-1.448a4.75 4.75 0 01.526-.983c.24-.346.54-.644 1.003-1.107L13.94 5z"
        fill="#FFF"
      />
    </svg>
  )
}

export default SvgComponent