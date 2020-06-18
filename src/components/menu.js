import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Menu() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Logan Anderson</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="https://docs.google.com/document/d/16QJ6ue2xNkPFQO6nVeTuccWsxeG-6km8CD6VHDQCb0w/edit?usp=sharing"
                        target="_blank">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav>
                <Nav.Link href="https://logana.dev">Blog</Nav.Link>
            </Nav>
        </Navbar>
    )
}
