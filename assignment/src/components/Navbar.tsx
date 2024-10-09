import React from 'react'
import Link from 'next/link'
import styles from '@/app/styles/modules/Navbar.module.css'

const NavbarPage = () => {
  return (
    <div className={styles.bg}>
      <Link href={"/"} className={styles.link}>Home</Link>
      <Link href={"/about"} className={styles.link}>About</Link>
      <Link href={"/skills"} className={styles.link}>Skills</Link>
      <Link href={"/contact"} className={styles.link}>Contact</Link>


    </div>
  )
}

export default NavbarPage
