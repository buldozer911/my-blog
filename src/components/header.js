import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/use-site-metadata"

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  line-height: 1;
  font-weight: ${props => props.fontWeight || "normal"};
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => {
  return (
    <header
      css={css`
        background: #eee;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem calc((100vw - 550px 0.5rem) / 2);
      `}
    >
      <NavLink to="/" fontWeight="bold">
        Welcome to my blog!
      </NavLink>
      <nav
        css={css`
          margin-top: 0;
        `}
      >
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="current-page">
          About me
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
