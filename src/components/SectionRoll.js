import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
//import PreviewCompatibleImage from './PreviewCompatibleImage'

class SectionRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
          <div className="content">
            {posts &&
              posts.map(({ node: post }) => (
                <div className="" key={post.id}>
                  <article className="section-article">
                    <header>
                      {/* {post.frontmatter.featuredimage ? (
                        <div className="featured-thumbnail">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${
                                post.title
                              }`,
                            }}
                          />
                        </div>
                      ) : null}  */}
                      <h1  className="section-heading">
                        <div className="container">{post.frontmatter.title}</div>
                      </h1>
                    </header>

                    <div className={`container`} dangerouslySetInnerHTML={{ __html: post.html }} />

                  </article>
                </div>
              ))}
          </div>
    )
  }
}

SectionRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query SectionRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "section-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              html
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <SectionRoll data={data} count={count} />}
  />
)
