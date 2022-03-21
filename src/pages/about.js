// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'



// Step 2: Define your component
const AboutPage = () => {
  return (
     <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    
    <StaticImage
    alt=""
    src="/Users/zhuningli/Desktop/NODE.JS/my-gatsby-site/src/images/mummy_pig_splat.png" 
    />
    
    
    
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage