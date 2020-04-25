import React from "react"
import { graphql } from 'gatsby';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"

import Test from "../components/part-test"
import Layout from "../components/layout"
import compImg from '../images/IMG_0407-small.jpg'
import SEO from "../components/seo"
import Image from "react-bootstrap/Image"



const IndexPage = ({ data }) => (
  <Layout
    Top={<Test/>}
  >

    <SEO title="Home"
      description="The personal website of Logan Anderson. Logan Anderson is a web developer in Prince Edward Island. His main interest's are full-stack development. He addends the University of Prince Edward Island. He can make websites like this one"
    />
    <div>
      <Row className=" justify-content-center">
        <Col >
          <h1 class="header py-5 text-center">
            Logan Anderson
          </h1>
        </Col>
      </Row>
      <Row className=" justify-content-center">
        <Col xs="auto" className="mb-4">
          <Button href="/projects" variant="primary">See Projects</Button>
        </Col>
      </Row>


      {/* <!-- about me --> */}
      <Row>
        <Col md='9'>
          <h3 class="my-2">A Little bit about Logan</h3>
          <p class="">Logan Anderson is a part-time web developer and full-time student completing a double
          major in
          Computer Science and Math. He's passionate about computer science and learning. His main interests
          include
          full-stack development, machine learning, Linux, and competitive programming. He loves to learn and is
          always
                    trying to expand his knowledge base by reading and completing courses online and at school</p>
        </Col>
        <div class="col-md-3">
          <Image src={compImg} alt="computer" fluid rounded />
        </div>
      </Row>
      <Row className="row mt-4" id="more-about-me">

        <Col md='9'>
          {/* <h2 class="pt-3"></h2> */}
          {/* <!-- skills --> */}
          <h4 class="py-2">Programming Languages and technologies</h4>
          <Row className="justify-content-center">
            <Col
              xs={12}
              md={3}
            >
              <ul>
                <li>Java</li>
                <li>Javascript</li>
                <li>Nodejs</li>
                <li>Express</li>
                <li>Python</li>
                <li>django</li>
              </ul>
            </Col>
            <Col xs={12} md={3}
            >
              <ul>
                <li>c / c++</li>
                <li>Shell Scripting</li>
                <li>AWS</li>
                <li>git (github and gitlab)</li>
                <li>DynamoDB</li>
                <li>SQL</li>
              </ul>
            </Col>
          </Row>

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
        </Col>
        {/* recent projects */}
        <Col md='3' >
          <h3 class='pt-3'>
            Recent Projects
          </h3>
          {data.allMarkdownRemark.edges.slice(0, 2).map(post => (
            <div key={post.node.id} class="pb-2">
              <Card>
                <Card.Body>
                  <Card.Title>
                    {post.node.frontmatter.title}
                  </Card.Title>
                  <Card.Text>
                  <small>{post.node.frontmatter.description} </small>
                  </Card.Text>
                  <Card.Link href={post.node.frontmatter.path}>
                  See More
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Col>

      </Row>
    </div>
  </Layout>
)

export const pageQuery = graphql`
    query rprojectIndexQuery{
        
            allMarkdownRemark {
              edges {
                node {
                id
                  frontmatter {
                    title
                    path
                    date
                    author
                    description
                  }
                }
              }
            }
          }
          
`
export default IndexPage
