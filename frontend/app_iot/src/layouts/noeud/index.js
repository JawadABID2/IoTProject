
import DashboardLayout from "LayoutContainers/DashboardLayout";
import DashboardNavbar from "Navbars/DashboardNavbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import { Link } from 'react-router-dom';
import ComplexStatisticsCard from "Cards/StatisticsCards/ComplexStatisticsCard";
function Noeud() {
    return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox py={3}>
        <Grid container spacing={10}>
      
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={4}>
            
              <Link to="/devices/wsSENSCAP">
           
                <ComplexStatisticsCard
                  color="dark"
                  icon="weekend"
                  title="Station météo SENSECAP "
                  count={1}
                  percentage={{
                    color: "success",
                    amount: "+55%",
                    label: "than lask week",
                  }}
                />
              </Link>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
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
          </Grid>
          {/* <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={4}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Followers"
                count="+91"
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
                title="Followers"
                count="+91"
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
                title="Followers"
                count="+91"
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
                title="Followers"
                count="+91"
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
      </DashboardLayout>
    );
  }
  
  export default Noeud;