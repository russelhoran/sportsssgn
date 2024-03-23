import React from 'react'
import CardCompo from './components/CardCompo'
import styles from '/styles.module.css'

const page = () => {
  return (
    <div className={styles.container}  style={{ width: '1000px', height: '615px', left:'200px'  }}>
      <h1 className={styles.sportsHed}>Sports</h1>
   <CardCompo/>
    </div>
  )
}

export default page
