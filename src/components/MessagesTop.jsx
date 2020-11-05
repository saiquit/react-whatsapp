import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Avatar, Box, IconButton, Typography } from "@material-ui/core";
import { Search, MoreVert } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey[300],
    height: "4rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3px 20px",
  },
}));

function MessagesTop() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Avatar
          src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"
          variant="circle"
          style={{ marginRight: 10 }}
        />
        <Typography
          style={{ color: theme.palette.grey[700] }}
          variant="body1"
          component="p"
        >
          Name
        </Typography>
      </Box>
      <Box>
        <IconButton>
          <Search />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </Box>
    </div>
  );
}

export default MessagesTop;
