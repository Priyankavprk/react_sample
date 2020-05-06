import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          Apple Inc
        </Navbar.Brand>
        <div style={{display: 'flex', flex: '1', justifyContent: 'flex-end'}}>
          <Nav.Link href="employers">Employers</Nav.Link>
          <Nav.Link href="branches">Branches</Nav.Link>
          <Nav.Link href="users">Users</Nav.Link> 
        </div> 
    </Navbar>
  )
}

export default Header