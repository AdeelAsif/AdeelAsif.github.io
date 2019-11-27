/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const _ = require(`lodash`);

exports.sourceNodes = ({ getNodes, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  const pageNodes = getNodes().filter(
    node => node.internal.type === "wordpress__PAGE"
  );

  pageNodes.forEach(pageNode => {
    let pathFragments = [];
    let tmpNode = pageNode;
    do {
      pathFragments.push(tmpNode.slug);
      tmpNode = pageNodes.find(
        node => node.wordpress_id === tmpNode.wordpress_parent
      );
    } while (tmpNode);

    const path = pathFragments.reverse().join("/");
    createNodeField({
      node: pageNode,
      name: `path`,
      value: path
    });
  });
};