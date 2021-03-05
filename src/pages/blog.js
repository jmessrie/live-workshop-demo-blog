import * as React from "react"
import Layout from "../components/layout"
import {Link, graphql} from "gatsby"

const BlogsPage = ({data}) => {
  return (
    <Layout>
      <ul>
        {data.allMdx.nodes.map((node) =>
          <li>
            <Link to={node.slug}>{node.frontmatter.title}</Link>
          </li>
        )}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query MyBlogsQuery {
    allMdx {
      nodes {
        body
        frontmatter {
          title
        }
        slug
      }
    }
  }
`

export default BlogsPage