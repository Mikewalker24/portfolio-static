import React, { Component } from 'react'
import styled from 'styled-components'
import { siteTitle } from '../../../data/SiteConfig'
import Hamburger from './Hamburger';

export default class Header extends Component {
  state = {
    isOpen: false,
  }

  handleClick = (e) => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {    
    const { navItems, location } = this.props;
    const { isOpen } = this.state;

    return (
      <HeaderElement
        isHome={location.pathname === "/"}
      >
        <Hamburger color="#fff" handleClick={this.handleClick} isOpen={isOpen} />
        <Nav className={ isOpen ? 'open' : ''}>
          <ul>
            {navItems.map(link => (
              <li key={link.id}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </Nav>
      </HeaderElement>
    )
  }
}

const HeaderElement = styled.header`
  position: absolute;
  background: ${({ isHome }) => (isHome ? "transparent" : "#143329")};
  min-height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
`

const Nav = styled.nav`
  position: absolute;
  left: -400px;
  z-index: 5;
  transition: all 0.3s ease;
  white-space: nowrap;
  transition: all 0.3s ease;
  
  &.open {
    left: 0;
    z-index: 5;
    white-space: nowrap;
    padding-left: 10%;
  } 

  ul {
    margin: 0;
  }
  
  li {
    display: inline;
  }

  a {
    padding: 2%;
    color: white;
    transition: all 0.2s ease;
    font-family: 'Adobe Garamond Pro', Garamond, serif;
    font-style: italic;
    letter-spacing: 0.08em;
  }
`