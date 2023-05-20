import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      className="css-jkic2f"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 18"
      fill="none"
      width={20}
      height={20}
      {...props}
    >
      <path
        d="M0 1.794C0 .941.691.25 1.544.25h16.913a1.544 1.544 0 011.188 2.529L12.5 11.414v5.012a1.325 1.325 0 01-2.137 1.047l-2.379-1.856a1.242 1.242 0 01-.484-.984v-3.219L.355 2.78A1.544 1.544 0 010 1.794zM1.544 1.5a.294.294 0 00-.226.482l7.287 8.807a.624.624 0 01.145.399v3.445l2.348 1.851a.358.358 0 00.078.016.072.072 0 00.074-.074v-5.238c0-.145.05-.286.145-.399l7.289-8.807a.295.295 0 00-.227-.482H1.544z"
        fill="#475569"
      />
    </svg>
  )
}

export default SvgComponent
