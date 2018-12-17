import React from "react"
import Digit from "./Digit"

const Display = ({ value, digitCount, color }) => (
  <svg viewBox={[-1, -1, 12 * digitCount, 20]}>
    {value
      .toString()
      .padStart(digitCount, " ")
      .split("")
      .slice(-digitCount)
        .map((digit, key) =>
          <Digit
            key={key}
            value={digit}
            xAxis={key * 12}
            color={color}
          />
        )
    }
  </svg>
)

Display.defaultProps = {
  digitCount: 4,
  value: ""
}

export default Display