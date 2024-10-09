import React from 'react'
import NavbarPage from '@/components/Navbar'
import styles from "@/app/styles/modules/contact.module.css"

const ContactPage = () => {
  return (
    <>
    <NavbarPage/>
    <h1 className={styles.contact}>This is my Contact Page.</h1>
    </>
  )
}

export default ContactPage