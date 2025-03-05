import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toAbsoluteUrl } from "src/utils";
import { useAppDispatch } from "src/store";
import { Popover, Box, Avatar } from "@mui/material";
import { Trans } from "react-i18next";
import { logout, selectUser } from "src/store/auth";
import { ListWithIcon, Button } from "src/components/Elements";
import styled from "@emotion/styled";
import { Theme } from "@mui/material/styles";

const StyledUserProfileCover = styled(Box)<{ theme?: Theme }>(({ theme }) => ({
  width: "100%",
  padding: "15px",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  position: "relative",
  overflow: "hidden",
  height: "140px",
  "&::before": {
    content: "''",
    position: "absolute",
    margin: "0 auto",
    backgroundColor: "#35ffc3",
    width: "75px",
    height: "75px",
    left: "50%",
    top: "50%",
    marginTop: "-55px",
    marginLeft: "-37px",
    zIndex: 1,
    borderRadius: "1000px",
    animation: "ripple 0.7s linear infinite",
  },

  ".userCardPhoto": {
    margin: "0 auto",
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    position: "relative",
    zIndex: 1,

    img: {
      display: "block",
      width: "100%",
      minHeight: "100%",
    },
  },

  ".userCardName": {
    textAlign: "center",
    color: "#fff",
    paddingTop: "15px",
    fontWeight: 800,
    fontSize: "13px",
  },
}));

function UserProfile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const user = useSelector(selectUser);
  const id = open ? "profileDropdown" : undefined;

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const buttons = useMemo(() => {
    return [
      {
        title: <Trans>My Profile</Trans>,
        subtitle: <Trans>Account settings and more</Trans>,
        iconName: "fad fa-user greenText",
        onClick: () => navigate("/profile"),
      },
      {
        title: <Trans>My Messages</Trans>,
        subtitle: <Trans>Write or view your inbox messages</Trans>,
        iconName: "fad fa-comments-alt",
        onClick: () => navigate("/messenger"),
      },
      {
        title: <Trans>Sign Out</Trans>,
        subtitle: <Trans>Your session will be ended</Trans>,
        iconName: "fad fa-sign-out redText",
        onClick: () => dispatch(logout(false, false)),
      },
    ];
  }, [dispatch, navigate]);

  return (
    <div aria-describedby={id}>
      <div className="headerUser">
        <Button
          onClick={handleClick}
          variant="text"
          sx={{
            borderRadius: "20px",
            fontSize: "13px",
            paddingRight: "10px !important",
            border: "1px solid #d6dfef !important",
          }}
          iconright
          icon={<Avatar alt="Profile picture" src={user?.photo || undefined} sx={{ width: 24, height: 24 }} />}
        >
          <span>
            <Trans>Hi, </Trans>
          </span>
          <strong>{user?.firstname}</strong>
        </Button>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          onClose={handleClick}
          elevation={1}
        >
          <Box sx={{ width: "340px" }}>
            <StyledUserProfileCover style={{ backgroundImage: `url(${toAbsoluteUrl("/static/img/loginBg.jpg")})` }}>
              <div className="userCardPhoto">
                <Avatar alt="Profile picture" src={user?.photo} sx={{ width: 75, height: 75 }} />
              </div>
              <div className="userCardName">
                {user?.firstname} - {user?.lastname}
              </div>
            </StyledUserProfileCover>

            <ListWithIcon items={buttons} />
          </Box>
        </Popover>
      </div>
    </div>
  );
}

export default UserProfile;
