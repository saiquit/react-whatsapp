import { Grid } from "@material-ui/core";
import React from "react";
import MessagesTop from "../components/MessagesTop";
import SidebarTop from "../components/SidebarTop";

function Home(props) {
  return (
    <Grid container>
      <Grid xs={4} item>
        <SidebarTop />
      </Grid>
      <Grid xs={8} item>
        <MessagesTop />
      </Grid>
    </Grid>
  );
}

export default Home;
