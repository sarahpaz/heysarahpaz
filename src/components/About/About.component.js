import React from "react"
import "./About.styles.css"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/grid"
import Container from "@material-ui/core/Container"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

const About = () => {
  const classes = useStyles

  return (
    <div id="about" className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <div className={classes.paper}>
              Refuse to drink water except out of someone's glass i could pee on
              this if i had the energy so leave dead animals as gifts poop on
              floor and watch human clean up but see owner, run in terror run
              outside as soon as door open stare at wall turn and meow stare at
              wall some more meow again continue staring . Scamper throw down
              all the stuff in the kitchen but paw at beetle and eat it before
              it gets away, for curl up and sleep on the freshly laundered
              towels. Jump up to edge of bath, fall in then scramble in a mad
              panic to get out leave hair on owner's clothes, for instantly
              break out into full speed gallop across the house for no reason.
              Love blinks and purr purr purr purr yawn kitty poochy i like to
              spend my days sleeping and eating fishes that my human fished for
              me we live on a luxurious yacht, sailing proudly under the sun, i
              like to walk on the deck, watching the horizon, dreaming of a good
              bowl of milk but i will ruin the couch with my claws. Mrow loved
              it, hated it, loved it, hated it catty ipsum plop down in the
              middle where everybody walks yet chew foot taco cat backwards
              spells taco cat or lie on your belly and purr when you are asleep.
              Inspect anything brought into the house meow meow, i tell my human
              and i like frogs and 0 gravity need to check on human, have not
              seen in an hour might be dead oh look, human is alive, hiss at
              human, feed me attack feet. Has closed eyes but still sees you
              stuff and things, give attitude purr hopped up on catnip. Lie on
              your belly and purr when you are asleep. Lie on your belly and
              purr when you are asleep.{" "}
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.paper}>
              <img src="https://www.placehold.it/300x300"></img>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default About
