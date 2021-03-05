import * as React from "react"
import Layout from "../../components/layout"
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import {GatsbyImage, getImage} from "gatsby-plugin-image"

const BlogPage = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt="" />
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
        hero_image {
          childImageSharp {
            gatsbyImageData(
              formats: [JPG,WEBP,AVIF]
              placeholder: TRACED_SVG
              avifOptions: {speed: 10}
            )
          }
        }
      }
      body
    }
  }
`

export default BlogPage