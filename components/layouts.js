// @flow
import React from 'react'
import HeadMeta from './head'
import PageHeader from '../components/nav'

// types
import type { Element } from 'React'

type Props = {
  children?: Element<any>,
  hideTopNav?: boolean,
  meta?: {
    title?: string,
    description?: string
  }
}

/**
 * Foundational page layout component, including optional page header
 * 
 * @param {Object} [meta] - metadata for this page (refer to /components/head.js)
 * @param {boolean} [hideTopNav=false] - hide the top navigation bar.
 * @param {*} [children] - HTML or JSX to render inside <main>
 */
const Page = ({ meta, children, hideTopNav }: Props) => (
  <div>
    <HeadMeta meta={meta} />
    {!hideTopNav && <PageHeader />}
    <main>{children}</main>
  </div>
)

Page.defaultProps = {
  hideTopNav: false
}
export default Page
