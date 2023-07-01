/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import NavDropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';
import { Nav, NavDropdown } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link passHref href="/">
          <a className="navbar-brand" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
            MECHANGE
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Nav className="navbar-nav me-auto">
            <li className="nav-item">
              <Link passHref href="/">
                <a className="nav-link">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/about">
                <a className="nav-link">
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <NavDropdown title="Ministries">
                <NavDropdown.Item passHref href="/men">Men</NavDropdown.Item>
                <NavDropdown.Item href="/women">Women</NavDropdown.Item>
                <NavDropdown.Item href="/music">Music</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav-item">
              <Link passHref href="/">
                <a className="nav-link">
                  Social Media / Livestream
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/giving">
                <a className="nav-link">
                  Giving
                </a>
              </Link>
            </li>
            <button type="button" className="btn btn-danger" onClick={signOut}>
              Sign Out
            </button>
          </Nav>
        </div>
      </div>
    </nav>
  );
}
