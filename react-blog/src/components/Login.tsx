import React from 'react';
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(5),
    },
    add: {
      textAlign: "left",
    },
    switch: {
      flexGrow: 1,
    },
  })
);

export default function LoginNav() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [Name, setName] = React.useState<string | null>("");
  const [PP, setPP] = React.useState<string | null>("");

  const responseGoogle = (response: any) => {
    setAuth(true);
    setName("Welome " + response.profileObj.name + " !");
    setPP(response.profileObj.imgUrl);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <GoogleLogin
            clientId="371541609248-hnrougnn2i4q649om9fdj870e6hmmkcd.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
                <Typography variant="h6" color="inherit">
                  {Name}
                </Typography>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}