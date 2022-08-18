<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Start developing.**

    To run your site locally:

    ```shell
    cd my-personal-website/
    gatsby develop
    ```

2.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

3.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

This website has not been deployed yet - will probably use Google Firebase

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)

## Syntax Hints

  - In JSX, you can embed any JavaScript expression by wrapping it with `{}`. This way, you can access a prop of an object. 

  - Use the `Link` component for linking between pages within your site. For external links to pages not created by your Gatsby site, use the regular HTML `<a>` tag.

  - To apply classes to React components, use the `className` prop

## Plugins 

To add a plugin to your site, you’ll use the following process:

1. Install the plugin using npm.
  ```shell
  npm install plugin-name
  ```
  This will add the plugin as a dependency in your `package.json` and `package-lock.json` files

2. Configure the plugin in your site’s `gatsby-config.js` file.
  Your `gatsby-config.js` file contains information about your site, including configuration for plugins. You can add a plugin to the `plugins` array
  After you make updates to your gatsby-config.js file, you’ll need to restart your gatsby develop process for your changes to be picked up

3. Use the plugin features in your site, as needed.