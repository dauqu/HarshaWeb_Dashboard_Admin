import React from 'react'
import styles from './main.module.css'

const Switcher = ({ onChange, checked }) => {
  return (
    <label className={styles.switch}>
        <input checked={checked} type="checkbox" onChange={e => onChange(e.target.checked)} />
        <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  )
}

export default Switcher