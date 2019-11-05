import React from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


export const AboutPageTemplate = ({ 
  title,
  subtitle,
  headerImage,
  what,
  how,
  why,
  coreValues,
  imageA,
  imageB,
  imageC,
  imageD
 }) => {


  return (
    <div>
    <div
      className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!headerImage.childImageSharp ? headerImage.childImageSharp.fluid.src : headerImage
          })`,
          backgroundPosition: `bottom`,
          backgroundAttachment: `fixed`,
        }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
          width: '75%'
        }}
      >
        <h1 
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subtitle}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
          <div className="columns">
            <div className="column is-full">
                  <div className="tile"
                  sx={{
                    fontFamily: "heading",
                    fontSize: 6,
                    margin: 3,
                    fontWeight: "heading",
                  }}>
                    {what.header}
                  </div>
                  <div className="columns is-vcentered">
                    <div className="column">
                      <div className="tile"
                      sx={{
                        backgroundColor: "primary",
                        borderLeft: "body",
                        borderLeftColor: "secondary",
                        fontFamily: "body",
                        fontSize: 4,
                        padding: 3,
                        margin: 3,
                        fontWeight: "body",
                        borderRadius: "body",
                        boxShadow: "body",
                      }}>
                        {what.tagline}
                      </div>
                      <div className="tile"
                      sx={{
                        backgroundColor: "primary",
                        borderLeft: "body",
                        borderLeftColor: "secondary",
                        fontFamily: "body",
                        fontSize: 4,
                        padding: 3,
                        margin: 3,
                        fontWeight: "body",
                        borderRadius: "body",
                        boxShadow: "body",
                      }}>
                        {what.content1}
                      </div>
                    </div>
                    <div className={"column " + (imageA.widthOptions)}>
                      <div
                      sx={{
                        margin: 3,
                      }}>
                        <PreviewCompatibleImage imageInfo={imageA}/>
                      </div>
                    </div>
                  </div>
                  <div className="tile"
                  sx={{
                    backgroundColor: "primary",
                    borderLeft: "body",
                    borderLeftColor: "secondary",
                    fontFamily: "body",
                    fontSize: 4,
                    padding: 3,
                    margin: 3,
                    fontWeight: "body",
                    borderRadius: "body",
                    boxShadow: "body",
                  }}>
                        {what.content2}
                  </div>
                  <div className="tile "
                  sx={{
                    fontFamily: "heading",
                    fontSize: 6,
                    fontWeight: "heading",
                    margin: 3,
                    marginTop: 6,
                  }}>
                    {how.header}
                  </div>
                      <div className="tile"
                      sx={{
                        backgroundColor: "primary",
                        borderLeft: "body",
                        borderLeftColor: "secondary",
                        fontFamily: "body",
                        fontSize: 4,
                        padding: 3,
                        fontWeight: "body",
                        borderRadius: "body",
                        boxShadow: "body",
                        margin: 3,
                      }}>
                            {how.tagline}
                      </div>
                      <div className="columns is-vcentered">
                        <div className={"column  " + (imageB.widthOptions)}
                        sx={{
                          margin: 3,
                        }}>
                            <PreviewCompatibleImage imageInfo={imageB}/>
                        </div>
                        <div className="column">
                          <div className="tile"
                          sx={{
                            backgroundColor: "primary",
                            borderLeft: "body",
                            borderLeftColor: "secondary",
                            fontFamily: "body",
                            fontSize: 4,
                            padding: 3,
                            fontWeight: "body",
                            borderRadius: "body",
                            boxShadow: "body",
                            margin: 3,
                          }}>
                            {how.content1}
                          </div>
                        </div>
                      </div>
                      <div className="tile"
                          sx={{
                            backgroundColor: "primary",
                            borderLeft: "body",
                            borderLeftColor: "secondary",
                            fontFamily: "body",
                            fontSize: 4,
                            padding: 3,
                            fontWeight: "body",
                            borderRadius: "body",
                            boxShadow: "body",
                            margin: 3,
                          }}>
                            {how.content2}
                      </div>
                  <div className="columns is-vcentered">
                    <div className="column">
                        <div className="tile"
                        sx={{
                          fontFamily: "heading",
                          fontSize: 6,
                          fontWeight: "heading",
                          margin: 3,
                          marginTop: 3,
                        }}>
                          {why.header}
                        </div>
                        <div className="tile"
                        sx={{
                          backgroundColor: "primary",
                          borderLeft: "body",
                          borderLeftColor: "secondary",
                          fontFamily: "body",
                          fontSize: 4,
                          padding: 3,
                          fontWeight: "body",
                          borderRadius: "body",
                          boxShadow: "body",
                          margin: 3,
                        }}>
                          {why.tagline}
                        </div>
                        <div className="tile"
                        sx={{
                          backgroundColor: "primary",
                          borderLeft: "body",
                          borderLeftColor: "secondary",
                          fontFamily: "body",
                          fontSize: 4,
                          padding: 3,
                          fontWeight: "body",
                          borderRadius: "body",
                          boxShadow: "body",
                          margin: 3,
                        }}>
                            {why.content1}
                        </div>
                        <div className="tile "
                        sx={{
                          backgroundColor: "primary",
                          borderLeft: "body",
                          borderLeftColor: "secondary",
                          fontFamily: "body",
                          fontSize: 4,
                          padding: 3,
                          fontWeight: "body",
                          borderRadius: "body",
                          boxShadow: "body",
                          margin: 3,
                        }}>
                            {why.content2}
                        </div>
                    </div>
                    <div className={"column " + (imageC.widthOptions)}>
                        <div className=""
                        sx={{
                          margin: 3,
                        }}>
                          <PreviewCompatibleImage imageInfo={imageC}/>
                        </div>
                    </div>
                  </div>
                  <div className="tile "
                  sx={{
                    fontFamily: "heading",
                    fontSize: 6,
                    fontWeight: "heading",
                    margin: 3,
                    marginTop: 6,
                  }}>
                    {coreValues.header}
                  </div>
                      <div className="tile"
                      sx={{
                        backgroundColor: "primary",
                        borderLeft: "body",
                        borderLeftColor: "secondary",
                        fontFamily: "body",
                        fontSize: 4,
                        padding: 3,
                        fontWeight: "body",
                        borderRadius: "body",
                        boxShadow: "body",
                        margin: 3,
                      }}>
                            {coreValues.tagline}
                      </div>
                      <div className="columns is-vcentered">
                        <div className="column">
                          <div className="tile"
                          sx={{
                            backgroundColor: "primary",
                            borderLeft: "body",
                            borderLeftColor: "secondary",
                            fontFamily: "body",
                            fontSize: 4,
                            padding: 3,
                            fontWeight: "body",
                            borderRadius: "body",
                            boxShadow: "body",
                            margin: 3,
                          }}>
                            {coreValues.content1}
                          </div>
                        </div>
                        <div className={"column  " + (imageD.widthOptions)}
                        sx={{
                          margin: 3,
                        }}>
                            <PreviewCompatibleImage imageInfo={imageD}/>
                        </div>
                      </div>
                      <div className="tile"
                          sx={{
                            backgroundColor: "primary",
                            borderLeft: "body",
                            borderLeftColor: "secondary",
                            fontFamily: "body",
                            fontSize: 4,
                            padding: 3,
                            fontWeight: "body",
                            borderRadius: "body",
                            boxShadow: "body",
                            margin: 3,
                          }}>
                            {coreValues.content2}
                      </div>
                </div>
              </div>
            </div>
    </section>
  </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        headerImage={frontmatter.headerImage}
        what={frontmatter.what}
        how={frontmatter.how}
        why={frontmatter.why}
        coreValues={frontmatter.coreValues}
        imageA={frontmatter.imageA}
        imageB={frontmatter.imageB}
        imageC={frontmatter.imageC}
        imageD={frontmatter.imageD}/>
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } })  {
      html
      frontmatter {
        title
        subtitle
        headerImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        what {
              tagline
              content1
              content2
              header
            }
        how {
              tagline
              content1
              content2
              header
            }
        why {
              tagline
              content1
              content2
              header
            }
        coreValues {
              tagline
              content1
              content2
              header
            }
        imageA {
              widthOptions
              image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        }
        imageB {
          widthOptions
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        imageC {
          widthOptions
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        imageD {
          widthOptions
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
