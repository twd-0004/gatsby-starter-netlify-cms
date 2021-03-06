import { useStaticQuery, graphql } from "gatsby"

export const useTestimonialData = () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
          query testimonialData{
            __typename
            allMarkdownRemark (
              filter: { frontmatter: { templateKey: { eq: "product-page" } } }
            ) {
              nodes {
                frontmatter {
                  testimonials {
                    author
                    quote
                    industry
                    image {
                      publicURL
                    }
                    divider {
                      publicURL
                    }
                  }
                }
              }
            }
        }
        `)
    return allMarkdownRemark
}
