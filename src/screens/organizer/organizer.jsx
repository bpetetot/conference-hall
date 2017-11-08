import React from 'react'

import { protect } from '../../redux/auth'
import Brand from './brand'
import Navbar from './navbar'
import Sidebar from './sidebar'

import './organizer.css'

const Organizer = () => (
  <div className="layout-screen">
    <Brand className="layout-brand" />
    <Navbar className="layout-navbar" />
    <Sidebar className="layout-sidebar" />
    <div className="layout-main" />
  </div>
)

export default protect(Organizer)
