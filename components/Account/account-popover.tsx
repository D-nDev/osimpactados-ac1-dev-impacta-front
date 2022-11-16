import { UserContext } from "contexts/UserContext";
import { Box, MenuItem, MenuList, Popover, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";

export const AccountPopover = (props: any) => {
  const { anchorEl, onClose, open, ...other } = props;
  const userContext: any = useContext(UserContext);
  const cookies = new Cookies();
  const [myUser, setMyUser] = useState();

  const handleSignOut = async () => {
    try {
      cookies.remove('token');
      window.location.href = '/'
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setMyUser(userContext.user.name);
  }, [userContext])

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: { width: "300px" },
      }}
      {...other}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Sua conta</Typography>
        <Typography color="text.secondary" variant="body2">
          {myUser}
        </Typography>
      </Box>
      <MenuList
        disablePadding
        sx={{
          "& > *": {
            "&:first-of-type": {
              borderTopColor: "divider",
              borderTopStyle: "solid",
              borderTopWidth: "1px",
            },
            padding: "12px 16px",
          },
        }}
      >
        <MenuItem onClick={handleSignOut}>Deslogar</MenuItem>
      </MenuList>
    </Popover>
  );
};
