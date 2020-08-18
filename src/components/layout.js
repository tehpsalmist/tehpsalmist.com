import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1 className='mt-0 mb-8'>
        <Link className='shadow-sm' to={`/`}>
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3 className='mb-2' style={{ fontFamily: `Montserrat, sans-serif` }}>
        <Link className='shadow-sm' to={`/`}>
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div className='mx-auto max-w-md p-2'>
      <header>{header}</header>
      <main>{children}</main>
      <footer >
        © tehpsalmist {new Date().getFullYear()}
        <br />
        Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
