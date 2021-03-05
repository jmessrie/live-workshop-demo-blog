import * as React from "react"
import Layout from "../../components/layout"
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"

const BlogPage = ({data}) => {
  return (
    <Layout>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery($slug: String) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        date(formatString: "MMMM DD YYYY")
        title
      }
      body
    }
  }
`

export default BlogPage