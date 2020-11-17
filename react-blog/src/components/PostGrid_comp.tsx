import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard_comp";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
      padding: theme.spacing(3, 3),
    },
    add: {
      textAlign: "center",
    },
  })
);

function PostGrid(props: any) {
  const [ItemArray, setItemArray] = useState<any[]>([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("https://reactmemoapi.azurewebsites.net/api/Post")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setItemArray(response);
        console.log("why not work then?");
      })
      .catch(() => console.log("it didn't work"));
  }, [props.SearchQuery]);

  var Cards: JSX.Element[] = [];
  ItemArray.forEach((el: any, i: Number) => {
    if (el === undefined) {
      return;
    } else {
      Cards.push(
        <div className={classes.root}>
          <Grid container wrap="nowrap" spacing={3}>
            <Grid key={"card_" + i} item xs={12} sm={6} zeroMinWidth>
              <PostCard
                Title={el["title"]}
                Content={el["content"]}
                ID={el["id"]}
                Date={el["datePosted"]}
              />
            </Grid>
          </Grid>
        </div>
      );
    }
  });

  return (
    <div className={classes.root}>
      <Grid>{Cards.reverse()}</Grid>
    </div>
  );
}

export default PostGrid;
