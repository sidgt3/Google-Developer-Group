import React from "react";
import "./Table1.css";
import { Grid, Typography, Divider, Button } from "@material-ui/core";

import T1 from "./images/1.svg";
import T2 from "./images/2.svg";
import T3 from "./images/3.svg";
import T4 from "./images/4.svg";

const Table1 = () => {
  return (
    <Grid container className="whole">
      <Grid item xs={12} className="options">
        {/* <img src={whole} alt="Logo" /> */}
        <li>
          {/* -------Row-1----------------- */}
          <Grid item xs={12} className="avatar">
            <Typography>
              <img className="img1" src={T1} alt="Logo" />
              Dropbox
            </Typography>

            <Typography color="textSecondary" variant="body2" component="p">
              Updated 5hr ago
            </Typography>
          </Grid>
          <br />
          <Divider variant="middle" />
          <br />
          {/* -------Row-2----------------- */}
          <Grid item xs={12} className="avatar">
            <Typography>
              <img className="img1" src={T2} alt="Logo" /> Medium Corporation
            </Typography>
            <Typography color="textSecondary" variant="body2" component="p">
              Updated 5hr ago
            </Typography>
          </Grid>
          <br />
          <Divider variant="middle" />
          <br />
          {/* -------Row-3----------------- */}
          <Grid item xs={12} className="avatar">
            <Typography>
              <img className="img1" src={T3} alt="Logo" /> GitHub
            </Typography>
            <Typography color="textSecondary" variant="body2" component="p">
              Updated 5hr ago
            </Typography>
          </Grid>
          <br />
          <Divider variant="middle" />
          <br />
          {/* -------Row-4----------------- */}
          <Grid item xs={12} className="avatar">
            <Typography>
              <img className="img1" src={T4} alt="Logo" /> Slac
            </Typography>
            <Typography color="textSecondary" variant="body2" component="p">
              Updated 5hr ago
            </Typography>
          </Grid>
          <br />
          <Divider variant="middle" />
          <br />
        </li>
      </Grid>
    </Grid>
  );
};

export default Table1;
