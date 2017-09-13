import React from 'react'
import classNames from 'classnames'

import { siteTitle, defaultBrandColour } from '../config/constants'

const PageHeader = () => {
  return (
    <nav
      className="pv3 pv3-ns tc mb4"
      style={{ boxShadow: '0 0 2px rgb(33, 33, 33)' }}
    >
      <a
        className={classNames('link f4 f5-ns dib', defaultBrandColour)}
        href="/"
        title="Home"
      >
        {siteTitle}
      </a>
    </nav>
  )
}
export default PageHeader
