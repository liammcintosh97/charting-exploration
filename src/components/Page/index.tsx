import React from 'react'
import NavBar from '../Nav'
import { PageProps } from './type'
import './style.scss'

export default function Page({
  children,
  title
}: PageProps) {
  return (
    <div className='page'>
      <NavBar/>
      <main>
        <article>
          <header>
            <h1>{title}</h1>
          </header>
          {children}
        </article>
      </main>
    </div>
  )
}