import * as React from 'react'
import { graphql,Link } from "gatsby"
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'


const PhotosPage = () => {   
    return (
        <Layout pageTitle="Family Photos">
            <p> Photos of Peppa_pig_Family!
            </p>

            <StaticImage
            src="https://unsplash.com/photos/HmocsNZO1hs"
            alt="My mom"
            />            
        </Layout>

    )
    
}




function Photos () {   
    return <StaticImage 
    src="https://unsplash.com/photos/HmocsNZO1hs" 
    alt= "My mom"/>
    
    }

    console.log(typeof Photos)    
    
export default PhotosPage 