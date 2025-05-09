import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import bg001 from '../assets/Login Page Images/log.jpg'; // Your background image

const CustomNavbar = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const itemList = [
    { text: t('navbarHome'), to: '/' },
    { text: t('navbarAbout'), to: '/about' },
    { text: t('navbarContact'), to: '/contact' },
    { text: t('navbarLogin'), to: '/login' },
    { text: t('navbarRegister'), to: '/register' }
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${bg001})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(5px)', // Adjust blur intensity here
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: '-1', // Ensure the background stays behind content
      }}
    >
      <div
        style={{
          backdropFilter: 'blur(5px)', // Blurs the content slightly
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/">
              V-Config
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {itemList.map((item) => {
                  const { text, to } = item;
                  const isActive = location.pathname === to;

                  return (
                    <Nav.Link
                      key={text}
                      as={Link}
                      to={to}
                      style={{
                        color: isActive ? '#fff' : '#ccc',
                        borderBottom: isActive ? '2px solid #fff' : 'none',
                        textDecoration: 'none',
                        margin: '0 1rem',
                      }}
                      onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                      onMouseOut={(e) => e.currentTarget.style.color = isActive ? '#fff' : '#ccc'}
                    >
                      {text}
                    </Nav.Link>
                  );
                })}

                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Language
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => changeLanguage('mr')}>मराठी</Dropdown.Item>
                    <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
                    <Dropdown.Item onClick={() => changeLanguage('hi')}>हिंदी</Dropdown.Item>
                    <Dropdown.Item onClick={() => changeLanguage('de')}>Deutsch</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default CustomNavbar;
