import { Grid2 as Grid } from "@mui/material";
import ContentWrapper from "../../Dashboard/components/Layout/ContentWrapper";
import { memo } from "react";
import UserAddForm from "./UserAddForm";
import { Helmet } from "react-helmet-async";

function UserAdd(props) {
  return (
    <ContentWrapper {...props}>
      <Helmet>
        <title>{`${props.title} - ${props.description} | Cronus Dashboard`}</title>
      </Helmet>
      <Grid style={{ padding: "20px" }}>
        <Grid size={12} >
          <UserAddForm />
        </Grid>
      </Grid>
    </ContentWrapper>
  );
}
export default memo(UserAdd);
