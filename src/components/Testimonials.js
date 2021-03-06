import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Slide } from 'react-slideshow-image';
import './Animations.css'
import { useTestimonialData } from '../hooks/TestimonialQuery'

const Testimonials = () => {
  let {nodes: testData} =  useTestimonialData()
  let testimonials = testData[0].frontmatter.testimonials
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      //console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

  return(
  <div className="slide-container">
        <Slide {...properties}>
        <div className="each-slide">
          <div className="full-width-image"
          style={{
            backgroundImage: `url(${
              !!testimonials[0].image.childImageSharp ? testimonials[0].image.childImageSharp.fluid.src : testimonials[0].image
            })`,
          }}>
            <span sx={{backgroundColor: "transparent"}} className="is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              {testimonials[0].quote}
              <br />
              <cite> – {testimonials[0].author}</cite>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div className="full-width-image"
          style={{
            backgroundImage: `url(${
              !!testimonials[1].image.childImageSharp ? testimonials[1].image.childImageSharp.fluid.src : testimonials[1].image
            })`,
          }}>
             <span sx={{backgroundColor: "transparent"}} className="is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              {testimonials[1].quote}
              <br />
              <cite> – {testimonials[1].author}</cite>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div className="full-width-image"
          style={{
            backgroundImage: `url(${
              !!testimonials[2].image.childImageSharp ? testimonials[2].image.childImageSharp.fluid.src : testimonials[2].image
            })`,
          }}>
            <span sx={{backgroundColor: "transparent"}} className="is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              {testimonials[2].quote}
              <br />
              <cite> – {testimonials[2].author}</cite>
            </span>
          </div>
        </div>
        </Slide>
  </div>
)}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
