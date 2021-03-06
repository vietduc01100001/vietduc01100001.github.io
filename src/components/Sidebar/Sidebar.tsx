import React from 'react'
import Author from './Author'
import Contacts from './Contacts'
import Copyright from './Copyright'
import Menu from './Menu'
import { useSiteMetadata } from '../../hooks'
import styles from './Sidebar.module.scss'

interface Props {
  isIndex?: boolean
}

const Sidebar: React.FC<Props> = ({ isIndex }) => {
  const { name, author, copyright, menu } = useSiteMetadata()

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author siteName={name} author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  )
}

export default Sidebar
