import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';
import { siteTitle } from '../../../data/SiteConfig';
import Hamburger from './Hamburger';

export default class Header extends Component {
  state = {
    isOpen: false,
  };

  easeOutQuart = (x, t, b, c, d) => {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  };

  handleClick = e => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { navItems, location } = this.props;
    const { isOpen } = this.state;
    const isHome = location.pathname === '/';

    return (
      <HeaderElement isHome={isHome}>
        <Hamburger
          color="#fff"
          handleClick={this.handleClick}
          isOpen={isOpen}
        />
        <Nav className={isOpen ? 'open' : ''}>
          <ul>
            {isHome
              ? navItems.map((link, i) => (
                  <li key={i}>
                    <Scrollchor
                      to={link.path}
                      animate={{ duration: 800, easing: this.easeOutQuart }}
                      className="nav-link"
                    >
                      {link.name}
                    </Scrollchor>
                  </li>
                ))
              : navItems.map((link, i) => (
                  <li key={i}>
                    <Link to={link.secondPath}>{link.name}</Link>
                  </li>
                ))}
          </ul>
        </Nav>
      </HeaderElement>
    );
  }
}

const HeaderElement = styled.header`
  position: absolute;
  background: ${({ isHome }) => (isHome ? 'transparent' : '#143329')};
  min-height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

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
`;
