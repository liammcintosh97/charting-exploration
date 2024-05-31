import React from 'react'
import { routes } from '../../providers/RouterProvider'
import { Link } from 'react-router-dom'
import './style.scss'
import {ReactComponent as BurgerIcon} from '../../assets/icons/burger-menu-icon.svg'

export default function NavBar() {
  return (
    <nav>
      <BurgerIcon
        className='burger-icon'
      />
      <ul>
        {routes.map((r) => {
          if (r.path === undefined) return <></>
          return (
            <li key={'nav_list_item_' + r.name} > 
              <Link to={r.path}>{r.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}