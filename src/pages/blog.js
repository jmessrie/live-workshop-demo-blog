import * as React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"

const BlogPage = ({data}) => {
  return (
    <Layout>
      <ul>
        {data.allFile.nodes.map((el) => <li>{el.name}</li>)}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`

export default BlogPage