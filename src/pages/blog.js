import * as React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"

const BlogPage = ({data}) => {
  return (
    <Layout>
      <ul>
        {data.allMdx.nodes.map((node) =>
          <li>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>
              <MDXRenderer>{node.body}</MDXRenderer>
            </p>
          </li>
        )}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query MyBlogQuery {
    allMdx {
      nodes {
        body
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
      }
    }
  }
`

export default BlogPage