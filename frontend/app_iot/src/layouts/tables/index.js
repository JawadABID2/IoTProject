/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "LayoutContainers/DashboardLayout";
import DashboardNavbar from "Navbars/DashboardNavbar";
import Footer from "Footer";
import DataTable from "Tables/DataTable";
import ComplexStatisticsCard from "Cards/StatisticsCards/ComplexStatisticsCard";
import ReportsBarChart from "Charts/BarCharts/ReportsBarChart";
// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { Link } from 'react-router-dom';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import routes from "routes";

function Devices() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });
  const devices = [
    {name:"sensecap1", batt:3.36, etat:"active", lastWakeUp:'12 min' },
    {name:"sensecap2", batt:3.35, etat:"active", lastWakeUp:'14 min' },
    {name:"sensecap3", batt:3.34, etat:"active", lastWakeUp:'16 min' },
    {name:"sensecap4", batt:3.33, etat:"active", lastWakeUp:'18 min' },
  ]
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={10}>
          {devices.map((device)=>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={4}>
            
              <Link to="/devices/wsSENSCAP">
           
                <ComplexStatisticsCard
                  color="dark"
                  icon="weekend"
                  title={device.name}
                  count={device.etat}
                  percentage={{
                    color: "success",
                    amount: device.batt,
                    label: device.lastWakeUp,
                  }}
                />
              </Link>
            </MDBox>
          </Grid>
          )}
          {/* <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={4}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Station météo openSNZ"
                count="1"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={4}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Module colde chain 1"
                count="1"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={4}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Module colde chain 2"
                count="1"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={4}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Module colde chain 3"
                count="1"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={4}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Module drajino rs485"
                count="1"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={4}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Pyranomètre jaune "
                count="1"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={4}>
              <ComplexStatisticsCard
               color="dark"
               icon="weekend"
                title="pyranomètre orange"
                count="1"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid> */}
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Devices;
