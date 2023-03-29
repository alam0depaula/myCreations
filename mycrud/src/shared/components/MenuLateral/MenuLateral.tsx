import React from "react";
import {
  Box,
  Drawer,
  Avatar,
  useTheme,
  Divider,
  List,
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import UserLogo from "./images/userLogo.png";

interface IAppMenuLateral {
  children: React.ReactNode;
}
export const MenuLateral: React.FC<IAppMenuLateral> = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Drawer variant="permanent">
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(10), width: theme.spacing(10) }}
              src={UserLogo}
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>Menu</Icon>
                </ListItemIcon>
                <ListItemText primary="Página inicial" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
