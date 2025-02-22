import { Grid } from "@mui/material";
import ContentWrapper from "../../Dashboard/ContentWrapper";
import { memo } from "react";
import UsersListBlock from "./components/UsersList";

function UsersListPage(props) {
  console.log("props", props)
  return (
    <ContentWrapper {...props}>
      <Grid container>
        <Grid item xs={12} style={{padding: '0px 20px'}}>
          <UsersListBlock />
        </Grid>
      </Grid>
    </ContentWrapper>
  );
}
export default memo(UsersListPage);
