import React from 'react'
import { routes } from '../../providers/RouterProvider'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <ul>
        {routes.map((r) => {
          return (
            <li>
              <Link to={r.path}>{r.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}