import React from "react";
import { Grid } from "@material-ui/core";

function MyGrid() {
  return (
    <div>
      <Grid container>
        <Grid item lg={4}>
          Hello
        </Grid>
        <Grid item lg={4}>
          Hello
        </Grid>
        <Grid item lg={4}>
          Hello
        </Grid>
      </Grid>
    </div>
  );
}

export default MyGrid;
