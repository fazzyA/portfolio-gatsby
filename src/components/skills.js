import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Paper } from "@material-ui/core"

const Skills = () => {
    const data = useStaticQuery(graphql`
    {
      allContentfulSkills {
        edges {
          node {
            level
            name
            yearsOfExperience
          }
        }
      }
    }
  `)
    return (
        <Grid container spacing={3}>
            {
                data.allContentfulSkills.edges.map(
                    (item) => (
                        <Grid item xs={3}>
                            <Paper>{item.node.name}<br/>{item.node.level}</Paper>
                        </Grid>

                    )
                )

            }
        </Grid>
    )
}

export default Skills

