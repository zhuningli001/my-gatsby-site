import * as React from 'react'
import { ReactDOM } from 'react'
import Layout from '../../components/layout'
import { graphql,Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'



const Blog = ({data}) =>{
    console.log (data)

    return (
        
            <Layout pageTitle="My Blog" >
                
                    {data.allMdx.nodes.map(node =>{
                        return <article key={node.id}> 

                             <Link to={node.slug}>
                                <h1> {node.frontmatter.title}  </h1>
                            </Link>
                            <p> {node.frontmatter.date} </p>                    
                            
                        </article>;                        
                       
                            }
                        )
                    }
                    
               


                <p>Hello, this is Peppa Pig's blog about her family.</p>
                <div className='BlogImages' display="grid" fontSize='1px' >
                    <ul> 
                        <p>this is mummy_pig {} </p>
                    <StaticImage
                        alt=''
                        src='/Users/zhuningli/Desktop/NODE.JS/my-gatsby-site/src/images/mummy_pig_splat.png'
                        />
                    </ul>

                    <ul>
                         <p>this is mummy_pig {} </p>
                    <StaticImage
                        alt=''
                        src='/Users/zhuningli/Desktop/NODE.JS/my-gatsby-site/src/images/daddy_pig_splat.png'
                        />
                    </ul>

                    <ul>
                        <p>this is granny_pig {} </p>
                    <StaticImage
                        alt=''
                        src='/Users/zhuningli/Desktop/NODE.JS/my-gatsby-site/src/images/granny_pig_splat.png'
                        />
                    </ul>
                </div>

            </Layout>
    )

}


export const query = graphql`
query  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        slug
        frontmatter {
          title
          date(formatString: "dddd, MMMM D, YYYY")
        }
      }
    }
  }

`

 
  
  

export default Blog