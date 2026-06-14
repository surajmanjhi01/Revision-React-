import React from 'react'
import styles from'./Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={`${styles.Navbar} ${styles.container}`}>
        <div className="logo">
              <img src="/logo.png" alt="logo" />
        </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
