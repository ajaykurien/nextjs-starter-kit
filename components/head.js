import Head from 'next/head'

import React from 'react'

import { siteTitle, siteURL, siteTitleSepCharacter } from '../config/constants'

/**
 * Customise the contents of the <head> tag for each page.
 * 
 * @param {Object} [meta] - metadata object
 * @param {string} [meta.title] - page title
 * @param {string} [meta.description] - page description
 * @param {string} [meta.canonicalURL] - canonical URL for OpenGraph tag
 * 
 * @returns React.StatelessComponent
 */
const HeadMeta = ({ meta } = this.props) => {
  const displayTitle =
    (meta.title && meta.title + ' ' + siteTitleSepCharacter + ' ') + siteTitle
  const displayCanonicalURL =
    (meta.canonicalURL && `${siteURL}${meta.canonicalURL}`) || siteURL

  return (
    <Head>
      <title>{displayTitle}</title>
      <meta property="description" content={meta.description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={displayCanonicalURL} />
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:locale:alternate" content="en_US" />
    </Head>
  )
}
export default HeadMeta
