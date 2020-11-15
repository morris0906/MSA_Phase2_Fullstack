import React from "react";
import { 
    EmailShareButton,
    FacebookShareButton,
    LineShareButton,
    LinkedinShareButton,
    EmailIcon,
    FacebookIcon,
    LineIcon,
    LinkedinIcon,
  } from "react-share";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ShareButton: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    fab: {
      margin: theme.spacing(2),
    },
    absolute: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
    share: {
      "& > *": {
        margin: theme.spacing(2),
      },
      textAlign: "center",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(6),
    },
  })
);

export default function SocialMedia() {
    const classes = useStyles();

    return (
        <div className={classes.share}>
            <EmailShareButton url = {"https://somereactblog.azurewebsites.net"}>
            <Avatar className={classes.ShareButton}>
                    <EmailIcon />
                </Avatar>
            </EmailShareButton>
            <FacebookShareButton url={"https://somereactblog.azurewebsites.net"}>
            <Avatar className={classes.ShareButton}>
                    <FacebookIcon />
                </Avatar>
            </FacebookShareButton>
            <LineShareButton url={"https://somereactblog.azurewebsites.net"}>
            <Avatar className={classes.ShareButton}>
                    <LineIcon />
                </Avatar>
            </LineShareButton>
            <LinkedinShareButton url={"https://somereactblog.azurewebsites.net"}>
            <Avatar className={classes.ShareButton}>
                    <LinkedinIcon />
                </Avatar>
            </LinkedinShareButton>
        </div>
    )
}