import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="css-1vmmox"
      viewBox="0 0 20 20"
      width={props.width ? 24 : 20}
      height={props.width ? 24 : 20}
      {...props}
    >
      <defs>
        <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <path
        d="M2.2 4.2c1.8.5 3.1 1.9 3.6 3.6.1.2.3.2.4 0C6.7 6 8.1 4.7 9.8 4.2c.2-.1.2-.3 0-.4C8.1 3.3 6.7 1.9 6.2.2c-.1-.2-.3-.2-.4 0-.5 1.7-1.9 3.1-3.6 3.6-.3.1-.3.3 0 .4zm17.6 5.5C17.1 9 15 6.9 14.3 4.2c-.1-.3-.5-.3-.6 0C13 6.9 10.9 9 8.2 9.7c-.3.1-.3.5 0 .6 2.6.7 4.7 2.8 5.5 5.5.1.3.5.3.6 0 .7-2.6 2.8-4.7 5.5-5.5.3-.1.3-.5 0-.6zm-12 6.1c-1.8-.5-3.1-1.9-3.6-3.6-.1-.2-.3-.2-.4 0-.5 1.8-1.9 3.1-3.6 3.6-.2.1-.2.3 0 .4 1.8.5 3.1 1.9 3.6 3.6.1.2.3.2.4 0 .5-1.8 1.9-3.1 3.6-3.6.3-.1.3-.3 0-.4z"
        fill='url("#a")'
      />
    </svg>
  )
}

export default SvgComponent
