'use client'

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

function ResponsiveNav() {
  
  const [showNav, setShowNav] = useState(false);

  const openNaveHandler=()=>setShowNav(true);
  const closeNaveHandler=()=>setShowNav(false);

  return (
    <div>
        <Nav openNav={openNaveHandler}/>
        <MobileNav showNav={showNav} closeNav={closeNaveHandler}/>
    </div>
  )
}

export default ResponsiveNav