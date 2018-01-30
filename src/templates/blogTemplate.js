import React from 'react';
import './blogTemplate.css';

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;

    return (
        <div className="blog-post">
            <h1 className="blog-post__header">{frontmatter.title}</h1>
            <time className="blog-post__time">{frontmatter.date}</time>
            <div className="blog-post__content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "D/MM/YYYY")
                path
                title
            }
        }
    }
`;
