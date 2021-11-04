import React from "react";
import "./Sidebar.css";
import { Grid, Typography, Divider } from "@material-ui/core";

import profile from "./images/sidebar_image.svg";
// import { IconButton } from "@material-ui/icons";
import { BrowserRouter } from "react-router-dom";
import BodyHeader from "../BodyHeader/BodyHeader";
import Graph from "../Graph/Graph";
import Header from "../Header/Header";
import Table2 from "../Tables/Table2";
import Table1 from "../Tables/Table1";

import Pie from "../PieChart/Pie";
import S1 from "./images/1.svg";
import S2 from "./images/2.svg";
import S3 from "./images/3.svg";
import S4 from "./images/4.svg";
import S5 from "./images/5.svg";
import S6 from "./images/6.svg";
import S7 from "./images/7.svg";
import BottomBody1 from "../Graph/images/BottomBody1.svg";
import BottomBody2 from "../Graph/images/BottoBody2.svg";

const Sidebar = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>

      <Grid container className="whole">
        <Grid className="sideBar" item xs={2}>
          {/* -----Avatar-------- */}
          <Grid item xs={12} className="main">
            <img className="dp" src={profile} alt="Logo" />
            <Typography className="name1">Roman Kutepov</Typography>
            <Typography className="name2">Brain Director</Typography>
          </Grid>
          <Divider variant="middle" />
          <br />
          {/* --------Options----- */}
          <Grid item xs={12} className="options">
            {/* <img src={whole} alt="Logo" /> */}
            <li>
              <Grid item xs={12} className="avatar">
                <Typography>
                  <img className="img1" src={S1} alt="Logo" /> Dashboard
                </Typography>
              </Grid>
              <br />
              <Grid item xs={12} className="avatar">
                <Typography>
                  <img className="img1" src={S2} alt="Logo" /> Users
                </Typography>
              </Grid>
              <br />
              <Grid item xs={12} className="avatar">
                <Typography>
                  <img className="img1" src={S3} alt="Logo" /> Products
                </Typography>
              </Grid>
              <br />
              <Grid item xs={12} className="avatar">
                <Typography>
                  <img className="img1" src={S4} alt="Logo" /> Authentication
                </Typography>
              </Grid>
              <br />
              <Grid item xs={12} className="avatar">
                <Typography>
                  <img className="img1" src={S5} alt="Logo" /> Typography
                </Typography>
              </Grid>
              <br />
              <Grid item xs={12} className="avatar">
                <Typography>
                  <img className="img1" src={S6} alt="Logo" /> Icons & Images
                </Typography>
              </Grid>
            </li>
            <br />
            <Divider variant="middle" />
            <br />

            <Typography className="support">Support</Typography>
            <br />
            <Grid item xs={12} className="avatar">
              <Typography>
                <img className="img1" src={S7} alt="Logo" /> Support
              </Typography>
            </Grid>
            <br />
            <Divider variant="middle" />
            <br />
          </Grid>
        </Grid>
        {/* ------BodyHeader------------------------ */}
        <Grid item xs={10}>
          <Grid item xs={12} className="bodyHeader">
            <BrowserRouter>
              <BodyHeader />
            </BrowserRouter>
          </Grid>
          {/* ------------Mid Body: Graph--------------------- */}
          <Grid className="graph" container>
            <Grid className="barChart">
              <BrowserRouter>
                <Graph />
              </BrowserRouter>
            </Grid>
            <Grid className="pieChart">
              <BrowserRouter>
                <Pie />
              </BrowserRouter>
            </Grid>
          </Grid>
          {/* ------------Bottom Body---------------------- */}
          <Grid className="tableLists" container>
            <Grid className="tableList1">
              <BrowserRouter>
                <Table1 />
              </BrowserRouter>
            </Grid>

            <Grid className="tableList2">
              <BrowserRouter>
                <Table2 />
              </BrowserRouter>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Sidebar;
