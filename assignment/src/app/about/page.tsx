import React from 'react'
import NavbarPage from '@/components/Navbar'
import styles from "@/app/styles/modules/about.module.css"

const AboutPage = () => {
  return (
    <>
    <NavbarPage/>
    <h1 className={styles.about}>This is  my About Page.</h1>
    </>
  )
}

export default AboutPage
