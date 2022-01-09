import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div className="container-fluid" >
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MJVideo
          </Typography>
          <Button color="secondary" variant="contained"  component={Link} to="/Login">Login</Button>
          <Button color="success" variant="contained" component={Link} to="/Register">Register</Button>
          <Button color="info" variant="contained" component={Link} to="/AddVideo" >AddVideo</Button>
          <Button color="warning" variant="contained" component={Link} to="/VideoList">VideoList</Button>
          <Button color="error" variant="contained" component={Link} to="/ViewVideo" >ViewVideo</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Appbar;
