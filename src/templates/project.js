import React from 'react'
import { graphql } from 'gatsby';
import { useLocalRemarkForm, remarkForm, DeleteAction } from 'gatsby-tinacms-remark'
import ReactMarkdown from 'react-markdown'

import Layout from "../components/layout"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import SEO from "../components/seo"


const Template = ({ data }) => {
    const [post] = useLocalRemarkForm(data.markdownRemark);

    return (
        <Layout>
            <SEO title={post.frontmatter.title}
                description={`${post.frontmatter.description} Logan Anderson complete this project.`}
            />
            <div>
                <Breadcrumb id="no-background">
                    <Breadcrumb.Item href="/">
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/projects">
                        Projects
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        {post.frontmatter.title}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <hr />

                <ReactMarkdown source={post.rawMarkdownBody}> 
                </ReactMarkdown>
                <p>Code is available on GitHub <a target="_blank" rel="noopener noreferrer" href={post.frontmatter.gitLink} >here</a> </p>
            </div>
        </Layout>

    )
}
export const postQuery = graphql`
    query PostByPath($path: String!){
        markdownRemark(frontmatter: { path: {eq: $path}}){
            ...TinaRemark
            html
            frontmatter {
                path
                title
                date
                gitLink
                description
            }
        }
    }
`
const ProjectForm = {
    label: 'Project',
    actions: [DeleteAction],
    fields: [
        {
            label: 'Path',
            name: 'frontmatter.path',
            description: 'Enter the URL',
            component: 'text',
        },
        {
            label: 'Title',
            name: 'frontmatter.title',
            description: 'Enter the title of the project here',
            component: 'text',
        },
        {
            label: 'Date',
            name: 'frontmatter.date',
            description: 'Enter the date of the project here',
            component: 'text',
        },
        {
            label: 'GitHub Link',
            name: 'frontmatter.gitLink',
            description: 'Enter the github link of the project here',
            component: 'text',
        },
        {
            label: 'Description',
            name: 'frontmatter.description',
            description: 'Enter the project description',
            component: 'textarea',
        },
        {
            label: 'Content',
            name: 'rawMarkdownBody',
            description: 'Enter content',
            component: 'markdown',
        },

    ],
}


export default remarkForm(Template, ProjectForm)
