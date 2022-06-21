const crypto = require(`crypto`)

exports.createPages = ({ actions, reporter }) => {
  actions.createPage({
    path: "/",
    component: require.resolve("./src/pages/index.js"),
  })
}

exports.sourceNodes = (
  { actions: { createTypes, createNode } },
  {
    // SEO
    title = "Allen Lin",
    description = "student entrepreneur. software developer. musician. tech enthusiast.",
    siteUrl = "https://allenlinsh.com",
    appName = "portfolio",
  }
) => {
  createTypes(`
    type SEO implements Node {
      title: String!
      description: String!
      siteUrl: String!
      appName: String!
    }
  `)

  const context = {
    title,
    description,
    siteUrl,
    appName,
  }

  createNode({
    ...context,
    id: `context`,
    parent: null,
    children: [],
    internal: {
      type: `Context`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(context))
        .digest(`hex`),
      content: JSON.stringify(context),
      description: `Context`,
    },
  })
}
