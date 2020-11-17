import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Divider from "@material-ui/core/Divider";
import { useTranslation } from "react-i18next";
import "./I18n";
// import LoginNav from "./Login"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      border: "1px solid #000",
      backgroundColor: "#FFFFFF",
    },
    media: {
      height: 140,
    },
    details: {
      display: "flex",
      flexDirection: "column",
      component: "div",
      my: 2,
      textOverflow: "ellipsis",
      overflow: "hidden",
      bgcolor: "background.paper",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(4, 4),
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(5, 20, 5),
      maxHeight: 500,
      overflow: "auto",
      width: "100%",
    },
    date: {
      paddingLeft: theme.spacing(2),
    },
    divider: {
      paddingBottom: theme.spacing(2),
    },
  })
);

interface IMediaCardProps {
  Title: string | undefined;
  Content: string | undefined;
  ID: number | any;
  Date: string | undefined;
}

function PostCard(props: IMediaCardProps) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.log(props.ID);

    fetch("https://reactmemoapi.azurewebsites.net/api/Post/" + props.ID, {
      method: "DELETE",
      // We convert the React state to JSON and send it as the POST body
      headers: { "Content-Type": "application/json" },
    }).then(function (response) {
      console.log(response);
      return response.json();
    });
  };

  const { t, i18n } = useTranslation();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardActionArea onClick={handleOpen}>
          <div className={classes.divider}>
            <CardContent className={classes.media}>
              <Typography gutterBottom variant="h5" component="h2">
                {props.Title}
              </Typography>

              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                paragraph
              >
                {props.Content}
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </div>

      <Divider variant="middle" />

      <div className={classes.date}>
        <Typography variant="body2" color="textSecondary" component="p">
          {t("DatePosted") + ": " + props.Date?.split("T")[0]}
        </Typography>
      </div>

      <CardActions>
        <Button size="small" color="secondary" onClick={handleDelete}>
          {t("Delete")}
        </Button>
      </CardActions>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.Title}</h2>
            <p id="transition-modal-description">{props.Content}</p>
          </div>
        </Fade>
      </Modal>
    </Card>
  );
}

export default PostCard;
