module.exports = {
    siteMetadata: {
      title: `Ningli's Gatsby Site`,
        siteUrl: `https://www.yourdomain.tld`,
          
    },
    plugins: [
      "gatsby-plugin-gatsby-cloud",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve:"gatsby-source-filesystem",
        options:{
          name:"blog",
          path:`${__dirname}/blog`,
          

        }
      }
      

    ]
}