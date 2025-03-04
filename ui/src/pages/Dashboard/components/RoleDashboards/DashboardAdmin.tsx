import ContentWrapper from "../Layout/ContentWrapper";
import { DashBoardInfoBlock } from "../../../../components/Molecules";
import { Grid2 as Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useTranslation, Trans } from "react-i18next";
import Clock from "../Clock";
import { LineChart } from "@mui/x-charts/LineChart";

export default function Dashboard({ title, description }) {
  const { t } = useTranslation();
  return (
    <ContentWrapper title={title} description={description}>
      <Helmet>
        <title>{`${t("Main Panel")} | Cronus Dashboard`}</title>
      </Helmet>

      <Grid container spacing="20px"  style={{ padding: "20px 20px" }}>
        <Grid size={6} >
          <Grid container spacing="20px" gap="20px">
            <Grid size={6}>
              <DashBoardInfoBlock
                mainIcon="fad fa-newspaper"
                title={<Trans>Published Posts</Trans>}
                description="205"
                footerIcon="icon-link"
                foooterText={<Trans>View All Posts</Trans>}
                color="yellow"
              />
            </Grid>
            <Grid size={6}>
              <DashBoardInfoBlock
                mainIcon="fad fa-folder-tree"
                title={<Trans>Post Categories</Trans>}
                description="20"
                footerIcon="icon-link"
                foooterText={<Trans>View All Post Categories</Trans>}
                color="green"
              />
            </Grid>
            <Grid size={6}>
              <DashBoardInfoBlock mainIcon="fad fa-users" title={<Trans>Users</Trans>} description="5" footerIcon="icon-link" foooterText={<Trans>View All Users</Trans>} color="red" />
            </Grid>
            <Grid size={6}>
              <DashBoardInfoBlock
                mainIcon="fad fa-server"
                title={<Trans>Used Space</Trans>}
                description="49/50 GB"
                footerIcon="icon-warning"
                foooterText={<Trans>For increasing server space contact administrator</Trans>}
                color="blue"
              />
            </Grid>

            <Grid size={6} style={{ display: "flex", justifyContent: "flex-start" }}>
              <Clock />
            </Grid>

          </Grid>
        </Grid>

        <Grid size={6}>
          <Grid size={12}>
            <DashBoardInfoBlock
              mainIcon="fad fa-piggy-bank"
              title={<Trans>GDP statistics</Trans>}
              description="1990-2018"
              footerIcon="icon-money"
              foooterText={<Trans>This is chart sample for dashboard</Trans>}
              color="blue"
            >
              <LineChart
                xAxis={[
                  {
                    id: "Years",
                    data: years,
                    scaleType: "time",
                    labelStyle:{
                      fontSize:"9px",
                    },
                    valueFormatter: (date) => date.getFullYear().toString(),
                  },
                ]}
                series={[
                  {
                    id: "France",
                    label: "French GDP per capita",
                    data: FranceGDPperCapita,
                    stack: "total",
                    area: true,
                    showMark: false,
                  },
                  {
                    id: "Germany",
                    label: "German GDP per capita",
                    data: GermanyGDPperCapita,
                    stack: "total",
                    area: true,
                    showMark: false,
                  },
                  {
                    id: "United Kingdom",
                    label: "UK GDP per capita",
                    data: UKGDPperCapita,
                    stack: "total",
                    area: true,
                    showMark: false,
                  },
                ]}
                // width={650}
                grid={{ vertical: true, horizontal: true }}
                height={300}
                margin={{ left: 70 }}
                slotProps={{
                  legend:{
                    labelStyle:{
                      fontSize:11
                    }
                  }
                }}
                sx={{
                  width:"100%",
                  fontSize:"12px",
                }}
              />
            </DashBoardInfoBlock>
          </Grid>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
}


const years = [
  new Date(1990, 0, 1),
  new Date(1991, 0, 1),
  new Date(1992, 0, 1),
  new Date(1993, 0, 1),
  new Date(1994, 0, 1),
  new Date(1995, 0, 1),
  new Date(1996, 0, 1),
  new Date(1997, 0, 1),
  new Date(1998, 0, 1),
  new Date(1999, 0, 1),
  new Date(2000, 0, 1),
  new Date(2001, 0, 1),
  new Date(2002, 0, 1),
  new Date(2003, 0, 1),
  new Date(2004, 0, 1),
  new Date(2005, 0, 1),
  new Date(2006, 0, 1),
  new Date(2007, 0, 1),
  new Date(2008, 0, 1),
  new Date(2009, 0, 1),
  new Date(2010, 0, 1),
  new Date(2011, 0, 1),
  new Date(2012, 0, 1),
  new Date(2013, 0, 1),
  new Date(2014, 0, 1),
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
  new Date(2018, 0, 1),
];

const FranceGDPperCapita = [
  28129, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645, 30341.807, 31323.078, 32284.611, 33409.68, 33920.098, 34152.773, 34292.03, 35093.824, 35495.465, 36166.16, 36845.684,
  36761.793, 35534.926, 36086.727, 36691, 36571, 36632, 36527, 36827, 37124, 37895, 38515.918,
];

const UKGDPperCapita = [
  26189, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 28472.248, 29259.764, 30077.385, 30932.537, 31946.037, 32660.441, 33271.3, 34232.426, 34865.78, 35623.625, 36214.07, 36816.676,
  36264.79, 34402.36, 34754.473, 34971, 35185, 35618, 36436, 36941, 37334, 37782.83, 38058.086,
];

const GermanyGDPperCapita = [
  25391, 26769.96, 27385.055, 27250.701, 28140.057, 28868.945, 29349.982, 30186.945, 31129.584, 32087.604, 33367.285, 34260.29, 34590.93, 34716.44, 35528.715, 36205.574, 38014.137, 39752.207,
  40715.434, 38962.938, 41109.582, 43189, 43320, 43413, 43922, 44293, 44689, 45619.785, 46177.617,
];