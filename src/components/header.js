import { Link } from "gatsby"

import React from "react"


const Header = ({ siteTitle }) => (
  <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
    <button className={"navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" >
      <span className={"navbar-toggler-icon"}></span>
    </button>
    <a className={"navbar-brand"} href="#">D-Gatsby</a>

    <div className={"collapse navbar-collapse"} id="navbarTogglerDemo03">
      <ul className={"navbar-nav mr-auto mt-2 mt-lg-0"}>
      <li className={"nav-item"}>
          <a className={"nav-link"} href="/">Homepage</a>
        </li>
        <li className={"nav-item"}>
          <a className={"nav-link"} href="/articles">Articoli</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
