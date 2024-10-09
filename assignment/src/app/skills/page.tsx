import React from 'react'
import NavbarPage from '@/components/Navbar'
import styles from "@/app/styles/modules/skills.module.css"

const SkillsPage = () => {
  return (
    <>
    <NavbarPage/>
    <h1 className={styles.skills}>This is  my Skills Page.</h1>
    </>
  )
}

export default SkillsPage