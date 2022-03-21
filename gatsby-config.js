module.exports = {
    siteMetadata: {
      title: `Ningli's Gatsby Site`,
        siteUrl: `https://www.yourdomain.tld`,
          
    },
    plugins: [
      "gatsby-plugin-gatsby-cloud",
      "gatsby-plugin-image",
      {resolve:"gatsby-plugin-sharp",
          options:{
            defaults: {
              formats: [`auto`, `webp`],
              placeholder: `dominantColor`,
              quality: 100,
              breakpoints: [750, 1080, 1366, 1920],
              backgroundColor: `transparent`,
              tracedSVGOptions: {},
              blurredOptions: {},
              jpgOptions: {},
              pngOptions: {},
              webpOptions: {},
              avifOptions: {},
            }
            
          }
    
    },

      {
        resolve:"gatsby-source-filesystem",
        options:{
          name:"blog",
          path:`${__dirname}/blog`,
          
        }
        



      },
      "gatsby-plugin-mdx",
      "gatsby-transformer-sharp",


    ]
}