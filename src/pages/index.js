import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout title="Home Page">
      <p>Hi There</p>
      <StaticImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8PHFLoV72tjS52YDonxy4zRZdnwxI7lbXg&usqp=CAU" alt="Whammy!" />
    </Layout>
  )
}

export default IndexPage
