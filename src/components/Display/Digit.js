import React from "react"

const SEGMENTS = {
  a: [[1, 1], [2, 0], [8, 0], [9, 1], [8, 2], [2, 2]],
  b: [[9, 1], [10, 2], [10, 8], [9, 9], [8, 8], [8, 2]],
  c: [[9, 9], [10, 10], [10, 16], [9, 17], [8, 16], [8, 10]],
  d: [[9, 17], [8, 18], [2, 18], [1, 17], [2, 16], [8, 16]],
  e: [[1, 17], [0, 16], [0, 10], [1, 9], [2, 10], [2, 16]],
  f: [[1, 9], [0, 8], [0, 2], [1, 1], [2, 2], [2, 8]],
  g: [[1, 9], [2, 8], [8, 8], [9, 9], [8, 10], [2, 10]]
}

const DIGITS = {
  "0": ["a", "b", "c", "d", "e", "f"],
  "1": ["b", "c"],
  "2": ["a", "b", "g", "e", "d"],
  "3": ["a", "b", "g", "c", "d"],
  "4": ["f", "g", "b", "c"],
  "5": ["a", "f", "g", "c", "d"],
  "6": ["a", "f", "g", "c", "d", "e"],
  "7": ["a", "b", "c"],
  "8": ["a", "b", "c", "d", "e", "f", "g"],
  "9": ["a", "b", "c", "d", "f", "g"]
}

const Digit = ({ xAxis, yAxis, color, value, onOpacity, offOpacity }) =>  {

  const { isArray } = Array

  const getSegment = id => isArray(SEGMENTS[id]) ? SEGMENTS[id] : []

  const getDigit = id => Array.isArray(DIGITS[id]) ? DIGITS[id] : []

  const compose = functions => (
    functions.reduce((funcs, func) => {
      var name = Object.keys(func)[0];
      var params = isArray(func[name]) ? func[name] : [func[name]];
      return `${funcs} ${name}(${params.join(" ")})`;
    }, "")
  )

  return (
    <g
      transform={compose([
        { translate: [xAxis, yAxis] }
      ])}
      style={{
        fillRule: "evenodd",
        stroke: "#61892F",
        strokeWidth: 0.1,
        strokeOpacity: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter"
      }}
    >
      {Object.keys(SEGMENTS).map(key =>
        <polygon
          key={key}
          points={getSegment(key)}
          fill={color}
          fillOpacity={
            getDigit(value).indexOf(key) >= 0
              ? onOpacity
              : offOpacity
          }
        />
      )}
    </g>
  )
}

Digit.defaultProps = {
  value: " ",
  onOpacity: 1,
  offOpacity: 0.15,
  color: "red",
  xAxis: 0,
  yAxis: 0
}

export default Digit