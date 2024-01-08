import React from 'react'
import Link from 'next/link'
import styles from "./header.module.css"
const Header = () => {
  return (
    <div>
      <div className={`${styles.row} ${styles.paddings}`}>
        <div>
            <Link href='work'>work</Link>
            <Link href='cooperation'>cooperation</Link>
        </div>
        <div>
            light/dark modes
            length
            currency
        </div>
      </div>
      <div className={`${styles.row} ${styles.paddings} ${styles.verticalCenter}`}>
        <div className={`${styles.row} ${styles.verticalCenter}`}>
            <img className={styles.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavf5uTgzdyrio1Kzx8DwCNLvl4OPBULa2pMe0LHLEjg&s" alt="" />
            <input placeholder='search' className={styles.search} />
        </div>
        <div className={styles.row}>
            <Link href='basket'>
                <img className={styles.basket} src="data:image/png;base64,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" alt="" />
            </Link>
            <Link href='login' className={styles.signInBtn}>Sign in</Link>
        </div>

      </div>
      <div className={`${styles.menu} ${styles.row}`}>
        <div className={`${styles.categories} ${styles.dropdown}`}>
            <span>categories</span>
            <div className={`${styles.dropdownContent}`}>
                <p>Hello World!</p>
            </div>
        </div>
        <div className={`${styles.menuList} ${styles.row}`}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact-us">Contact us</Link>
          <Link href="/blog">blog</Link>
        </div>
      </div>
    </div>
  )
}

export default Header