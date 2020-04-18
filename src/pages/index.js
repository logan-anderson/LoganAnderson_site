import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import compImg from '../images/IMG_0407.jpeg'
import SEO from "../components/seo"
import Image from "react-bootstrap/Image"
const IndexPage = (data) => (
  <Layout>
    <SEO title="Home" />
    
    <div>
      <div class="row  align-items-center">
        <div class="col">
          <h1 class="py-5 text-center">
            Welcome to Logan Anderson.ca
          </h1>
        </div>
      </div>
      {/* <!-- about me --> */}
      <div class="row">
        <div class="col-md-9">
          <h3 class="my-2">A Little bit about me</h3>
          <p class="">I am a part-time web developer and full-time student completing a double
          major in
          Computer Science and Math. I am passionate about computer science and learning. My main interests
          include
          full-stack development, machine learning, Linux, and competitive programming. I love to learn and am
          always
                    trying to expand my knowledge base by reading and completing courses online and at school</p>
        </div>
        <div class="col-md-3">
            <Image src={compImg} alt="computer" fluid rounded/>
        </div>
      </div>
      <div class="row align-items-center " id="more-about-me">
        <div class="col">
          <h2 class="pt-3"> More About Me </h2>
          {/* <!-- skills --> */}
          <h4 class="py-2">Programming Languages and technologies I am familiar with</h4>
          <div class="row justify-content-center">
            <div class="col-12 col-md-3">
              <ul>
                <li>Java</li>
                <li>Javascript</li>
                <li>Nodejs</li>
                <li>Express</li>
                <li>Python</li>
                <li>django</li>
              </ul>
            </div>
            <div class="col-12 col-md-3">
              <ul>
                <li>c / c++</li>
                <li>Shell Scripting</li>
                <li>AWS</li>
                <li>git (github and gitlab)</li>
                <li>DynamoDB</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>

          {/* <!-- Courses Complete --> */}
          <h4 class="py-2">Courses Completed</h4>
          <div class="row justify-content-center">
            <div class="col-12 col-md-5">
              <ul>
                <li>Data Structure and Algorithms</li>
                <li>Web Development</li>
                <li>Android Development</li>
              </ul>
            </div>
            <div class="col-12 col-md-5">
              <ul>
                <li><a href="https://www.udemy.com/course/the-web-developer-bootcamp/">The Web Developer
                                    Bootcamp</a></li>
                <li><a href="https://www.udemy.com/course/python-django-dev-to-deployment">Python django Dev
                to
                                    Deployment</a></li>
                <li><a href="https://www.udemy.com/course/aws-machine-learning-a-complete-guide-with-python">AWS
                Machine
                                    Learning a Complete Guide with python</a></li>
              </ul>
            </div>
          </div>
        </div>
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
