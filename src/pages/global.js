import React from "react"
import { Global, css } from "@emotion/core"
export default () => (
  <div>
    <Global
      styles={css`
        .some-class {
          color: hotpink !important;
        }
      `}
    />
    <Global
      styles={{
        ".some-class": {
          fontSize: 50,
          textAlign: "center",
        },
      }}
    />
    <div className="some-class">This is hotpink now!</div>
  </div>
)
