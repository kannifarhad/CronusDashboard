import { Grid2 as Grid } from "@mui/material";
import ContentWrapper from "../../Dashboard/components/Layout/ContentWrapper";
import { memo } from "react";
import UsersListBlock from "./components/UsersList";
import { Helmet } from "react-helmet-async";

function UsersListPage(props) {
  console.log("title", props);
  return (
    <ContentWrapper {...props}>
      <Helmet>
        <title>{`${props.title} - ${props.description} | Cronus Dashboard`}</title>
      </Helmet>
      <Grid container>
        <Grid size={8} style={{ padding: "20px" }}>
          <UsersListBlock />
        </Grid>
      </Grid>
    </ContentWrapper>
  );
}
export default memo(UsersListPage);
