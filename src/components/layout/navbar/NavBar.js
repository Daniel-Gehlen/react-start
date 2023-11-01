import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';


function Navbar() {

  const linkStyle = {
    color: 'white',
    textDecoration: 'none', // Remova a sublinhado padrão
  };

  return (
<div className={styles.NavBar}>
  <div className={styles.NavItem}>
    <Link to="/" style={linkStyle}>Home</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section2" style={linkStyle}>Clock</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section3" style={linkStyle}>SeparateButtons</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section4" style={linkStyle}>Gallery</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section5" style={linkStyle}>MirrorButton</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section6" style={linkStyle}>Profiles</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section7" style={linkStyle}>ToDoLists</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section8" style={linkStyle}>About</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section9" style={linkStyle}>ShopingList</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section10" style={linkStyle}>TicTac</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section11" style={linkStyle}>FilterableProducts</Link>
  </div>
</div>

  );
}

export default Navbar;
