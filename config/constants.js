/**
 * Site-wide config and constants
 * @const {string} siteTitle - The app name or site title for <title> and metadata.
 * @const {string} siteURL - URL where the site will be deployed.
 * @const {string} siteTitleSepCharacter - Character to separate page title string from `siteTitle`, e.g. 'Contact · MyApp'
 * @const {string} basicTextColorClass - default color for all text elements
 * @const {string} basicTextFontClass - default font for all text elements
 * @const {string} defaultBrandColour - accent/contrast or brand color
 * @const {string} basicStyle - basic classes to apply to the <body> tag in pages/_document.js
 * @const {string} basicColumnStyle - classes for default width and alignment for body content blocks
 * @const {string} heroColumnStyle - full-width 'hero' block  
 * @const {string} narrowColumnStyle - narrow block
 */

import classNames from 'classnames'

export const siteTitle = 'MyApp'
export const siteURL = 'https://myapp.com'
export const siteTitleSepCharacter = '·'

export const basicTextColorClass = 'near-black'
export const basicTextFontClass = 'sans-serif'
export const defaultBrandColour = '#000000'

export const basicStyle = classNames(basicTextColorClass, basicTextFontClass)

export const basicColumnStyle = 'mw-none center w-90 w-90-ns mw8-ns'
export const heroColumnStyle = 'mw-none center w-100'
export const narrowColumnStyle = 'mw-none center w-50 w-50-ns mw5-l'
