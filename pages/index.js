import React from 'react'
import Page from '../components/layouts'

import { basicColumnStyle } from '../config/constants'

const Index = () => {
  return (
    <div>
      <Page meta={{ title: 'Home', description: 'Desc' }}>
        <div className={basicColumnStyle}>/index</div>
      </Page>
    </div>
  )
}

export default Index
