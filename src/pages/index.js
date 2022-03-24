// Step 1: Import React
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import {StaticImage} from 'gatsby-plugin-image'

// styles

// data

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
      <p> This is a website about Peppa_pig_Family!
      </p>

      <StaticImage

        alt="小猪佩奇🐷🐷"
        src="/Users/zhuningli/Desktop/NODE.JS/my-gatsby-site/src/images/cropped-peppa_logo.png"
        layout="constrained"
      
      />

    </Layout>
     
  )
}




// Step 3: Export your component
export default IndexPage
