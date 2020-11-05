import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box, IconButton } from "@material-ui/core";
import { Message, MoreVert } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey[100],
    height: "4rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3px 20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function SidebarTop() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar
        src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"
        variant="circle"
      />
      <Box>
        <IconButton>
          <Message />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </Box>
    </div>
  );
}

export default SidebarTop;
