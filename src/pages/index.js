import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
    const Posts = edges.map(({ node: { frontmatter: { title, path } } }) => (
        <div>
            <Link key={path} to={path}>
                {title}
            </Link>
        </div>
    ));

    return (
        <div>
            <h2>Post list</h2>
            {Posts}
        </div>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                    }
                }
            }
        }
    }
`;
