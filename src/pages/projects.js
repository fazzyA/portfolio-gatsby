import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from '@material-ui/core/Grid';
const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProjects {
        edges {
          node {
            title
            demoLink
            githubLink
            image {
              fluid {
                src
              }
              description
            }
          }
        }
      }
    }
  `)
  console.log(data.allContentfulProjects.edges)
  const projectList = data.allContentfulProjects.edges;
  return (
      <div>
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
{
              projectList.map((item)=>(
                  <>
                  <Grid item xs={4}><img src={item.node.image.fluid.src} width={100} height={100} alt=''/></Grid>
                  </>

              ))
          }

</Grid>
      </div>
  )
}

export default Projects
