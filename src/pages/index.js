import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="row  align-items-center">
      <div class="col">
        <h1 class="display-3 py-5 text-center">
          Welcome to Logan Anderson.ca
                </h1>
      </div>
    </div>
    {/* about me */}
    <div class="row">
      <div class="col-md-9">
        <h2 class="my-2">A Little bit about me</h2>
        <p class=" lead">I am a part-time web developer and full-time student completing a double
        major in
        Computer Science and Math. I am passionate about computer science and learning. My main interests
        include
        full-stack development, machine learning, Linux, and competitive programming. I love to learn and am
        always
                    trying to expand my knowledge base by reading and completing courses online and at school</p>
      </div>
    </div>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
