import React from 'react'

export default function Shadow(props) {
return props.isSideMenuOpen ? <div onClick={props.showSideMenu} className="fixed top-0 left-0 z-30 w-screen h-screen bg-black bg-opacity-50"></div> : null
}