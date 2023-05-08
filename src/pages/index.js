// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <p>I'm making this by following the Gatsby Tutorial.</p>
    <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="..\images\8135-s1920x1920-q60.jpg"
      />
  </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage