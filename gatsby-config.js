module.exports = {
  siteMetadata: {
    title: "Zoe Despature",
    siteUrl: `https://www.yourdomain.tld`,
    description: "A wesbite where I put forward my skills and experiences"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `/Users/zoedespature/Desktop/my-personal-website/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
}
