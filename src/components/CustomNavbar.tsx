"use client";

import Link from "next/link";
import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Stack direction="horizontal" gap={3}>
              <Link href="/regular">Regular</Link>

              <Link href="/swr">SWR</Link>

              <Link href="/real_time">Real-Time</Link>
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
