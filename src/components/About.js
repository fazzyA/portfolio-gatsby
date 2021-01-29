import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      allSite {
        edges {
          node {
            siteMetadata {
              title
              para
              description
            }
          }
        }
      }
    }
  `)
  const list = data.allSite.edges
  console.log(data);
  return (
      <div>
    {list.map((item,ind) => (
        <div key={ind}>
        <h1>{item.node.siteMetadata.title}</h1>
        <h6>{item.node.siteMetadata.para}</h6>
        </div>
    ))
    }
    </div>
  )
}
export default About
