import type { FC } from "react"

import "@mui/material-pigment-css/styles.css"

// import Container from "@mui/material/Container"
import Container from "@mui/material-pigment-css/Container"
// import Grid from "@mui/material-pigment-css/Grid"
import Stack from "@mui/material-pigment-css/Stack"
import CircularProgress from "@mui/material/CircularProgress"

const A = (
  <>
    {/* <CircularProgress /> */}

    {/* <Stack>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
    </Stack>
    <Stack>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
    </Stack> */}

    <Container maxWidth="md">
      <p>a</p>
    </Container>
  </>
)

export const TopPage: FC = () => {
  return A
}
