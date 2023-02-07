import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Box,
  Button,
  Tabs,
  Toolbar,
  Typography,
  Tab,
} from "@mui/material";
import { authActions } from "../store";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState(0);
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "purple" }}>
      <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={Link} to="/blogs" label="All Blogs"></Tab>
              <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"></Tab>
              <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog"></Tab>
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <Button
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Login
            </Button>
          )}
          {!isLoggedIn && (
            <Button
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Signup
            </Button>
          )}
          {isLoggedIn && (
            <Button
              onClick={()=>dispatch(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
