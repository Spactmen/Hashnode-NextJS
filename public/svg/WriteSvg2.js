import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="css-12cnxdc"
      fill="none"
      viewBox="0 0 24 24"
      width={20}
      height={20}
      {...props}
    >
      <path
        d="M10.633 15.592L6.842 11.8c-1.036-1.036-1.553-1.553-1.588-1.998-.03-.385.125-.762.42-1.013.339-.29 1.07-.29 2.535-.29h7.582c1.464 0 2.196 0 2.535.29.294.25.45.628.42 1.013-.035.445-.552.962-1.588 1.998l-3.79 3.79c-.48.48-.719.719-.995.808a1.21 1.21 0 01-.746 0c-.276-.09-.516-.329-.994-.807z"
        fill="#FFF"
      />
    </svg>
  )
}

export default SvgComponent
