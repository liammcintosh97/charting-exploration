import React from 'react'
import NavBar from '../../components/Nav'
import { Outlet } from 'react-router-dom'
import Page from '../../components/Page'

export default function Root() {
  return (
    <Page
      title='React.js Charting Exploration'
    >
      <p>An exploration of the top 3 data visualization packages in React.js</p>
    </Page>
  )
}