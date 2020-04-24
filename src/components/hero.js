import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import useSiteMetadata from "../hooks/use-site-metadata"

const ImageBackground = styled(BackgroundImage)`
  background-position: top 10% center;
  background-size: cover;
  height: 50vh;
  + * {
    margin-top: 0;
  }
`

const Textbox = styled.div`
  margin: 0;
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100% h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "city.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const { title, description } = useSiteMetadata()
  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <Textbox>
        <h1>{title}</h1>
        <p>{description}</p>
      </Textbox>
    </ImageBackground>
  )
}

export default Hero
