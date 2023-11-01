import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';


function Navbar() {
  return (
<div className={styles.NavBar}>
  <div className={styles.NavItem}>
    <Link to="/">Home</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section2">Clock</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section3">Separate Buttons</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section4">Gallery</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section5">Mirror Button</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section6">Profiles</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section7">ToDoList Profiles</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section8">About Page</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section9">Shoping List</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section10">Tic tac Toe</Link>
  </div>
  <div className={styles.NavItem}>
    <Link to="/section11">Filterable Product</Link>
  </div>
</div>

  );
}

export default Navbar;
